import { useState, useEffect } from "react";
import { MapPin, Calendar, Home, ArrowLeft, Check, Maximize2, Building2, Users, DollarSign, Play, X, Download, Share2, ZoomIn } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";
import { AnimatedSection } from "./AnimatedSection";

// Import project images
import karavanImage from 'figma:asset/5d25a5f42f0d9704fd3463e929ec894b7774b53f.png';
import omegaImage from 'figma:asset/df615f608c315b399b125ae1af49bccfb214b94c.png';
import zachagansk1Image from 'figma:asset/38fc71108ec7a69648b9064550207d74b396fc54.png';
import zachagansk2Image from 'figma:asset/009c26f0a94b22f482a546ebb80b2b453d4a6cd7.png';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigate: (section: string) => void;
  onOpenContactModal?: () => void;
}

export function ProjectDetailPage({ projectId, onNavigate, onOpenContactModal }: ProjectDetailPageProps) {
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);
  const [show3DTour, setShow3DTour] = useState(false);

  const projectData: { [key: string]: any } = {
    karavan: {
      name: "ЖК Караван",
      location: "г. Уральск, мкр. Караван",
      status: "Объект сдан",
      image: karavanImage,
      apartments: "1-3 комн.",
      deadline: "Объект сдан",
      description: "Современный жилой комплекс в развитом микрорайоне Караван с развитой инфраструктурой, закрытой территорией и детскими площадками.",
      floors: "9 этажей",
      totalFlats: "200 квартир",
      parking: "Наземная парковка",
      virtualTour: "https://my.matterport.com/show/?m=SxQL3iGyoDo",
      features: [
        "Объект сдан",
        "Доступны гаражи",
        "Детские площадки",
        "Парковка",
        "Видеонаблюдение",
        "Развитая инфраструктура"
      ],
      layouts: [
        {
          id: "1room-karavan",
          type: "1-комнатная",
          area: 50,
          rooms: 1,
          price: 18000000,
          floor: "2-9",
          available: 15,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Кухня", "Спальня", "Санузел", "Балкон"],
        },
        {
          id: "2room-karavan",
          type: "2-комнатная",
          area: 70,
          rooms: 2,
          price: 25200000,
          floor: "3-8",
          available: 10,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Кухня-гостиная", "2 спальни", "Санузел", "Лоджия"],
        },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1667584523543-d1d9cc828a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMTI0NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMTAzNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    omega: {
      name: "ЖК Омега",
      location: "г. Уральск, мкр. Омега",
      status: "Объект сдан",
      image: omegaImage,
      apartments: "1-3 комн.",
      deadline: "Объект сдан",
      description: "Комфортный жилой комплекс в микрорайоне Омега с современными планировками, зелёными дворами и удобной транспортной доступностью.",
      floors: "9 этажей",
      totalFlats: "150 квартир",
      parking: "Наземная парковка",
      virtualTour: "https://my.matterport.com/show/?m=SxQL3iGyoDo",
      features: [
        "Объект сдан",
        "Современные планировки",
        "Зелёные дворы",
        "Парковка",
        "Детские площадки"
      ],
      layouts: [
        {
          id: "1room-omega",
          type: "1-комнатная",
          area: 40,
          rooms: 1,
          price: 15000000,
          floor: "2-9",
          available: 5,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Кухня", "Спальня", "Санузел"],
        },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMDYyNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    "zachagansk-1": {
      name: "ЖК Зачаганск #1",
      location: "г. Уральск, ул. Жумалиева 48",
      status: "Объект сдан",
      image: zachagansk1Image,
      apartments: "1-3 комн.",
      deadline: "Объект сдан",
      description: "Качественный жилой комплекс в микрорайоне Зачаганск с продуманными планировками, благоустроенной территорией и развитой инфраструктурой.",
      floors: "9 этажей",
      totalFlats: "180 квартир",
      parking: "Наземная парковка",
      virtualTour: "https://my.matterport.com/show/?m=SxQL3iGyoDo",
      features: [
        "Объект сдан",
        "Благоустроенная территория",
        "Детские площадки",
        "Парковка"
      ],
      layouts: [
        {
          id: "1room-z1",
          type: "1-комнатная",
          area: 45,
          rooms: 1,
          price: 16000000,
          floor: "1-9",
          available: 8,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Кухня", "Спальня", "Санузел"],
        },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1758193431355-54df41421657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjExMjcyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    "zachagansk-2": {
      name: "ЖК Зачаганск #2",
      location: "г. Уральск, ул. Жангир хана 78",
      status: "В продаже",
      image: zachagansk2Image,
      apartments: "1-3 комн.",
      deadline: "Сдача в 2026",
      description: "Новый жилой комплекс в микрорайоне Зачаганск с современными решениями, закрытой территорией и всей необходимой инфраструктурой.",
      floors: "9 этажей",
      totalFlats: "220 квартир",
      parking: "Наземная парковка",
      virtualTour: "https://my.matterport.com/show/?m=SxQL3iGyoDo",
      features: [
        "Строится",
        "Современные решения",
        "Парковка",
        "Закрытая территория"
      ],
      layouts: [
        {
          id: "1room-z2",
          type: "1-комнатная",
          area: 50,
          rooms: 1,
          price: 17000000,
          floor: "2-9",
          available: 20,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Кухня", "Спальня", "Санузел", "Балкон"],
        },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1569764102256-f7ff0673bd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBjaXR5JTIwYnVpbGRpbmdzJTIwZHJvbmV8ZW58MXx8fHwxNzYxMTUyNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    zhumalieva: {
      name: "ЖК на Жумалиева",
      location: "г. Уральск, ул. Жумалиева",
      status: "В продаже",
      image: "https://images.unsplash.com/photo-1572871183765-f53b7adab0e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwa2F6YWtoc3RhbnxlbnwxfHx8fDE3NjExNTI0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      apartments: "1-3 комн.",
      deadline: "4 кв. 2026",
      description: "Современный жилой комплекс в развитом районе с отличной инфраструктурой",
      floors: "9-12 этажей",
      totalFlats: "180 квартир",
      parking: "Подземная парковка на 80 мест",
      virtualTour: "https://my.matterport.com/show/?m=SxQL3iGyoDo",
      features: [
        "Закрытая охраняемая территория",
        "Детские и спортивные площадки",
        "Подземная парковка",
        "Видеонаблюдение 24/7",
        "Консьерж-сервис",
        "Магазины на первом этаже",
        "Зелёный двор без машин",
        "Современные лифты",
      ],
      layouts: [
        {
          id: "1room-45",
          type: "1-комнатная",
          area: 45,
          rooms: 1,
          price: 18000000,
          floor: "3-9",
          available: 24,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Кухня-гостиная", "Спальня", "Санузел", "Балкон"],
        },
        {
          id: "2room-62",
          type: "2-комнатная",
          area: 62,
          rooms: 2,
          price: 24800000,
          floor: "2-10",
          available: 38,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Кухня-гостиная", "2 спальни", "Санузел", "Лоджия"],
        },
        {
          id: "2room-68",
          type: "2-комнатная",
          area: 68,
          rooms: 2,
          price: 27200000,
          floor: "4-12",
          available: 19,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Просторная кухня-гостиная", "2 спальни", "2 санузла", "Балкон + лоджия"],
        },
        {
          id: "3room-85",
          type: "3-комнатная",
          area: 85,
          rooms: 3,
          price: 34000000,
          floor: "5-12",
          available: 12,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Кухня-гостиная", "3 спальни", "2 санузла", "Гардеробная", "2 балкона"],
        },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1667584523543-d1d9cc828a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMTI0NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMTAzNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMDYyNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1572871183765-f53b7adab0e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwa2F6YWtoc3RhbnxlbnwxfHx8fDE3NjExNTI0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1758193431355-54df41421657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjExMjcyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1569764102256-f7ff0673bd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBjaXR5JTIwYnVpbGRpbmdzJTIwZHJvbmV8ZW58MXx8fHwxNzYxMTUyNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    zheltoksan: {
      name: "ЖК на Желтоксан",
      location: "г. Уральск, ул. Желтоксан",
      status: "В продаже",
      image: "https://images.unsplash.com/photo-1758193431355-54df41421657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjExMjcyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      apartments: "2-3 комн.",
      deadline: "3 кв. 2026",
      description: "Премиальный жилой комплекс бизнес-класса в центре города",
      floors: "12-16 этажей",
      totalFlats: "240 квартир",
      parking: "Двухуровневая подземная парковка",
      virtualTour: "https://my.matterport.com/show/?m=SxQL3iGyoDo",
      features: [
        "Премиум-класс отделки",
        "Панорамное остекление",
        "Высокие потолки 3.2 м",
        "Фитнес-центр для жильцов",
        "Детский развивающий центр",
        "Ландшафтный дизайн",
        "Умный дом",
        "Консьерж 24/7",
      ],
      layouts: [
        {
          id: "2room-72",
          type: "2-комнатная",
          area: 72,
          rooms: 2,
          price: 32400000,
          floor: "3-14",
          available: 42,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Кухня-гостиная", "2 спальни", "2 санузла", "Панорамный балкон"],
        },
        {
          id: "2room-78",
          type: "2-комнатная",
          area: 78,
          rooms: 2,
          price: 35100000,
          floor: "5-16",
          available: 28,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Просторная кухня-гостиная", "2 спальни", "2 санузла", "Гардеробная", "Терраса"],
        },
        {
          id: "3room-95",
          type: "3-комнатная",
          area: 95,
          rooms: 3,
          price: 42750000,
          floor: "6-16",
          available: 18,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Кухня-гостиная", "3 спальни", "2 санузла", "Гардеробная", "2 балкона"],
        },
        {
          id: "3room-110",
          type: "3-комнатная Premium",
          area: 110,
          rooms: 3,
          price: 49500000,
          floor: "10-16",
          available: 8,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Панорамная гостиная", "3 спальни", "3 санузла", "Гардеробная", "Кабинет", "Терраса"],
        },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1667584523543-d1d9cc828a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMTI0NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMTAzNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMDYyNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1758193431355-54df41421657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjExMjcyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1572871183765-f53b7adab0e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwa2F6YWtoc3RhbnxlbnwxfHx8fDE3NjExNTI0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1569764102256-f7ff0673bd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBjaXR5JTIwYnVpbGRpbmdzJTIwZHJvbmV8ZW58MXx8fHwxNzYxMTUyNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
    tauelsizdik: {
      name: "ЖК на Тауелсиздик",
      location: "г. Уральск, пр. Тауелсиздик",
      status: "Скоро",
      image: "https://images.unsplash.com/photo-1569764102256-f7ff0673bd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBjaXR5JTIwYnVpbGRpbmdzJTIwZHJvbmV8ZW58MXx8fHwxNzYxMTUyNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      apartments: "1-3 комн.",
      deadline: "1 кв. 2027",
      description: "Новый жилой комплекс на главном проспекте города",
      floors: "14-18 этажей",
      totalFlats: "320 квартир",
      parking: "Многоуровневая парковка",
      virtualTour: "https://my.matterport.com/show/?m=SxQL3iGyoDo",
      features: [
        "Расположение на главном проспекте",
        "Развитая инфраструктура",
        "Коммерческие помещения",
        "Благоустроенный двор",
        "Детские площадки",
        "Спортивные зоны",
        "Охраняемая территория",
        "Велопарковки",
      ],
      layouts: [
        {
          id: "1room-48",
          type: "1-комнатная",
          area: 48,
          rooms: 1,
          price: 19200000,
          floor: "3-16",
          available: 52,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Кухня-гостиная", "Спальня", "Санузел", "Балкон"],
        },
        {
          id: "2room-65",
          type: "2-комнатная",
          area: 65,
          rooms: 2,
          price: 26000000,
          floor: "4-18",
          available: 68,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Кухня-гостиная", "2 спальни", "Санузел", "Лоджия"],
        },
        {
          id: "2room-72",
          type: "2-комнатная",
          area: 72,
          rooms: 2,
          price: 28800000,
          floor: "5-18",
          available: 34,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Просторная кухня-гостиная", "2 спальни", "2 санузла", "Балкон + лоджия"],
        },
        {
          id: "3room-88",
          type: "3-комнатная",
          area: 88,
          rooms: 3,
          price: 35200000,
          floor: "6-18",
          available: 26,
          image: "https://images.unsplash.com/photo-1722859177977-f881f1809d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzYxMTIyMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
          features: ["Кухня-гостиная", "3 спальни", "2 санузла", "Гардеробная", "Балкон"],
        },
      ],
      gallery: [
        "https://images.unsplash.com/photo-1667584523543-d1d9cc828a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMTI0NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMTAzNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMDYyNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1569764102256-f7ff0673bd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBjaXR5JTIwYnVpbGRpbmdzJTIwZHJvbmV8ZW58MXx8fHwxNzYxMTUyNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1572871183765-f53b7adab0e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwa2F6YWtoc3RhbnxlbnwxfHx8fDE3NjExNTI0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1758193431355-54df41421657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjExMjcyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
    },
  };

  const project = projectData[projectId];

  useEffect(() => {
    if (!project) {
      onNavigate("residential");
    }
  }, [project, onNavigate]);

  if (!project) {
    return null;
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z' stroke='%23FDB913' stroke-opacity='1'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 lg:px-8 pb-16">
            <AnimatedSection>
              <Button
                variant="ghost"
                className="mb-8 text-white hover:text-accent hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
                onClick={() => onNavigate("residential")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Назад к проектам
              </Button>
            </AnimatedSection>
            
            <div className="max-w-4xl">
              <AnimatedSection animation="fade-up" delay={100}>
                <Badge className={`px-4 py-2 mb-6 text-base ${
                  project.status === "В продаже"
                    ? "bg-accent/90 text-accent-foreground border-accent"
                    : "bg-white/90 text-primary border-white/50"
                }`}>
                  {project.status}
                </Badge>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {project.name}
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={300}>
                <div className="flex items-center gap-3 text-white/90 text-lg mb-8">
                  <MapPin className="h-6 w-6 text-accent" />
                  <span>{project.location}</span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full px-8"
                  onClick={() => setShow3DTour(true)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Виртуальный 3D-тур
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="py-8 bg-white border-b border-border/30 sticky top-20 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Срок сдачи</p>
              <p className="text-lg font-semibold text-accent">{project.deadline}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Этажность</p>
              <p className="text-lg font-semibold text-primary">{project.floors}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Квартиры</p>
              <p className="text-lg font-semibold text-primary">{project.apartments}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Всего</p>
              <p className="text-lg font-semibold text-primary">{project.totalFlats}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Layouts & Calculator Section */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
              <span className="text-accent font-semibold text-sm tracking-wide">Планировки</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              Выберите свою квартиру
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Разнообразие планировок от 1 до 3 комнат с продуманными решениями
            </p>
          </AnimatedSection>

          {/* Layouts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {project.layouts.map((layout: any, index: number) => (
              <AnimatedSection
                key={layout.id}
                animation="fade-up"
                delay={index * 100}
              >
                <Card 
                  className={`group cursor-pointer overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full ${
                    selectedLayout === layout.id 
                      ? "border-accent shadow-xl scale-[1.02]" 
                      : "border-border hover:border-accent/50"
                  }`}
                  onClick={() => setSelectedLayout(layout.id === selectedLayout ? null : layout.id)}
                >
                  {/* Layout Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={layout.image}
                      alt={layout.type}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/95 text-primary backdrop-blur-sm border-0 shadow-lg">
                        {layout.type}
                      </Badge>
                    </div>

                    {/* Available Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent/95 text-accent-foreground backdrop-blur-sm border-0 shadow-lg">
                        Доступно: {layout.available}
                      </Badge>
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <ZoomIn className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 relative">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                    
                    <div className="relative">
                      {/* Main Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border/50">
                        <div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <Maximize2 className="h-4 w-4" />
                            <p className="text-xs">Площадь</p>
                          </div>
                          <p className="font-bold text-primary text-lg">{layout.area} м²</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <Home className="h-4 w-4" />
                            <p className="text-xs">Комнат</p>
                          </div>
                          <p className="font-bold text-primary text-lg">{layout.rooms}</p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <Building2 className="h-4 w-4" />
                            <p className="text-xs">Этажи</p>
                          </div>
                          <p className="font-bold text-primary text-lg">{layout.floor}</p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-6">
                        <p className="text-sm text-muted-foreground mb-1">Стоимость</p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-2xl font-bold text-accent">
                            {(layout.price / 1000000).toFixed(1)} млн ₸
                          </p>
                          <p className="text-sm text-muted-foreground">
                            ({Math.round(layout.price / layout.area).toLocaleString()} ₸/м²)
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-primary mb-3">Особенности:</p>
                        <div className="flex flex-wrap gap-2">
                          {layout.features.map((feature: string, idx: number) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-secondary/80 rounded-lg text-xs font-medium text-foreground hover:bg-secondary transition-all"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Accent Glow */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                        <div className="absolute bottom-0 left-0 h-full w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-accent/80 via-accent to-primary/80 blur-[1px]" />
                        <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-accent/40 via-accent/60 to-primary/40 blur-sm" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Mortgage Calculator Section */}
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <span className="text-primary font-semibold text-sm tracking-wide">Калькулятор</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
                  Рассчитайте ипотеку
                </h2>
                <p className="text-lg text-muted-foreground">
                  Узнайте ваш ежемесячный платёж прямо сейчас
                </p>
              </div>

              <Card className="border-2 border-border shadow-2xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <MortgageCalculator 
                    defaultPrice={selectedLayout ? project.layouts.find((l: any) => l.id === selectedLayout)?.price : project.layouts[0]?.price}
                  />
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* About */}
            <AnimatedSection animation="slide-right">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">О проекте</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0">
                      <Home className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Парковка</p>
                      <p className="text-sm text-muted-foreground">{project.parking}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-1">Срок сдачи</p>
                      <p className="text-sm text-muted-foreground">{project.deadline}</p>
                    </div>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full"
                >
                  Оставить заявку
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Button>
              </div>
            </AnimatedSection>

            {/* Features */}
            <AnimatedSection animation="slide-left">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Особенности комплекса</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-secondary/80 to-secondary/40 hover:from-secondary hover:to-secondary/60 transition-all hover:shadow-md hover:-translate-y-0.5 group"
                    >
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
              <span className="text-accent font-semibold text-sm tracking-wide">Галерея</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Фотографии проекта
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {project.gallery.map((image: string, index: number) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 50}
              >
                <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={image}
                    alt={`${project.name} - фото ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                      <ZoomIn className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        {/* Animated Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z' stroke='%23FDB913' stroke-opacity='1'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Заинтересовались проектом?
            </h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Оставьте заявку, и наш специалист свяжется с вами для консультации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full px-8"
              >
                Оставить заявку
                <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-full px-8"
                onClick={() => onOpenContactModal?.()}
              >
                Связаться с нами
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3D Tour Modal */}
      {show3DTour && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShow3DTour(false)}
        >
          <div 
            className="relative w-full max-w-7xl h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Виртуальный 3D-тур</h3>
                  <p className="text-sm text-white/80">{project.name}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/10 rounded-full"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Поделиться
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/10 rounded-full"
                    onClick={() => setShow3DTour(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* 3D Tour Player */}
            <div className="w-full h-full">
              <iframe
                src={project.virtualTour}
                className="w-full h-full"
                allow="xr-spatial-tracking"
                allowFullScreen
              />
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/80">
                  Используйте мышь для навигации • Кликните для перемещения
                </p>
                <Button
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Скачать план
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MortgageCalculator({ defaultPrice = 30000000 }: { defaultPrice?: number }) {
  const [price, setPrice] = useState(defaultPrice);
  const [downPayment, setDownPayment] = useState(20);
  const [term, setTerm] = useState(15);
  const [bank, setBank] = useState("otbasy");

  const bankRates: { [key: string]: { rate: number; name: string; logo?: string } } = {
    otbasy: { rate: 3.5, name: "Отбасы Банк" },
    freedom: { rate: 14.0, name: "Freedom Bank" },
    halyk: { rate: 16.5, name: "Halyk Bank" },
    kaspi: { rate: 18.0, name: "Kaspi Bank" },
  };

  const downPaymentAmount = (price * downPayment) / 100;
  const loanAmount = price - downPaymentAmount;

  const calculateMonthlyPayment = () => {
    const monthlyRate = bankRates[bank].rate / 100 / 12;
    const numberOfPayments = term * 12;

    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return monthlyPayment.toFixed(0);
  };

  const totalPayment = Number(calculateMonthlyPayment()) * term * 12;
  const overpayment = totalPayment - loanAmount;

  return (
    <div className="space-y-8">
      {/* Price Slider */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-accent" />
            Стоимость квартиры
          </Label>
          <span className="text-xl font-bold text-accent">
            {(price / 1000000).toFixed(1)} млн ₸
          </span>
        </div>
        <Slider
          value={[price]}
          onValueChange={(value) => setPrice(value[0])}
          min={10000000}
          max={80000000}
          step={1000000}
          className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent [&_[role=slider]]:shadow-lg [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_.bg-primary]:bg-gradient-to-r [&_.bg-primary]:from-primary [&_.bg-primary]:to-accent"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>10 млн ₸</span>
          <span>80 млн ₸</span>
        </div>
      </div>

      {/* Down Payment Slider */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold">Первоначальный взнос</Label>
          <div className="text-right">
            <span className="text-xl font-bold text-primary">{downPayment}%</span>
            <p className="text-sm text-muted-foreground">
              {(downPaymentAmount / 1000000).toFixed(1)} млн ₸
            </p>
          </div>
        </div>
        <Slider
          value={[downPayment]}
          onValueChange={(value) => setDownPayment(value[0])}
          min={10}
          max={50}
          step={5}
          className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent [&_[role=slider]]:shadow-lg [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_.bg-primary]:bg-gradient-to-r [&_.bg-primary]:from-primary [&_.bg-primary]:to-accent"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>10%</span>
          <span>50%</span>
        </div>
      </div>

      {/* Term Slider */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold">Срок кредита</Label>
          <span className="text-xl font-bold text-primary">{term} лет</span>
        </div>
        <Slider
          value={[term]}
          onValueChange={(value) => setTerm(value[0])}
          min={5}
          max={25}
          step={5}
          className="[&_[role=slider]]:bg-accent [&_[role=slider]]:border-accent [&_[role=slider]]:shadow-lg [&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_.bg-primary]:bg-gradient-to-r [&_.bg-primary]:from-primary [&_.bg-primary]:to-accent"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>5 лет</span>
          <span>25 лет</span>
        </div>
      </div>

      {/* Bank Selection */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">Выберите банк</Label>
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(bankRates).map(([key, { rate, name }]) => (
            <button
              key={key}
              onClick={() => setBank(key)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left group ${
                bank === key
                  ? "border-accent bg-accent/10 shadow-lg scale-105"
                  : "border-border hover:border-accent/50 hover:bg-secondary/50 hover:scale-102"
              }`}
            >
              <p className="font-semibold text-sm text-primary mb-1">{name}</p>
              <p className="text-xs text-muted-foreground">
                Ставка: <span className={bank === key ? "text-accent font-semibold" : ""}>{rate}%</span>
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Results Card */}
      <Card className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-2 border-accent/30 shadow-2xl overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        
        <CardContent className="p-8 relative">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground mb-3 flex items-center justify-center gap-2">
              <Users className="h-4 w-4" />
              Ежемесячный платёж
            </p>
            <p className="text-5xl md:text-6xl font-bold text-accent mb-2">
              {Number(calculateMonthlyPayment()).toLocaleString()} ₸
            </p>
            <p className="text-sm text-muted-foreground">
              по ставке {bankRates[bank].rate}% годовых в {bankRates[bank].name}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-accent/20">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-2">Сумма кредита</p>
              <p className="font-bold text-primary text-lg">
                {(loanAmount / 1000000).toFixed(1)} млн ₸
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-2">Переплата</p>
              <p className="font-bold text-destructive text-lg">
                {(overpayment / 1000000).toFixed(1)} млн ₸
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-2">Всего к выплате</p>
              <p className="font-bold text-primary text-lg">
                {(totalPayment / 1000000).toFixed(1)} млн ₸
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl h-14 rounded-full group transition-all text-lg">
        Оставить заявку на ипотеку
        <ArrowLeft className="ml-2 h-6 w-6 rotate-180 group-hover:translate-x-1 transition-transform" />
      </Button>

      <p className="text-xs text-center text-muted-foreground leading-relaxed">
        Расчёт является ориентировочным и не является публичной офертой. <br />
        Итоговые условия уточняйте в банке.
      </p>
    </div>
  );
}
