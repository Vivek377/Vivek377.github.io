import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import mypic from "../assets/vivek_picture.png";

const About = () => {
  return (
    <Box
      id="about section"
      w={{ base: "28rem", md: "full", sm: "full" }}
      top={{ base: "5rem", md: "30rem" }}
      h={{ base: "70rem",md:"20rem" }}
      position={{ base: "relative" }}
      color={"whiteAlpha.800"}
      bg={"#1a202c"}
    >
      <Box
        w={{ base: "fit-content", md: "15rem" }}
        m={{ sm: "auto" }}
        ml={"5rem"}
      >
        <Text fontWeight={{base:"bold",md:"semibold"}} color={"blue.500"} fontSize={{ base: "4xl", md: "4xl" }}>
          About Me
        </Text>
      </Box>
      <Box
        w={{ base: "100%", md: "80%" }}
        m={{ base: "auto",md:"auto" }}
        mt={{ base: "4rem" }}
        ml={{ base: "1rem" }}
        display={{ md: "flex" }}
        alignItems={"center"}
        boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        p={"2rem"}
        borderRadius={"1rem"}
      >
        <Box w={{ base: "30rem" }}>
          <Image
            data-testid="home-img"
            borderRadius={"10%"}
            w={{ base: "16rem", sm: "15rem", md: "12rem" }}
            src={mypic}
          />
        </Box>
        <Box mt={{ base: "2rem" }} w={{ md: "55rem" }}>
          <Text fontWeight={{md:"semibold"}} fontSize={{ base: "xl", md: "lg" }}>
            dedicated full stack web developer who is always passionate about
            learning new things. A good leader and a good team player. Looking
            forward to developing products that help in making peopleʼs lives
            better and becoming an integral part of an organization that helps
            me grow.
          </Text>
          <Button
            variant={"ghost"}
            _hover={{ color: "black", bg: "white" }}
            border={"1px solid white"}
            id="resume-button-2"
            onClick={() =>
              window.open(
                "http://localhost:3000/Vivek-Kumar-Resume.pdf",
                "_blank"
              )
            }
          >
            Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
