import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import ObjectOPedia from "../assets/ObjectOPedia.png";
import fabbag from "../assets/fabbag.png";
import VirtualShop from "../assets/VirtualShop.png";
import DeccanHerald from "../assets/DeccanHerald.png";

const Projects = () => {
  return (
    <Box
      id="projects"
      w={{ base: "lg", sm: "full", md: "full" }}
      top={{ base: "28rem", md: "-20rem" }}
      h={{ md: "90rem" }}
      position={{ base: "relative", md: "relative" }}
      color={"whiteAlpha.800"}
      bg={"#1a202c"}
      mb={"10rem"}
    >
      <Box
        w={{ base: "fit-content", sm: "fit-content", md: "15rem" }}
        m={{ base: "auto", sm: "auto", md: "auto" }}
        mt={{ base: "12rem" }}
      >
        <Text
          fontWeight={{ base: "bold", md: "semibold" }}
          color={"blue.500"}
          fontSize={{ base: "4xl", md: "4xl" }}
        >
          Projects
        </Text>
      </Box>

      <Box
        display={{ md: "flex" }}
        w={{ base: "80%", md: "80%" }}
        m={"auto"}
        gap={{ sm: "4rem", md: "2rem" }}
        // mb={"30rem"}
        boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        borderRadius={"1rem"}
        p={"2rem"}
        bg={""}
        mt={"3rem"}
        className="project-card"
      >
        <Box border={"1px solid white"} w={{ md: "50%" }} borderRadius={"1rem"}>
          <Image
            w={{ base: "20rem", sm: "100%", md: "100%" }}
            borderRadius={"1rem"}
            src={ObjectOPedia}
          />
        </Box>
        <Box
          w={{ md: "50%" }}
          mt={{ base: "2rem" }}
          display={"flex"}
          flexDirection={"column"}
        >
          <Center>
            <Text
              className="project-title"
              fontWeight={"semibold"}
              fontSize={"4xl"}
              color={"blue.300"}
            >
              ObjectOpedia
            </Text>
          </Center>
          <Box
            w={{ sm: "fit-content" }}
            m={{ sm: "auto" }}
            lineHeight={"2rem"}
            textAlign={{ sm: "center", md: "justify" }}
          >
            <Box className="project-description">
              Group project, Sign in with google, Admin panel also added
            </Box>
            <Box className="project-tech-stack">React, Redux, Chakra-ui</Box>
            <Box
              w={{ sm: "fit-content" }}
              m={{ sm: "auto" }}
              display={"flex"}
              gap={"1rem"}
            >
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                border={"1px solid white"}
                className="project-deployed-link"
                onClick={() =>
                  window.open(
                    "https://zippy-question-7549.vercel.app/",
                    "_blank"
                  )
                }
              >
                See live
              </Button>
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                border={"1px solid white"}
                className="project-github-link"
                onClick={() =>
                  window.open(
                    "https://github.com/SubodhSingh8543/zippy-question-7549",
                    "_blank"
                  )
                }
              >
                View code
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display={{ md: "flex" }}
        w={"80%"}
        m={"auto"}
        gap={"2rem"}
        // mb={"30rem"}
        boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        borderRadius={"1rem"}
        p={"2rem"}
        bg={""}
        mt={"3rem"}
        className="project-card"
      >
        <Box border={"1px solid white"} w={{ md: "50%" }} borderRadius={"1rem"}>
          <Image w={"100%"} borderRadius={"1rem"} src={VirtualShop} />
        </Box>
        <Box
          w={{ md: "50%" }}
          display={"flex"}
          mt={{ base: "2rem" }}
          flexDirection={"column"}
        >
          <Center>
            <Text
              className="project-title"
              fontWeight={"semibold"}
              fontSize={"4xl"}
              color={"blue.300"}
            >
              Vitual-Shop
            </Text>
          </Center>
          <Box lineHeight={"2rem"} textAlign={{ sm: "center", md: "justify" }}>
            <Box className="project-description">
              Group project, Sign in with google, Admin panel also added
            </Box>
            <Box className="project-tech-stack">React, Redux, Chakra-ui</Box>
            <Box
              w={{ sm: "fit-content" }}
              m={{ sm: "auto" }}
              display={"flex"}
              gap={"1rem"}
            >
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                border={"1px solid white"}
                className="project-deployed-link"
                onClick={() =>
                  window.open("https://minishop-nine.vercel.app/", "_blank")
                }
              >
                See live
              </Button>
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                border={"1px solid white"}
                className="project-github-link"
                onClick={() =>
                  window.open(
                    "https://github.com/Sachin1yadav/Virtual-Shop",
                    "_blank"
                  )
                }
              >
                View code
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display={{ md: "flex" }}
        w={"80%"}
        m={"auto"}
        gap={"2rem"}
        boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        borderRadius={"1rem"}
        p={"2rem"}
        mt={"3rem"}
        className="project-card"
      >
        <Box border={"1px solid white"} w={{ md: "50%" }} borderRadius={"1rem"}>
          <Image w={"100%"} borderRadius={"1rem"} src={fabbag} />
        </Box>
        <Box
          w={{ md: "50%" }}
          display={"flex"}
          mt={{ base: "2rem" }}
          flexDirection={"column"}
        >
          <Center>
            <Text
              className="project-title"
              fontWeight={"semibold"}
              fontSize={"4xl"}
              color={"blue.300"}
            >
              FabBag-Clone
            </Text>
          </Center>
          <Box
            className="project-description"
            lineHeight={"2rem"}
            textAlign={{ sm: "center", md: "justify" }}
          >
            <Box>Group project, e-commerce, completed in 5 days</Box>
            <Box className="project-tech-stack">HTML, CSS, JS</Box>
            <Box
              w={{ sm: "fit-content" }}
              m={{ sm: "auto" }}
              display={"flex"}
              gap={"1rem"}
            >
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                border={"1px solid white"}
                className="project-deployed-link"
                onClick={() =>
                  window.open(
                    "https://unique-cranachan-f05ef7.netlify.app/",
                    "_blank"
                  )
                }
              >
                See live
              </Button>
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                border={"1px solid white"}
                className="project-github-link"
                onClick={() =>
                  window.open(
                    "https://github.com/Parag2510/verdant-straw-7365",
                    "_blank"
                  )
                }
              >
                View code
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display={{ md: "flex" }}
        w={"80%"}
        m={"auto"}
        gap={"2rem"}
        boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        borderRadius={"1rem"}
        p={"2rem"}
        mt={"3rem"}
        className="project-card"
      >
        <Box border={"1px solid white"} w={{ md: "50%" }} borderRadius={"1rem"}>
          <Image w={"100%"} borderRadius={"1rem"} src={DeccanHerald} />
        </Box>
        <Box
          w={{ md: "50%" }}
          display={"flex"}
          mt={{ base: "2rem" }}
          flexDirection={"column"}
        >
          <Center>
            <Text
              className="project-title"
              fontWeight={"semibold"}
              fontSize={"4xl"}
              color={"blue.300"}
            >
              Deccan Herald-Clone
            </Text>
          </Center>
          <Box
            className="project-description"
            lineHeight={"2rem"}
            textAlign={{ sm: "center", md: "justify" }}
          >
            <Box>individual project, static website</Box>
            <Box className="project-tech-stack">HTML, CSS, JS</Box>
            <Box
              w={{ sm: "fit-content" }}
              m={{ sm: "auto" }}
              display={"flex"}
              gap={"1rem"}
            >
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                border={"1px solid white"}
                className="project-deployed-link"
                onClick={() =>
                  window.open(
                    "https://effortless-liger-c9fe59.netlify.app/index.html",
                    "_blank"
                  )
                }
              >
                See live
              </Button>
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                border={"1px solid white"}
                className="project-github-link"
                onClick={() =>
                  window.open(
                    "https://github.com/Vivek377/wonderful-kiss-9318",
                    "_blank"
                  )
                }
              >
                View code
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
