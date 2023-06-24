import React from "react";
import { Box, Card, IconButton } from "@mui/material";
import AIawwBG from "../../static/images/AIawwBG.png";
import AIawwLogo from "../../static/images/AIawwLogo.png";
import SimonIcon from "../../static/images/SimonIcon.webp";
import { Facebook, GitHub } from "@mui/icons-material";
import ExternalLinkAvatar from "../../components/ExternalLinkAvatar";
import AboutCard from "../../components/AboutCard";

const About = () => {
  const aboutSections = [
    {
      title: "AI and Web Watch",
      textArray: [
        "Hello World! If you've got an interest in AI, a desire to learn about web development, and a spark of curiosity, then check out my channel. My goal is to demystify the magic behind web development, and bring you the latest news from the field of AI.",
        "My videos will be accessible to everyone - whether you're a beginner just starting out or a seasoned coder. My aim is to explain the complex in a simple, easy-to-understand manner, fostering an environment of learning and growth.",
        "I feel that if you have a desire to learn then you have the potential to create amazing things. And remember my friends, don't be afraid to learn about AI!"
      ],
      icon: (
        <ExternalLinkAvatar
          imageUrl={AIawwLogo}
          tooltipTitle="Visit AI And Web Watch on Youtube"
          sidebar={true}
          linkUrl="https://www.youtube.com/@Jerrysaiwebwatch"
         
        />
      ),
    },
    {
      title: "Jerry McDonald",
      textArray: [
        "I love helping people learn, and nothing excites me more than knowing I contributed to someone's development. I think this passion comes from my own background. I always wanted to be a programmer, but it felt like a role reserved for the particularly smart, analytical types. I was, unknowingly, putting programmers on a pedestal.",
        "Indeed, I could solve math problems in my head faster than most, often to the annoyance of my teachers, because I'd show as little of my work on paper as possible. But due to certain life circumstances, I left school in the 10th grade and started working labor-type jobs, eventually joining my father in the Louisiana Oil Field.",
        "The enigma of programming persisted into my 30s. To me, programmers were college graduates in Silicon Valley, equipped with an endless technical vocabulary. But a breakthrough moment came when a distant family member of mine, Jon, transitioned into coding after attending a bootcamp called Operation Spark. I knew Jon was smart, but his shift from a background in biology to what I viewed as an elite career truly shook my world.",
        "Encouraged by my wife, I took a leap of faith, left my oilfield job behind, and started coding. Let me tell you, if you're eager to change careers, you absolutely can do it!"
      ],
      icon: (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "6px",
          }}
        >
          <IconButton
            href="https://www.facebook.com/jerry.mcdonald.3591"
            target="_blank"
            rel="noopener"
            aria-label="This is my facebook page"
          >
            <Facebook />
          </IconButton>
          <IconButton
            href="https://github.com/JerryMcDonald"
            target="_blank"
            rel="noopener"
            aria-label="This is my github page"
          >
            <GitHub />
          </IconButton>
        </Box>
      ),
    },
    {
      title: "Inspiration For RecipeGen",
      textArray: [
        "I was digging around for info on the OpenAI API update when I hit upon Simon's article. He really knows his stuff, not just explaining the update but showing how to put it to work building and sending schemas. I saw his mockup for a recipe site and thought, 'Man, that's cool.' I realized it'd be a blast to build it myself and learn a thing or two in the process. So yeah, hats off to Simon for sparking the idea!"
      ],
      icon: (
        <ExternalLinkAvatar
          imageUrl={SimonIcon}
          tooltipTitle="Visit Simon's Blog"
          sidebar={true}
          linkUrl="https://yonom.substack.com/p/native-json-output-from-gpt-4"
        />
      ),
    },
  ];

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
          marginBottom: "90px",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {aboutSections.map((section, index) => (
            <AboutCard
              key={index}
              title={section.title}
              textArray={section.textArray}
              icon={section.icon}
            />
          ))}
        </Card>
      </Box>
    </Box>
  );
};

export default About;
