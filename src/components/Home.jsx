import { Box, Heading, Text } from "@chakra-ui/react";
import Typed from "react-typed";
import React from "react";

const Home = () => {
  return (
    <Box id="home"
      w={{base:"100%"}}
      top={"-9rem"}
      h={{ base: "100rem" }}
      position={"absolute"}
      color={"whiteAlpha.800"}
      bg={"#1a202c"}
    >
      <Box
        w={{base:"full",md:"40rem"}}
        display={"flex"}
        m={"auto"}
        mt={"5rem"}
        alignItems={"center"}
        fontWeight={"bold"}
      >
        <Box>
          <Heading fontSize={{base:"4xl",md:"6xl"}} color={"white"}>
            Hi, I am{" "}
          </Heading>
        </Box>

        <Box ml={"1rem"}>
          <Heading id="user-detail-name" fontSize={{base:"4xl",md:"6xl"}} color={"pink.300"}>
            Vivek Kumar
          </Heading>
        </Box>
      </Box>
      <Box w={"fit-content"} m={"auto"} mt={"2rem"}>
        <Text fontWeight={"bold"} fontSize={{base:"3xl",md:"4xl"}}>
          <Typed
            strings={["Full Stack Developer", "MERN Stack Developer"]}
            typeSpeed={70}
            backSpeed={50}
            loop
          />
        </Text>
      </Box>
      <Box h={{base:"50rem"}} mt={"2rem"}>
        <Text id="user-detail-intro" fontSize={"lg"} w={"60%"} m={"auto"}>
          Aspiring Full Stack Web Developer, willing to work in a challenging
          environment. Fully passionate to work in teams and collaborate on
          various projects.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
