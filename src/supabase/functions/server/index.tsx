import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = new Hono();

// Create Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// Initialize storage bucket on startup
const BUCKET_NAME = 'make-87cfe7b3-images';

async function initializeStorage() {
  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some(bucket => bucket.name === BUCKET_NAME);
    
    if (!bucketExists) {
      await supabase.storage.createBucket(BUCKET_NAME, {
        public: true,
        fileSizeLimit: 10485760, // 10MB
      });
      console.log(`Created storage bucket: ${BUCKET_NAME}`);
    }
  } catch (error) {
    console.error('Error initializing storage:', error);
  }
}

// Initialize storage on startup
initializeStorage();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-87cfe7b3/health", (c) => {
  return c.json({ status: "ok" });
});

// Submit form endpoint
app.post("/make-server-87cfe7b3/submit-form", async (c) => {
  try {
    const body = await c.req.json();
    const { name, phone, dateTime, source } = body;

    // Validate input
    if (!name || !phone) {
      return c.json({ error: "Name and phone are required" }, 400);
    }

    // Generate unique ID for this submission
    const id = `form_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Create submission data object
    const submissionData = {
      id,
      name,
      phone,
      dateTime: dateTime || null,
      source: source || 'unknown',
      submittedAt: new Date().toISOString(),
    };
    
    // Store in Supabase table with key-value structure
    const { data, error } = await supabase
      .from('ОралПолимерЗаявки')
      .insert([{
        key: id,
        value: submissionData
      }])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      return c.json({ 
        error: "Failed to submit form", 
        details: error.message 
      }, 500);
    }

    console.log(`Form submission stored with ID: ${id}`, { name, phone, source });

    return c.json({ 
      success: true, 
      message: "Form submitted successfully",
      id
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return c.json({ 
      error: "Failed to submit form", 
      details: error.message 
    }, 500);
  }
});

// Get all form submissions (for admin purposes)
app.get("/make-server-87cfe7b3/get-submissions", async (c) => {
  try {
    const { data, error } = await supabase
      .from('ОралПолимерЗаявки')
      .select('key, value')
      .order('key', { ascending: false });

    if (error) {
      console.error('Supabase select error:', error);
      return c.json({ 
        error: "Failed to get submissions", 
        details: error.message 
      }, 500);
    }

    // Extract values from key-value pairs and sort by submission time
    const submissions = (data || []).map(row => row.value);
    const sorted = submissions.sort((a, b) => {
      return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
    });

    console.log(`Returning ${sorted.length} submissions`);

    return c.json({ 
      success: true, 
      count: sorted.length,
      submissions: sorted
    });
  } catch (error) {
    console.error("Error getting submissions:", error);
    return c.json({ 
      error: "Failed to get submissions", 
      details: error.message 
    }, 500);
  }
});

Deno.serve(app.fetch);