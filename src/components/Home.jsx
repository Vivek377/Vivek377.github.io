import { Box, Heading, Text } from "@chakra-ui/react";
import Typed from "react-typed";
import React from "react";

const Home = () => {
  return (
    <Box id="home">
      <Box
        w={"full"}
        top={{ base: "-2rem", sm: "-2rem", md: "-1rem" }}
        position={{ base: "relative", md: "relative" }}
        color={"whiteAlpha.800"}
        bg={"#1a202c"}
        fontFamily={"sans-serif"}
      >
        <Box
          w={{ base: "full", sm: "full" }}
          display={"flex"}
          m={"auto"}
          p={"5rem"}
          flexDirection={"column"}
          mt={"5rem"}
          justifyContent={"center"}
          alignItems={"center"}
          fontWeight={"bold"}
        >
          <Box
            w={{ sm: "fit-content" }}
            m={{ sm: "auto" }}
            display={{ sm: "flex" }}
            flexDirection={{ sm: "column" }}
          >
            <Heading fontSize={{ base: "2xl", md: "6xl" }} color={"white"}>
              Hi, I am{" "}
            </Heading>
          </Box>

          <Box ml={{ sm: "0rem", md: "1rem" }}>
            <Heading
              id="user-detail-name"
              fontSize={{ base: "2xl", md: "6xl" }}
              color={"blue.300"}
            >
              Vivek Kumar
            </Heading>
          </Box>
        </Box>

        <Box w={"fit-content"} m={"auto"} mt={"2rem"}>
          <Text
            fontWeight={"bold"}
            color={"blue.300"}
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            <Typed
              strings={[
                "Full Stack Developer",
                "MERN Stack Developer",
                "Frontend Developer",
              ]}
              typeSpeed={70}
              backSpeed={50}
              loop
            />
          </Text>
        </Box>
        <Box h={{ base: "50rem" }} mt={"2rem"} id="about">
          <div>
            <Text fontSize={{ base: "large", md: "lg" }} w={"60%"} m={"auto"}>
              Full Stack Web Developer, willing to work in a challenging
              environment. Fully passionate to work in teams and collaborate on
              various projects.
            </Text>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
