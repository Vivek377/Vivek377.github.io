import { Box, Heading, Text } from "@chakra-ui/react";
import Typed from "react-typed";
import React from "react";

const Home = () => {
  return (
    <Box
      id="home"
      w={{ base: "28rem", md: "full", sm: "full" }}
      top={{ base: "5rem", md: "0" }}
      h={{ base: "50rem", md: "50rem" }}
      position={"absolute"}
      color={"whiteAlpha.800"}
      bg={"#1a202c"}
    >
      <Box
        w={{ base: "full", md: "60rem" }}
        display={"flex"}
        m={"auto"}
        mt={"5rem"}
        alignItems={"center"}
        fontWeight={"bold"}
      >
        <Box
          w={{ sm: "fit-content" }}
          m={{ sm: "auto" }}
          display={{ sm: "flex" }}
          flexDirection={{ sm: "column" }}
        >
          <Heading fontSize={{ base: "4xl", md: "6xl" }} color={"white"}>
            Hi, I am{" "}
          </Heading>
        </Box>

        <Box ml={{ sm: "0rem", md: "1rem" }}>
          <Heading
            id="user-detail-name"
            fontSize={{ base: "4xl", md: "6xl" }}
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
          fontSize={{ base: "4xl", md: "4xl" }}
        >
          <Typed
            strings={["Full Stack Developer", "MERN Stack Developer"]}
            typeSpeed={70}
            backSpeed={50}
            loop
          />
        </Text>
      </Box>
      <Box h={{ base: "50rem" }} mt={"2rem"}>
        <Text
          id="user-detail-intro"
          fontSize={{ base: "2xl", md: "lg" }}
          w={"60%"}
          m={"auto"}
        >
          Aspiring Full Stack Web Developer, willing to work in a challenging
          environment. Fully passionate to work in teams and collaborate on
          various projects.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
