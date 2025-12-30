export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const SYSTEM_PROMPT = `You are a helpful chatbot assistant for the Google Developer Group (GDG) at Nanyang Polytechnic in Singapore. Your purpose is to answer questions about:

- GDG NYP: A student-led community for developers interested in Google technologies
- Activities and Events: Technical workshops, hackathons, study jams, talks, and networking events
- Technologies: Google Cloud Platform, Firebase, Flutter, Android, Machine Learning, Web Development
- Membership: Open to all NYP students interested in technology and development
- Benefits: Learn new skills, network with peers, work on projects, attend Google events
- Meeting Information: Regular meetups and events (encourage users to check social media for latest updates)

Keep responses friendly, concise, and encouraging. If you don't know specific details, direct users to check GDG NYP's social media or contact the organizing team. Always maintain an enthusiastic and supportive tone that promotes learning and community engagement.`;

export async function sendMessageToGemini(message: string): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("API key not configured");
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${SYSTEM_PROMPT}\n\nUser question: ${message}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to get response from Gemini");
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";

    return text;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
}

export function checkApiKeyAvailable(): boolean {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  return !!apiKey && apiKey !== "your_api_key_here";
}
