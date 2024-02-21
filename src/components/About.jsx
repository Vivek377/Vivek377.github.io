import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import mypic from "../assets/white_background.png";

const About = () => {
  return (
    <Box>
      <Box
        w={"full"}
        top={{ base: "-10rem", md: "-20rem", lg: "-20rem" }}
        position={{ base: "relative", md: "relative" }}
        color={"whiteAlpha.800"}
        bg={"#1a202c"}
        // fontFamily={"sans-serif"}
      >
        <Box
          w={{ base: "fit-content", sm: "fit-content", md: "fit-content" }}
          m={"auto"}
        >
          <Text
            fontWeight={{ base: "bold", md: "semibold" }}
            color={"blue.500"}
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            About Me
          </Text>
        </Box>

        <Box
          w={{ base: "90%", sm: "90%", md: "90%", lg: "80%" }}
          ml={"5rem"}
          m={{ base: "auto", md: "auto" }}
          mt={{ base: "4rem", sm: "5rem", md: "2rem" }}
          display={{ md: "flex" }}
          alignItems={"center"}
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          p={"2rem"}
          justifyContent={"center"}
          borderRadius={"1rem"}
        >
          <Box
            w={{ base: "80%", sm: "50%", md: "30%", lg: "35%", xl: "20%" }}
            m={{ base: "auto", sm: "auto" }}
          >
            <Image
              className="home-img"
              borderRadius={"10%"}
              w={{ base: "16rem", sm: "15rem", md: "13rem" }}
              src={mypic}
            />
          </Box>

          <Box mt={{ base: "2rem" }} w={{ md: "60%", lg: "80%", xl: "75%" }}>
            <Text
              fontWeight={{ md: "semibold" }}
              fontSize={{ base: "large", md: "lg" }}
              id="user-detail-intro"
            >
              Dedicated Full Stack Developer with proficiency in MERN stack.
              Adept at designing and implementing scalable and efficient
              solutions, utilizing MongoDB, Express.js, React, and Node.js.
              Committed to continuous growth and eager to apply and expand my
              skills in a dynamic professional setting. Having hands on learning
              on different tech-stacks.
            </Text>

            <Box
              w={{ base: "fit-content", sm: "fit-content" }}
              m={{ base: "auto", sm: "auto" }}
            >
              <a
                id="resume-link-2"
                href="https://vivek377.github.io/Vivek-Kumar-Resume.pdf"
                download
              >
                <Button
                  variant={"ghost"}
                  _hover={{ color: "black", bg: "white" }}
                  mt={"1rem"}
                  border={"1px solid white"}
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
    </Box>
  );
};

export default About;
