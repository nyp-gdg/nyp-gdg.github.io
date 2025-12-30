import Box from "@mui/material/Box";
import { ThemeProvider } from "../theme";
import ChatBot from "./chat/ChatBot";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import About from "./sections/About";
import Events from "./sections/Events";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";

export default function Landing() {
  return (
    <ThemeProvider>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Box component={"main"} sx={{ flexGrow: 1 }}>
          <Hero />
          <Mission />
          <Events />
          <About />
        </Box>
        <Footer />
        <ChatBot />
      </Box>
    </ThemeProvider>
  );
}
