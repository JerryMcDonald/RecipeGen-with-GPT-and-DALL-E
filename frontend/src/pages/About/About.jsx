import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Avatar,
  CardContent,
} from "@mui/material";
import AIawwBG from "../../static/images/AIawwBG.png";
import AIawwLogo from "../../static/images/AIawwLogo.png";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh", // Ensures it fills at least the viewport
        backgroundImage: `url(${AIawwBG})`,
        backgroundSize: "cover",
        opacity: 1,
        overflowY: "auto", // Enables scrolling
        paddingTop: "90px",
      }}
    >
      <CardContent
        sx={{
          backgroundColor: "var(--secondary-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 200,
          minWidth: 800,
          maxWidth: 800,
        }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            "& .markdown": {
              py: 3,
            },
          }}
        >
          <Typography variant="h6" gutterBottom>
            AI and Web Watch
          </Typography>
          <Divider sx={{ marginBottom: 1 }} />
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Hello World! If you've got an interest in AI, a desire to learn
            about web development, and a spark of curiosity, you've landed in
            the right place. I bring you the latest news and developments from
            the field of AI, demystifying tech giants' magic, celebrating
            milestone-breaking moments, and spotlighting the fantastic work of
            emerging developers and companies. Together, I hope we can
            understand these advancements and how they influence web
            development.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            My videos are accessible to everyone - whether you're a beginner
            just starting out or a seasoned coder looking to brush up on the
            latest trends. My aim is to explain the complex in a simple,
            easy-to-understand manner, fostering an environment of learning and
            growth.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            I feel that if you have a desire to learn, then you have the
            potential to use these AI tools to create amazing things. So
            remember, my friends, don't be afraid to learn about AI!
          </Typography>
        </Grid>
      </CardContent>
      <CardContent
        sx={{
          backgroundColor: "var(--secondary-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 200,
          minWidth: 800,
          maxWidth: 800,
        }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            "& .markdown": {
              py: 3,
            },
          }}
        >
          <Typography variant="h6" gutterBottom>
            Jerry McDonald
          </Typography>
          <Divider sx={{ marginBottom: 1 }} />
          about me
        </Grid>
      </CardContent>

      <Card sx={{ maxWidth: 345, marginTop: 10 }}>
        <CardActionArea
          component="a"
          href="https://www.youtube.com/c/AIAndWebWatch"
          target="_blank"
        >
          <CardMedia
            component="img"
            alt="AI And Web Watch on Youtube"
            height="300"
            image={AIawwLogo}
          />
          <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
            <Avatar
              src={AIawwLogo}
              sx={{ width: 56, height: 56, marginRight: 2 }}
            />
            <Typography variant="h5" color="text.primary">
              AI And Web Watch
            </Typography>
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default About;
