export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "workshop" | "speaker" | "hackathon" | "networking";
  image?: string;
  link?: string;
}

export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Introduction to Cloud Computing with GCP",
    description: "Learn the fundamentals of Google Cloud Platform and deploy your first application to the cloud.",
    date: "2026-01-15",
    type: "workshop",
    link: "https://gdg.community.dev/gdg-on-campus-nanyang-polytechnic-singapore-singapore/",
  },
  {
    id: "2",
    title: "Build Your First AI App with Gemini",
    description: "Hands-on workshop exploring Google's Gemini API to build intelligent applications.",
    date: "2026-01-25",
    type: "workshop",
    link: "https://gdg.community.dev/gdg-on-campus-nanyang-polytechnic-singapore-singapore/",
  },
  {
    id: "3",
    title: "Tech Career Panel: Industry Insights",
    description: "Join industry professionals as they share their journey and advice for aspiring developers.",
    date: "2026-02-08",
    type: "speaker",
    link: "https://gdg.community.dev/gdg-on-campus-nanyang-polytechnic-singapore-singapore/",
  },
];

export const pastEvents: Event[] = [
  {
    id: "4",
    title: "Unlock the Power of Firebase AI",
    description: "Workshop exploring Firebase's AI capabilities and how to integrate them into your applications.",
    date: "2025-12-10",
    type: "workshop",
  },
  {
    id: "5",
    title: "Google Maps API Workshop",
    description: "Learn how to integrate Google Maps into your web and mobile applications with hands-on exercises.",
    date: "2025-06-16",
    type: "workshop",
  },
  {
    id: "6",
    title: "Build With AI NYP Bootcamp",
    description: "Intensive bootcamp covering AI/ML fundamentals and practical implementation with Google tools.",
    date: "2025-05-09",
    type: "workshop",
  },
  {
    id: "7",
    title: "SCS Career Mentoring",
    description:
      "Career mentoring session in collaboration with Singapore Computer Society for aspiring tech professionals.",
    date: "2024-11-03",
    type: "speaker",
  },
  {
    id: "8",
    title: "Flutter Forward Extended NYP",
    description: "Extended viewing and discussion of Flutter Forward announcements with live coding demos.",
    date: "2024-03-15",
    type: "workshop",
  },
  {
    id: "9",
    title: "DevFest NYP 2023",
    description: "Annual developer festival featuring talks, workshops, and networking with the tech community.",
    date: "2023-11-18",
    type: "hackathon",
  },
];

export function getEventTypeLabel(type: Event["type"]): string {
  const labels = {
    workshop: "Workshop",
    speaker: "Speaker Session",
    hackathon: "Hackathon",
    networking: "Networking",
  } as const;
  return labels[type];
}

export function getEventTypeColor(type: Event["type"]): "primary" | "secondary" | "error" | "warning" {
  const colors = {
    workshop: "primary",
    speaker: "secondary",
    hackathon: "error",
    networking: "warning",
  } as const;
  return colors[type];
}

export function formatEventDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-SG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
