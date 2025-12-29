import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { gdgColors } from "../../theme";

// Discord icon as a simple SVG component
function DiscordIcon() {
  return (
    <svg width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"}>
      <title>Discord</title>
      <path
        d={
          "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
        }
      />
    </svg>
  );
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/dsc-nyp/",
    icon: LinkedInIcon,
  },
  {
    name: "Discord",
    href: "https://discord.gg/cmc5zychJT",
    icon: DiscordIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nyp_dsc",
    icon: InstagramIcon,
  },
] as const;

const footerLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
] as const;

function Footer() {
  function handleNavClick(href: string): void {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleNavKeyDown(event: React.KeyboardEvent, href: string): void {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleNavClick(href);
    }
  }

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component={"footer"}
      sx={{
        py: 6,
        backgroundColor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid container={true} spacing={4}>
          {/* Logo & Description */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Box sx={{ display: "flex", gap: 0.5 }} aria-hidden={"true"}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: gdgColors.blue,
                  }}
                />
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: gdgColors.red,
                  }}
                />
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: gdgColors.yellow,
                  }}
                />
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: gdgColors.green,
                  }}
                />
              </Box>
              <Typography variant={"h6"} sx={{ fontWeight: 700 }}>
                GDG on Campus NYP
              </Typography>
            </Box>
            <Typography variant={"body2"} sx={{ color: "text.secondary", mb: 2 }}>
              Empowering Nanyang Polytechnic students through technology, community, and innovation.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  href={social.href}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  aria-label={`Visit our ${social.name} page`}
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: gdgColors.blue,
                    },
                  }}
                >
                  <social.icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant={"subtitle1"} sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box component={"nav"} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  component={"button"}
                  type={"button"}
                  onClick={() => handleNavClick(link.href)}
                  onKeyDown={(e) => handleNavKeyDown(e, link.href)}
                  underline={"hover"}
                  sx={{
                    color: "text.secondary",
                    textAlign: "left",
                    cursor: "pointer",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={"https://gdg.community.dev/gdg-on-campus-nanyang-polytechnic-singapore-singapore/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
                underline={"hover"}
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                GDG Community Page
              </Link>
            </Box>
          </Grid>

          {/* Nanyang Polytechnic */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant={"subtitle1"} sx={{ fontWeight: 600, mb: 2 }}>
              Nanyang Polytechnic
            </Typography>
            <Typography variant={"body2"} sx={{ color: "text.secondary", mb: 1 }}>
              180 Ang Mo Kio Avenue 8
            </Typography>
            <Typography variant={"body2"} sx={{ color: "text.secondary", mb: 2 }}>
              Singapore 569830
            </Typography>
            <Link
              href={"https://www.nyp.edu.sg"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              underline={"hover"}
              sx={{ color: "primary.main" }}
            >
              www.nyp.edu.sg
            </Link>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: 1,
            borderColor: "divider",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant={"body2"} sx={{ color: "text.secondary" }}>
            © {currentYear} GDG on Campus - Nanyang Polytechnic. All rights reserved.
          </Typography>
          <Typography variant={"body2"} sx={{ color: "text.secondary" }}>
            Powered by{" "}
            <Link
              href={"https://developers.google.com/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              underline={"hover"}
              sx={{ color: gdgColors.blue }}
            >
              Google Developers
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
