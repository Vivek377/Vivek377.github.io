import { Box, Button, Center, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { projects } from "../utilities/projects";

const Projects = () => {
  return (
    <Box
      id="projects"
      // w={{ base: "lg", sm: "full", md: "full" }}
      top={{ base: "28rem", md: "-10rem" }}
      // h={{ md: "90rem" }}
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

      <SimpleGrid columns={{ base: "1", sm: "1", md: "2" }}>
        {projects.map((ele) => {
          return (
            <Box
              // display={{ md: "flex" }}
              w={{ base: "80%", md: "80%" }}
              m={"auto"}
              // gap={{ sm: "4rem", md: "2rem" }}
              mb={"10rem"}
              boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
              borderRadius={"1rem"}
              p={"2rem"}
              bg={""}
              mt={"3rem"}
              className="project-card"
              key={ele.name}
            >
              <Box
                border={"1px solid white"}
                w={{ md: "100%" }}
                borderRadius={"1rem"}
              >
                <Image
                  w={{ base: "22rem", sm: "100%", md: "100%" }}
                  borderRadius={"1rem"}
                  src={ele.image}
                />
              </Box>
              <Box
                w={{ md: "100%" }}
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
                    {ele.name}
                  </Text>
                </Center>
                <Box
                  w={{ sm: "fit-content" }}
                  m={{ sm: "auto" }}
                  lineHeight={"2rem"}
                  textAlign={{ sm: "center", md: "justify" }}
                >
                  <Box className="project-description">{ele.about}</Box>
                  <Box>
                    <Text fontWeight={"semibold"} color={"blue.300"} fontSize={"xl"}>
                      Tech Stack:
                    </Text>
                  </Box>
                  <Box mb={"1rem"} className="project-tech-stack">{ele.tech}</Box>
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
                      onClick={() => window.open(ele.live, "_blank")}
                    >
                      See live
                    </Button>
                    <Button
                      variant={"ghost"}
                      _hover={{ color: "black", bg: "white" }}
                      border={"1px solid white"}
                      className="project-github-link"
                      onClick={() => window.open(ele.code, "_blank")}
                    >
                      View code
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
