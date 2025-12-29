import CodeIcon from "@mui/icons-material/Code";
import GroupsIcon from "@mui/icons-material/Groups";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SchoolIcon from "@mui/icons-material/School";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { gdgColors } from "../../theme";

const missionPoints = [
  {
    icon: CodeIcon,
    title: "Hands-On Learning",
    description:
      "Gain practical experience with Google technologies through interactive workshops and coding sessions.",
    color: gdgColors.blue,
  },
  {
    icon: GroupsIcon,
    title: "Community Building",
    description: "Connect with like-minded students passionate about technology and innovation.",
    color: gdgColors.red,
  },
  {
    icon: SchoolIcon,
    title: "Bridge Theory & Practice",
    description: "Apply classroom knowledge to real-world projects and industry-relevant challenges.",
    color: gdgColors.yellow,
  },
  {
    icon: RocketLaunchIcon,
    title: "Career Development",
    description: "Build your portfolio and network with industry professionals to kickstart your tech career.",
    color: gdgColors.green,
  },
] as const;

function Mission() {
  return (
    <Box
      component={"section"}
      id={"mission"}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth={"lg"}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant={"h2"} component={"h2"} sx={{ mb: 3, fontWeight: 700 }}>
            Our Mission
          </Typography>
          <Typography
            variant={"h6"}
            component={"p"}
            sx={{
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
              fontWeight: 400,
            }}
          >
            At GDG on Campus - NYP, we empower students to explore, learn, and grow by providing access to Google
            technologies, expert mentorship, and a supportive community of peers.
          </Typography>
        </Box>

        <Grid container={true} spacing={4}>
          {missionPoints.map((point) => (
            <Grid key={point.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  textAlign: "center",
                  backgroundColor: "background.default",
                  border: 1,
                  borderColor: "divider",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: point.color,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 2,
                    backgroundColor: `${point.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  <point.icon sx={{ fontSize: 32, color: point.color }} aria-hidden={"true"} />
                </Box>
                <Typography variant={"h5"} component={"h3"} sx={{ mb: 2, fontWeight: 600 }}>
                  {point.title}
                </Typography>
                <Typography variant={"body1"} sx={{ color: "text.secondary" }}>
                  {point.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Mission;
