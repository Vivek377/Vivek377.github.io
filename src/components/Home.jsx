import { Box, Heading, Text } from "@chakra-ui/react";
import Typed from "react-typed";
import React from "react";

const Home = () => {
  return (
    <Box
      w={"full"}
      top={"3rem"}
      h={"100vh"}
      position={"absolute"}
      color={"white"}
      bg={"#1a202c"}
    >
      <Box
        w={"fit-content"}
        display={"flex"}
        m={"auto"}
        mt={'5rem'}
        alignItems={"center"}
        fontWeight={"bold"}
      >
        <Box>
          <Heading fontSize={"6xl"} color={"white"}>
            Hi, I am{" "}
          </Heading>
        </Box>

        <Box ml={"1rem"}>
          <Heading fontSize={"6xl"} color={"pink.300"}>
            Vivek Kumar
          </Heading>
        </Box>
      </Box>
      <Box w={"fit-content"} m={"auto"} mt={"2rem"}>
        <Text fontWeight={"bold"} fontSize={"4xl"}>
          <Typed
            strings={["Full Stack Developer","MERN Stack Developer"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </Text>
      </Box>
      <Box mt={"2rem"}>
        <Text fontSize={"lg"} w={"60%"} m={"auto"}>
          Aspiring Full Stack Web Developer, willing to work in a challenging
          environment. Fully passionate to work in teams and collaborate on
          various projects.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
