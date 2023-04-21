import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import mypic from "../assets/vivek_picture.png";

const About = () => {
  return (
    // <Box>
    <div id="about" className="about section">
      <Box
        w={{ base: "lg", md: "full", sm: "full" }}
        top={{ base: "-10rem", md: "-10rem" }}
        h={{ base: "auto", md: "20rem" }}
        position={{ base: "relative", md: "relative" }}
        color={"whiteAlpha.800"}
        bg={"#1a202c"}
      >
        <Box
          w={{ base: "fit-content", sm: "fit-content", md: "fit-content" }}
          m={{ sm: "auto" }}
          ml={"5rem"}
        >
          <Text
            fontWeight={{ base: "bold", md: "semibold" }}
            color={"blue.500"}
            fontSize={{ base: "4xl", md: "4xl" }}
          >
            About Me
          </Text>
        </Box>
        <Box
          w={"80%"}
          ml={"0rem"}
          m={{ base: "0", md: "auto" }}
          mt={{ base: "4rem", sm: "5rem" }}
          display={{ md: "flex" }}
          alignItems={"center"}
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          p={"2rem"}
          borderRadius={"1rem"}
        >
          <Box
            w={{ base: "30rem", sm: "50%" }}
            m={{ base: "auto", sm: "auto" }}
          >
            <Image
              className="home-img"
              borderRadius={"10%"}
              w={{ base: "16rem", sm: "15rem", md: "12rem" }}
              src={mypic}
            />
          </Box>
          <Box mt={{ base: "2rem" }} w={{ md: "55rem" }}>
            <Text
              fontWeight={{ md: "semibold" }}
              fontSize={{ base: "xl", md: "lg" }}
            >
              dedicated full stack web developer who is always passionate about
              learning new things. A good team player. Looking forward to
              developing products that help in making peopleʼs lives better and
              becoming an integral part of an organization that helps me grow.
            </Text>
            <Box
              w={{ base: "fit-content", sm: "fit-content" }}
              m={{ base: "auto", sm: "auto" }}
            >
              <a
                href="https://vivek377.github.io/Vivek-Kumar-Resume.pdf"
                download
              >
                <Button
                  variant={"ghost"}
                  _hover={{ color: "black", bg: "white" }}
                  border={"1px solid white"}
                className="nav-link resume"
                id="resume-button-2"
                  onClick={() =>
                    window.open(
                      "https://vivek377.github.io/Vivek-Kumar-Resume.pdf",
                      "_blank"
                    )
                  }
                >
                  Resume
                </Button>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>

    // </Box>
  );
};

export default About;
