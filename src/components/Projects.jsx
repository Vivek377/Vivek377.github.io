import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import ObjectOPedia from "../assets/ObjectOPedia.png";
import fabbag from "../assets/fabbag.png";
import VirtulShop from "../assets/VirtualShop.png";

const Projects = () => {
  return (
    <Box
      w={{ base: "100%" }}
      top={{ base: "28rem", md: "20rem" }}
      h={{ md: "70rem" }}
      position={{ base: "relative" }}
      color={"whiteAlpha.800"}
      bg={"#1a202c"}
      mb={"10rem"}
    >
      <Box w={{ base: "12rem", md: "15rem" }} m={"auto"} mt={{ base: "12rem" }}>
        <Text fontWeight={"semibold"} fontSize={"4xl"}>
          Projects
        </Text>
      </Box>

      <Box
        display={{ md: "flex" }}
        w={"80%"}
        m={"auto"}
        gap={"2rem"}
        // mb={"30rem"}
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
        borderRadius={"1rem"}
        border={"1.5px solid white"}
        p={"2rem"}
        bg={""}
        mt={"3rem"}
      >
        <Box border={"1px solid white"} w={"50%"} borderRadius={"1rem"}>
          <Image w={"100%"} borderRadius={"1rem"} src={ObjectOPedia} />
        </Box>
        <Box w={"50%"} display={"flex"} flexDirection={"column"}>
          <Center>
            <Text fontWeight={"semibold"} fontSize={"4xl"}>
              ObjectOpedia
            </Text>
          </Center>
          <Box lineHeight={"2rem"} textAlign={"justify"}>
            <Box>
              Group project, Sign in with google, Admin panel also added
            </Box>
            <Box>React, Redux, Chakra-ui</Box>
            <Box display={"flex"} gap={"1rem"}>
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                border={"1px solid white"}
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
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
        borderRadius={"1rem"}
        border={"1.5px solid white"}
        p={"2rem"}
        bg={""}
        mt={"3rem"}
      >
        <Box border={"1px solid white"} w={"50%"} borderRadius={"1rem"}>
          <Image w={"100%"} borderRadius={"1rem"} src={VirtulShop} />
        </Box>
        <Box w={"50%"} display={"flex"} flexDirection={"column"}>
          <Center>
            <Text fontWeight={"semibold"} fontSize={"4xl"}>
              Vitual-Shop
            </Text>
          </Center>
          <Box lineHeight={"2rem"} textAlign={"justify"}>
            <Box>
              Group project, Sign in with google, Admin panel also added
            </Box>
            <Box>React, Redux, Chakra-ui</Box>
            <Box display={"flex"} gap={"1rem"}>
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                border={"1px solid white"}
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
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
        borderRadius={"1rem"}
        border={"1.5px solid white"}
        p={"2rem"}
        mt={"3rem"}
      >
        <Box border={"1px solid white"} w={"50%"} borderRadius={"1rem"}>
          <Image w={"100%"} borderRadius={"1rem"} src={fabbag} />
        </Box>
        <Box w={"50%"} display={"flex"} flexDirection={"column"}>
          <Center>
            <Text fontWeight={"semibold"} fontSize={"4xl"}>
              FabBag-Clone
            </Text>
          </Center>
          <Box lineHeight={"2rem"} textAlign={"justify"}>
            <Box>Group project, e-commerce, completed in 5 days</Box>
            <Box>HTML, CSS, JS</Box>
            <Box display={"flex"} gap={"1rem"}>
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                border={"1px solid white"}
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
    </Box>
  );
};

export default Projects;
