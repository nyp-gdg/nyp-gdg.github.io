export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "workshop" | "speaker" | "hackathon" | "networking";
  level?: "Beginner" | "Intermediate" | "Advanced";
  image?: string;
  link?: string;
}

export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Sign In with Google with Python Flask",
    description: "Learn how to build robust authentication systems, including SSO and OAuth2, by developing a functional Flask application from the ground up in this hands-on workshop.",
    date: "2026-11-14",
    type: "workshop",
    level: "Beginner"
  },
  {
    id: "2",
    title: "Hand Gesture Control Chrome Extension Workshop",
    description: "Build an interactive Chrome extension that leverages computer vision to navigate and control browser actions with hand gestures.",
    date: "2027-01-16",
    type: "workshop",
    level: "Beginner"
  },
  {
    id: "3",
    title: "TensorFlow Workshop",
    description: "Deep dive into machine learning fundamentals and the practical use of TensorFlow for training AI models in a quick 4-hour workshop.",
    date: "2027-04-05",
    type: "workshop",
    level: "Intermediate"
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

export function getEventLevelColor(
  level: NonNullable<Event["level"]>
): "success" | "warning" | "error" | "info" {
  const colors = {
    Beginner: "success",
    Intermediate: "warning",
    Advanced: "error",
  } as const;
  return colors[level];
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
