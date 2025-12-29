import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import type { Event } from "../../data/eventsData";
import {
  formatEventDate,
  getEventTypeColor,
  getEventTypeLabel,
  pastEvents,
  upcomingEvents,
} from "../../data/eventsData";

interface EventCardProps {
  event: Event;
  isUpcoming?: boolean;
}

function EventCard({ event, isUpcoming = false }: EventCardProps) {
  function handleEventClick(): void {
    if (event.link) {
      window.open(event.link, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        opacity: isUpcoming ? 1 : 0.9,
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Chip label={getEventTypeLabel(event.type)} color={getEventTypeColor(event.type)} size={"small"} />
          {isUpcoming && <Chip label={"Upcoming"} color={"success"} size={"small"} variant={"outlined"} />}
        </Box>
        <Typography variant={"h5"} component={"h3"} sx={{ mb: 1.5, fontWeight: 600 }}>
          {event.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2,
            color: "text.secondary",
          }}
        >
          <CalendarTodayIcon sx={{ fontSize: 18 }} aria-hidden={"true"} />
          <Typography variant={"body2"}>{formatEventDate(event.date)}</Typography>
        </Box>
        <Typography variant={"body2"} sx={{ color: "text.secondary" }}>
          {event.description}
        </Typography>
      </CardContent>
      {event.link && (
        <CardActions sx={{ px: 2, pb: 2 }}>
          <Button size={"small"} onClick={handleEventClick} endIcon={<ArrowForwardIcon />} type={"button"}>
            Learn More
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

function Events() {
  return (
    <Box
      component={"section"}
      id={"events"}
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth={"lg"}>
        {/* Upcoming Events */}
        <Box sx={{ mb: 10 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant={"h2"} component={"h2"} sx={{ mb: 2, fontWeight: 700 }}>
              Upcoming Events
            </Typography>
            <Typography variant={"h6"} component={"p"} sx={{ color: "text.secondary", fontWeight: 400 }}>
              Join our upcoming workshops and sessions to level up your skills.
            </Typography>
          </Box>

          <Grid container={true} spacing={4}>
            {upcomingEvents.map((event) => (
              <Grid key={event.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <EventCard event={event} isUpcoming={true} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Past Events */}
        <Box>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant={"h3"} component={"h2"} sx={{ mb: 2, fontWeight: 700 }}>
              Past Events
            </Typography>
            <Typography variant={"body1"} component={"p"} sx={{ color: "text.secondary" }}>
              A look back at our previous workshops and activities.
            </Typography>
          </Box>

          <Grid container={true} spacing={3}>
            {pastEvents.map((event) => (
              <Grid key={event.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <EventCard event={event} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Events;
