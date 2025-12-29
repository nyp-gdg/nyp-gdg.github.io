import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { gdgColors } from "../../theme";

const benefits = [
  "Access to exclusive Google technology workshops",
  "Networking opportunities with industry professionals",
  "Hands-on experience with cutting-edge tools",
  "Portfolio-building projects and hackathons",
  "Peer-to-peer learning and mentorship",
  "Connection to the global GDG community",
  "Career development and job opportunities",
  "Free resources and learning materials",
] as const;

const stats = [
  {
    icon: PeopleIcon,
    value: "304+",
    label: "Active Members",
    color: gdgColors.blue,
  },
  {
    icon: EmojiEventsIcon,
    value: "20+",
    label: "Events Hosted",
    color: gdgColors.red,
  },
  {
    icon: WorkIcon,
    value: "50+",
    label: "Projects Completed",
    color: gdgColors.green,
  },
] as const;

function About() {
  function handleJoinClick(): void {
    window.open(
      "https://gdg.community.dev/gdg-on-campus-nanyang-polytechnic-singapore-singapore/",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <Box
      component={"section"}
      id={"about"}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid container={true} spacing={6} alignItems={"center"}>
          {/* Left Column - Text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant={"h2"} component={"h2"} sx={{ mb: 3, fontWeight: 700 }}>
              Why Join GDG on Campus NYP?
            </Typography>
            <Typography variant={"body1"} sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
              GDG on Campus - Nanyang Polytechnic is more than just a tech club. We&apos;re a community of passionate
              students who believe in learning by doing. Whether you&apos;re a beginner or an experienced developer,
              there&apos;s a place for you here.
            </Typography>

            <List sx={{ mb: 4 }}>
              {benefits.slice(0, 5).map((benefit) => (
                <ListItem key={benefit} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleIcon sx={{ color: gdgColors.green }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={benefit}
                    primaryTypographyProps={{
                      variant: "body1",
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Button
              variant={"contained"}
              size={"large"}
              onClick={handleJoinClick}
              type={"button"}
              sx={{
                px: 4,
                background: `linear-gradient(135deg, ${gdgColors.blue}, ${gdgColors.green})`,
                "&:hover": {
                  background: `linear-gradient(135deg, ${gdgColors.blue}dd, ${gdgColors.green}dd)`,
                },
              }}
            >
              Join Us Today
            </Button>
          </Grid>

          {/* Right Column - Stats & Benefits */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: "background.default",
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
              }}
            >
              <Typography variant={"h5"} component={"h3"} sx={{ mb: 4, fontWeight: 600, textAlign: "center" }}>
                Our Impact
              </Typography>

              <Grid container={true} spacing={3}>
                {stats.map((stat) => (
                  <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
                    <Box sx={{ textAlign: "center" }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 2,
                          backgroundColor: `${stat.color}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        <stat.icon sx={{ fontSize: 28, color: stat.color }} aria-hidden={"true"} />
                      </Box>
                      <Typography variant={"h4"} component={"span"} sx={{ fontWeight: 700, color: stat.color }}>
                        {stat.value}
                      </Typography>
                      <Typography variant={"body2"} sx={{ color: "text.secondary", mt: 0.5 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box
                sx={{
                  mt: 4,
                  pt: 4,
                  borderTop: 1,
                  borderColor: "divider",
                }}
              >
                <Typography
                  variant={"body2"}
                  sx={{
                    color: "text.secondary",
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  &quot;GDG on Campus Nanyang Polytechnic is an independent group; activities and opinions should in no
                  way be linked to Google, the corporation.&quot;
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
