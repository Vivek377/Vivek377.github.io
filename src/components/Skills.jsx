import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import express from "../assets/express.png";
import redux from "../assets/redux.png";

const Skills = () => (
  <Box
    id="skills"
    w={{ base: "100%" }}
    top={{ base: "28rem", md: "20rem" }}
    // h={"100%"}
    position={{ base: "relative" }}
    color={"whiteAlpha.800"}
    bg={"#1a202c"}
  >
    <Box w={{ base: "12rem", md: "15rem" }} m={"auto"} mt={{ base: "12rem" }}>
      <Text fontWeight={"semibold"} fontSize={"4xl"}>
        Skills
      </Text>
    </Box>

    <Box w={{ md: "70%" }} m={{ md: "auto" }} mt={{ md: "5rem" }}>
      <SimpleGrid columns={{ base: "2", sm: "3", md: "4" }} spacing={20}>
        <Box className="skills-card-name">
          <Image className="skills-card-img" w={"4rem"} src={css} />
          CSS
        </Box>

        <Box className="skills-card-name">
          <Image className="skills-card-img" w={"4rem"} src={mongo} />
          MongoDB
        </Box>
        <Box className="skills-card-name">
          <Image className="skills-card-img" w={"4rem"} src={node} />
          Nodejs
        </Box>
        <Box className="skills-card-name">
          <Image className="skills-card-img" w={"4rem"} src={react} />
          React
        </Box>
        <Box className="skills-card-name">
          <Image className="skills-card-img" w={"4rem"} src={javascript} />
          JavaScript
        </Box>
        <Box className="skills-card-name">
          <Image className="skills-card-img" w={"4rem"} src={express} />
          Express
        </Box>

        <Box className="skills-card-name">
          <Image className="skills-card-img" w={"4rem"} src={html} />
          HTML
        </Box>
        <Box className="skills-card-name">
          <Image className="skills-card-img" w={"4rem"} src={redux} />
          Redux
        </Box>
      </SimpleGrid>
    </Box>
  </Box>
);

export default Skills;
