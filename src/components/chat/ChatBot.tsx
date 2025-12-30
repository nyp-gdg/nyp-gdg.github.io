import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Fab from "@mui/material/Fab";
import { useState } from "react";
import { checkApiKeyAvailable, sendMessageToGemini, type Message } from "../../services/gemini";
import ChatDialog from "./ChatDialog";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const apiKeyAvailable = checkApiKeyAvailable();

  async function handleSendMessage(text: string): Promise<void> {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await sendMessageToGemini(text);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: `bot-${Date.now()}`,
        text:
          error instanceof Error
            ? `Sorry, I encountered an error: ${error.message}`
            : "Sorry, I encountered an unexpected error. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  }

  function handleOpen(): void {
    setOpen(true);
  }

  function handleClose(): void {
    setOpen(false);
  }

  return (
    <>
      <Fab
        color="primary"
        aria-label="Open chatbot"
        onClick={handleOpen}
        sx={{
          position: "fixed",
          bottom: { xs: 16, md: 24 },
          right: { xs: 16, md: 24 },
          zIndex: 1000,
        }}
      >
        <ChatBubbleOutlineIcon />
      </Fab>

      <ChatDialog
        open={open}
        onClose={handleClose}
        messages={messages}
        onSendMessage={handleSendMessage}
        loading={loading}
        apiKeyAvailable={apiKeyAvailable}
      />
    </>
  );
}
