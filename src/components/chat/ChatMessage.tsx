import PersonIcon from "@mui/icons-material/Person";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Message } from "../../services/gemini";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === "bot";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isBot ? "row" : "row-reverse",
        gap: 1,
        mb: 2,
        alignItems: "flex-start",
      }}
    >
      <Avatar
        sx={{
          width: 32,
          height: 32,
          bgcolor: isBot ? "primary.main" : "secondary.main",
        }}
      >
        {isBot ? <SmartToyIcon sx={{ fontSize: 20 }} /> : <PersonIcon sx={{ fontSize: 20 }} />}
      </Avatar>

      <Box
        sx={{
          maxWidth: "75%",
          bgcolor: isBot ? "grey.800" : "primary.main",
          color: isBot ? "text.primary" : "primary.contrastText",
          borderRadius: 2,
          px: 2,
          py: 1.5,
          boxShadow: 1,
          "& p": {
            margin: 0,
            marginBottom: "0.5em",
            "&:last-of-type": {
              marginBottom: 0,
            },
          },
          "& ul, & ol": {
            margin: "0.5em 0",
            paddingLeft: "1.5em",
          },
          "& li": {
            marginBottom: "0.25em",
          },
          "& code": {
            bgcolor: isBot ? "grey.700" : "rgba(255, 255, 255, 0.2)",
            padding: "0.125em 0.25em",
            borderRadius: 0.5,
            fontSize: "0.875em",
            fontFamily: "monospace",
          },
          "& pre": {
            bgcolor: isBot ? "grey.700" : "rgba(255, 255, 255, 0.2)",
            padding: 1,
            borderRadius: 1,
            overflowX: "auto",
            margin: "0.5em 0",
            "& code": {
              bgcolor: "transparent",
              padding: 0,
            },
          },
          "& strong": {
            fontWeight: 600,
          },
          "& a": {
            color: isBot ? "primary.main" : "inherit",
            textDecoration: "underline",
          },
          "& blockquote": {
            borderLeft: 3,
            borderColor: isBot ? "grey.600" : "rgba(255, 255, 255, 0.5)",
            paddingLeft: 1,
            margin: "0.5em 0",
            fontStyle: "italic",
          },
        }}
      >
        <Box sx={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
          {isBot ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.text}</ReactMarkdown>
          ) : (
            <Typography variant="body2" component="div" sx={{ whiteSpace: "pre-wrap" }}>
              {message.text}
            </Typography>
          )}
        </Box>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            mt: 0.5,
            opacity: 0.7,
            fontSize: "0.7rem",
          }}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Typography>
      </Box>
    </Box>
  );
}
