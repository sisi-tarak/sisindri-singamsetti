import React from "react";
import { Avatar, Box, Container, Typography } from "@mui/material";
import sisi from "../../assets/sisi.jpg";
const About = () => {
  return (
    <Container
      maxWidth="lg"
      className="flex flex-col justify-center mx-auto mt-8 mb-24 "
    >
      <Box className="flex flex-col justify-center align-center mx-auto gap-3">
        <Typography
          variant="h6"
          className="mt-16 mb-20 font-semibold italic text-gray-700"
        >
          I'm Sisindri Singamsetti...
        </Typography>
        <Avatar
          alt="Remy Sharp"
          src={sisi}
          sx={{ width: 106, height: 106 }}
          className="mx-auto"
        />
      </Box>
      <Box className="flex flex-col justify-center mt-8 mx-auto">
        <Typography
          variant="body1"
          className="text-gray-700 mx-auto flex justify-center px-32"
        >
          Hi, I’m Sisindri Singamsetti, a passionate and driven web developer
          with a love for crafting user-friendly digital solutions. My journey
          into the tech world has been fueled by determination and a constant
          desire to grow. Currently, I’m pursuing a B.Tech in Information
          Technology (2nd year) at Sree Venkateswara College of Engineering.
          Along the way, I took a bold step by pausing my studies for a year
          while awaiting a job offer from Wipro. Although I received the offer,
          I chose to decline it as the assigned domain, networking, didn’t align
          with my passion for web development. This decision allowed me to focus
          on mastering the technologies I truly enjoy. Over time, I’ve built
          solid experience in web development, completing 7+ projects, including
          full-stack development and collaborations with US clients. A proud
          moment in my journey was being selected for the State Level Project
          Expo 2022, where I showcased my technical expertise and creativity. My
          current tech stack includes React, Tailwind CSS, Material UI, and
          JavaScript, and I’m actively expanding my skill set by learning
          backend technologies like NodeJS and ExpressJS to become a
          well-rounded full-stack developer. In addition to my academic and
          technical pursuits, I am the co-founder of Webortex, a startup focused
          on building modern web and app solutions. Through Webortex, I launched
          the Student Incubator Program, which aims to bridge the gap between
          academic learning and industry expectations. This program provides
          students with hands-on experience and real-world project opportunities
          to help them develop essential career skills. Beyond my startup, I am
          honored to serve as the Web Lead for the Google Developer Group (GDG)
          at my college, where I mentor and guide students in exploring
          technology and building innovative solutions. My leadership role
          reflects my commitment to sharing knowledge and fostering growth
          within the tech community. My ultimate goal is to continue learning,
          innovating, and contributing to meaningful projects while helping
          others succeed through collaboration and mentorship. With every
          project, I strive to create impactful solutions and inspire others to
          pursue their passion for technology. Let’s connect and create
          something extraordinary together!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
