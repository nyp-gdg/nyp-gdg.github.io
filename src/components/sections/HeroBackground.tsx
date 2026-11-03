import Box from "@mui/material/Box";
import { keyframes } from "@mui/material/styles";
import { gdgColors } from "../../theme";

// Smooth organic floating & pulsing animations for color blobs
const floatSlow = keyframes`
  0% {
    transform: translate(0px, 0px) scale(1) rotate(0deg);
  }
  33% {
    transform: translate(30px, -40px) scale(1.1) rotate(10deg);
  }
  66% {
    transform: translate(-25px, 25px) scale(0.95) rotate(-8deg);
  }
  100% {
    transform: translate(0px, 0px) scale(1) rotate(0deg);
  }
`;

const floatMedium = keyframes`
  0% {
    transform: translate(0px, 0px) scale(1) rotate(0deg);
  }
  33% {
    transform: translate(-35px, 30px) scale(1.08) rotate(-12deg);
  }
  66% {
    transform: translate(25px, -35px) scale(0.92) rotate(10deg);
  }
  100% {
    transform: translate(0px, 0px) scale(1) rotate(0deg);
  }
`;

const floatFast = keyframes`
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  50% {
    transform: translate(20px, 35px) scale(1.12);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
`;

const gridShift = keyframes`
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: 48px 48px;
  }
`;

export default function HeroBackground() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Subtle modern dot-grid matrix with gentle drift */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: (theme) =>
            theme.palette.mode === "dark"
              ? "radial-gradient(rgba(255, 255, 255, 0.08) 1.2px, transparent 1.2px)"
              : "radial-gradient(rgba(66, 133, 244, 0.12) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 35%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 35%, black 40%, transparent 85%)",
          animation: `${gridShift} 25s linear infinite`,
        }}
      />

      {/* GDG Blue ambient orb */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "10%",
          width: { xs: 300, sm: 460, md: 540 },
          height: { xs: 300, sm: 460, md: 540 },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${gdgColors.blue} 0%, rgba(66, 133, 244, 0) 70%)`,
          opacity: (theme) => (theme.palette.mode === "dark" ? 0.28 : 0.22),
          filter: "blur(60px)",
          animation: `${floatSlow} 18s ease-in-out infinite`,
        }}
      />

      {/* GDG Green ambient orb */}
      <Box
        sx={{
          position: "absolute",
          top: "18%",
          right: "8%",
          width: { xs: 260, sm: 400, md: 480 },
          height: { xs: 260, sm: 400, md: 480 },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${gdgColors.green} 0%, rgba(52, 168, 83, 0) 70%)`,
          opacity: (theme) => (theme.palette.mode === "dark" ? 0.24 : 0.18),
          filter: "blur(55px)",
          animation: `${floatMedium} 16s ease-in-out infinite reverse`,
        }}
      />

      {/* GDG Yellow ambient orb */}
      <Box
        sx={{
          position: "absolute",
          bottom: "12%",
          left: "22%",
          width: { xs: 220, sm: 340, md: 420 },
          height: { xs: 220, sm: 340, md: 420 },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${gdgColors.yellow} 0%, rgba(249, 171, 0, 0) 70%)`,
          opacity: (theme) => (theme.palette.mode === "dark" ? 0.22 : 0.16),
          filter: "blur(50px)",
          animation: `${floatFast} 14s ease-in-out infinite`,
        }}
      />

      {/* GDG Red ambient orb */}
      <Box
        sx={{
          position: "absolute",
          bottom: "18%",
          right: "20%",
          width: { xs: 240, sm: 360, md: 440 },
          height: { xs: 240, sm: 360, md: 440 },
          borderRadius: "50%",
          background: `radial-gradient(circle, ${gdgColors.red} 0%, rgba(234, 67, 53, 0) 70%)`,
          opacity: (theme) => (theme.palette.mode === "dark" ? 0.2 : 0.14),
          filter: "blur(55px)",
          animation: `${floatSlow} 20s ease-in-out infinite reverse`,
        }}
      />
    </Box>
  );
}
