import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { gdgColors } from "../../theme";

function Hero() {
  function handleJoinClick(): void {
    window.open(
      "https://gdg.community.dev/gdg-on-campus-nanyang-polytechnic-singapore-singapore/",
      "_blank",
      "noopener,noreferrer"
    );
  }

  function handleLearnMoreClick(): void {
    const missionSection = document.querySelector("#mission");
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <Box
      component={"section"}
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${gdgColors.blue}20, ${gdgColors.green}20)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
        aria-hidden={"true"}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -50,
          left: -50,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${gdgColors.red}20, ${gdgColors.yellow}20)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
        aria-hidden={"true"}
      />

      <Container maxWidth={"lg"} sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 800,
            mx: "auto",
          }}
        >
          {/* Color dots */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1.5,
              mb: 4,
            }}
            aria-hidden={"true"}
          >
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: gdgColors.blue,
              }}
            />
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: gdgColors.red,
              }}
            />
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: gdgColors.yellow,
              }}
            />
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: gdgColors.green,
              }}
            />
          </Box>

          <Typography
            variant={"h1"}
            component={"h1"}
            sx={{
              mb: 3,
              fontWeight: 700,
              background: `linear-gradient(135deg, ${gdgColors.blue}, ${gdgColors.green})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Empowering NYP&apos;s Tech Community
          </Typography>

          <Typography
            variant={"h5"}
            component={"p"}
            sx={{
              mb: 5,
              color: "text.secondary",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            GDG on Campus - Nanyang Polytechnic is a student-led community dedicated to bridging the gap between
            classroom theory and real-world technology through hands-on experience with Google technologies.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
            }}
          >
            <Button
              variant={"contained"}
              size={"large"}
              onClick={handleJoinClick}
              type={"button"}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                background: `linear-gradient(135deg, ${gdgColors.blue}, ${gdgColors.green})`,
                "&:hover": {
                  background: `linear-gradient(135deg, ${gdgColors.blue}dd, ${gdgColors.green}dd)`,
                },
              }}
            >
              Join Our Community
            </Button>
            <Button
              variant={"outlined"}
              size={"large"}
              onClick={handleLearnMoreClick}
              type={"button"}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                borderColor: gdgColors.blue,
                color: gdgColors.blue,
                "&:hover": {
                  borderColor: gdgColors.blue,
                  backgroundColor: `${gdgColors.blue}10`,
                },
              }}
            >
              Learn More
            </Button>
          </Box>

          {/* Stats */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: { xs: 3, sm: 6 },
              mt: 8,
              pt: 6,
              borderTop: 1,
              borderColor: "divider",
            }}
          >
            <Box>
              <Typography variant={"h3"} component={"span"} sx={{ color: gdgColors.blue, fontWeight: 700 }}>
                304+
              </Typography>
              <Typography variant={"body1"} sx={{ color: "text.secondary", mt: 0.5 }}>
                Community Members
              </Typography>
            </Box>
            <Box>
              <Typography variant={"h3"} component={"span"} sx={{ color: gdgColors.red, fontWeight: 700 }}>
                20+
              </Typography>
              <Typography variant={"body1"} sx={{ color: "text.secondary", mt: 0.5 }}>
                Events Hosted
              </Typography>
            </Box>
            <Box>
              <Typography variant={"h3"} component={"span"} sx={{ color: gdgColors.green, fontWeight: 700 }}>
                5+
              </Typography>
              <Typography variant={"body1"} sx={{ color: "text.secondary", mt: 0.5 }}>
                Years Active
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
