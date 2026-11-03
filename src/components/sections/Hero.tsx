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
        position: "relative",
        overflow: "hidden",
        pt: { xs: 2, sm: 3, md: 4 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth={"lg"}>
        {/* Official GDG Landing Page Header Banner */}
        <Box
          sx={{
            width: "100%",
            borderRadius: { xs: 3, md: 4 },
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(66, 133, 244, 0.12)",
            border: 1,
            borderColor: "divider",
            mb: { xs: 5, md: 7 },
            backgroundColor: "#B8EEF8",
          }}
        >
          <Box
            component={"picture"}
            sx={{
              display: "block",
              width: "100%",
              height: "auto",
              lineHeight: 0,
            }}
          >
            <source
              media={"(max-width: 640px)"}
              srcSet={"/assets/brand/gdg-header-640.png"}
              width={640}
              height={500}
            />
            <source
              media={"(max-width: 1440px)"}
              srcSet={"/assets/brand/gdg-header-1440.png"}
              width={1440}
              height={499}
            />
            <Box
              component={"img"}
              src={"/assets/brand/gdg-header-2650.png"}
              alt={"Google Developer Groups on Campus Nanyang Polytechnic Landing Header"}
              width={2500}
              height={471}
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Box>
        </Box>

        {/* Hero Copy & CTA Content */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 820,
            mx: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Official GDG Emblem & Chapter Tag */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              mb: 3,
              px: 2.5,
              py: 1,
              borderRadius: 10,
              backgroundColor: "background.paper",
              border: 1,
              borderColor: "divider",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <Box
              component={"img"}
              src={"/gdg-emblem.svg"}
              alt={"Google Developer Groups Emblem"}
              sx={{
                width: 34,
                height: 19,
                display: "block",
                objectFit: "contain",
              }}
            />
            <Typography
              component={"span"}
              sx={{
                fontFamily: '"Google Sans Mono", "Roboto Mono", monospace',
                fontSize: { xs: "0.8rem", sm: "0.875rem" },
                fontWeight: 500,
                color: "text.primary",
                letterSpacing: "0.02em",
              }}
            >
              #GDGOnCampus • Nanyang Polytechnic
            </Typography>
          </Box>

          <Typography
            variant={"h1"}
            component={"h1"}
            sx={{
              mb: 3,
              fontWeight: 700,
              fontSize: { xs: "2.25rem", sm: "3rem", md: "3.5rem" },
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
              fontSize: { xs: "1.05rem", sm: "1.25rem" },
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
