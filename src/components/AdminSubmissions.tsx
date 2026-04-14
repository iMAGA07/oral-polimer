import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { RefreshCw, User, Phone, Calendar, Tag } from "lucide-react";

interface Submission {
  id: string;
  name: string;
  phone: string;
  dateTime: string | null;
  source: string;
  submittedAt: string;
}

export function AdminSubmissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { projectId, publicAnonKey } = await import('../utils/supabase/info.tsx');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-87cfe7b3/get-submissions`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissions(result.submissions);
      } else {
        setError('Не удалось загрузить заявки');
      }
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError('Произошла ошибка при загрузке заявок');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString('ru-RU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl text-[#183B4E] mb-2">Заявки с сайта</h1>
              <p className="text-gray-600">
                Всего заявок: <span className="font-bold text-[#183B4E]">{submissions.length}</span>
              </p>
            </div>
            <Button
              onClick={fetchSubmissions}
              disabled={loading}
              className="bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#183B4E]"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Обновить
            </Button>
          </div>

          {error && (
            <Card className="bg-red-50 border-red-200 mb-8">
              <CardContent className="p-6">
                <p className="text-red-600">{error}</p>
              </CardContent>
            </Card>
          )}

          {loading && submissions.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#183B4E] border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Загрузка заявок...</p>
            </div>
          ) : submissions.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-gray-600 text-lg">Пока нет заявок</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {submissions.map((submission) => (
                <Card key={submission.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-[#183B4E] to-[#183B4E]/90">
                    <CardTitle className="text-white text-lg">
                      Заявка #{submission.id.split('_')[1]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#FDB913]/10 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-[#183B4E]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Имя</p>
                          <p className="text-[#183B4E]">{submission.name}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#FDB913]/10 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-[#183B4E]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Телефон</p>
                          <a 
                            href={`tel:${submission.phone}`}
                            className="text-[#183B4E] hover:text-[#FDB913] transition-colors"
                          >
                            {submission.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#FDB913]/10 rounded-full flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-[#183B4E]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Дата отправки</p>
                          <p className="text-[#183B4E]">{formatDate(submission.submittedAt)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#FDB913]/10 rounded-full flex items-center justify-center">
                          <Tag className="w-5 h-5 text-[#183B4E]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Источник</p>
                          <p className="text-[#183B4E]">{submission.source}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}