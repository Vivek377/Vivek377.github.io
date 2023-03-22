import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import mypic from "../assets/vivek_picture.png";

const About = () => {
  return (
    <Box
      data-testid="about section"
      w={{ base: "100%" }}
      top={{ base: "28rem", md: "20rem" }}
      // h={"100%"}
      position={{ base: "relative" }}
      color={"whiteAlpha.800"}
      bg={"#1a202c"}
    >
      <Box w={{ base: "12rem", md: "15rem" }} m={"auto"} mt={{ base: "12rem" }}>
        <Text fontWeight={"semibold"} fontSize={"4xl"}>
          About Me
        </Text>
      </Box>
      <Box
        w={{ base: "60%" }}
        m={{ base: "auto" }}
        mt={{ base: "4rem" }}
        display={{ sm: "flex", md: "flex" }}
      >
        <Box w={{ base: "30rem" }}>
          <Image
            data-testid="home-img"
            borderRadius={"10%"}
            w={{ base: "13rem", sm: "3rem", md: "9rem" }}
            src={mypic}
          />
        </Box>
        <Box mt={{ base: "2rem" }} w={{ md: "60rem" }}>
          <Text fontWeight={"semibold"} fontSize={"lg"}>
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
