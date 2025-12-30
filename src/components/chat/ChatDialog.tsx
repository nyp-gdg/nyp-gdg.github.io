import CloseIcon from "@mui/icons-material/Close";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useEffect, useRef } from "react";
import type { Message } from "../../services/gemini";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

interface ChatDialogProps {
  open: boolean;
  onClose: () => void;
  messages: Message[];
  onSendMessage: (message: string) => void;
  loading: boolean;
  apiKeyAvailable: boolean;
}

export default function ChatDialog({
  open,
  onClose,
  messages,
  onSendMessage,
  loading,
  apiKeyAvailable,
}: ChatDialogProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  function scrollToBottom(): void {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          height: { xs: "90vh", sm: "600px" },
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: 1,
          borderColor: "divider",
          py: 1.5,
        }}
      >
        <Typography variant="h6" component="div">
          GDG NYP Assistant
        </Typography>
        <IconButton edge="end" onClick={onClose} aria-label="Close chat" size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          p: 0,
          overflow: "hidden",
        }}
      >
        {!apiKeyAvailable ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              p: 3,
              textAlign: "center",
            }}
          >
            <WarningAmberIcon sx={{ fontSize: 64, color: "warning.main", mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Chatbot Unavailable
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Gemini API key is not configured. Please contact the site administrator to enable the chatbot feature.
            </Typography>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                p: 2,
                bgcolor: "background.default",
              }}
            >
              {messages.length === 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Hi! Ask me anything about GDG at Nanyang Polytechnic.
                  </Typography>
                </Box>
              ) : (
                <>
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                  <div ref={messagesEndRef} />
                </>
              )}
            </Box>

            <ChatInput onSend={onSendMessage} loading={loading} disabled={!apiKeyAvailable} />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
