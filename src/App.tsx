import Box from "@mui/material/Box";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Events from "./components/sections/Events";
import Hero from "./components/sections/Hero";
import Mission from "./components/sections/Mission";
import { ColorModeProvider } from "./theme";

function App() {
  return (
    <ColorModeProvider>
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
      </Box>
    </ColorModeProvider>
  );
}

export default App;
