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
    w={{ base: "28rem", sm: "full", md: "full" }}
    top={{ base: "28rem", md: "none" }}
    h={{ base: "100%", md: "40rem" }}
    position={{ base: "relative" }}
    color={"whiteAlpha.800"}
    bg={"#1a202c"}
  >
    <Box w={{ base: "12rem", md: "15rem" }} m={"auto"} mt={{ base: "12rem" }}>
      <Text
        fontWeight={{ base: "bold", md: "semibold" }}
        color={"blue.500"}
        fontSize={{ base: "4xl", md: "4xl" }}
      >
        Skills
      </Text>
    </Box>

    <Box
      w={{ md: "70%" }}
      m={{ md: "auto" }}
      mt={{ base: "4rem", sm: "5rem", md: "5rem" }}
    >
      <SimpleGrid columns={{ base: "2", sm: "2", md: "4" }} spacing={20}>
        <Box
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          p={"1rem"}
          textAlign={"center"}
          borderRadius={"1rem"}
          className="skills-card-name"
        >
          <Image
            m={"auto"}
            mt={"1rem"}
            className="skills-card-img"
            w={"4rem"}
            src={css}
          />
          CSS
        </Box>

        <Box
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          borderRadius={"1rem"}
          p={"1rem"}
          textAlign={"center"}
          className="skills-card-name"
        >
          <Image
            m={"auto"}
            mt={"1rem"}
            borderRadius={"1rem"}
            className="skills-card-img"
            w={"4rem"}
            src={mongo}
          />
          MongoDB
        </Box>
        <Box
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          borderRadius={"1rem"}
          p={"1rem"}
          textAlign={"center"}
          className="skills-card-name"
        >
          <Image
            m={"auto"}
            mt={"1rem"}
            className="skills-card-img"
            w={"4rem"}
            src={node}
          />
          Nodejs
        </Box>
        <Box
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          borderRadius={"1rem"}
          p={"1rem"}
          textAlign={"center"}
          className="skills-card-name"
        >
          <Image
            m={"auto"}
            mt={"1rem"}
            className="skills-card-img"
            w={"4rem"}
            src={react}
          />
          React
        </Box>
        <Box
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          borderRadius={"1rem"}
          p={"1rem"}
          textAlign={"center"}
          className="skills-card-name"
        >
          <Image
            m={"auto"}
            mt={"1rem"}
            className="skills-card-img"
            w={"4rem"}
            src={javascript}
          />
          JavaScript
        </Box>
        <Box
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          borderRadius={"1rem"}
          p={"1rem"}
          textAlign={"center"}
          className="skills-card-name"
        >
          <Image
            m={"auto"}
            mt={"1rem"}
            className="skills-card-img"
            w={"4rem"}
            src={express}
          />
          Express
        </Box>

        <Box
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          p={"1rem"}
          borderRadius={"1rem"}
          textAlign={"center"}
          className="skills-card-name"
        >
          <Image
            m={"auto"}
            mt={"1rem"}
            className="skills-card-img"
            w={"4rem"}
            src={html}
          />
          HTML
        </Box>
        <Box
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          p={"1rem"}
          borderRadius={"1rem"}
          textAlign={"center"}
          className="skills-card-name"
        >
          <Image
            m={"auto"}
            mt={"1rem"}
            className="skills-card-img"
            w={"4rem"}
            src={redux}
          />
          Redux
        </Box>
      </SimpleGrid>
    </Box>
  </Box>
);

export default Skills;
