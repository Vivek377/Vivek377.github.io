import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import mypic from "../assets/vivek_picture.png";

const About = () => {
  return (
    <Box
      w={"full"}
      top={"30rem"}
      h={"100%"}
      position={"relative"}
      color={"white"}
      bg={"#1a202c"}
    >
      <Box w={"20%"} m={"auto"}>
        <Text fontWeight={"semibold"} fontSize={"4xl"}>
          About Me
        </Text>
      </Box>
      <Box
        w={"60%"}
        p={"1rem"}
        m={"auto"}
        mt={"4rem"}
        display={{ sm:"flex", md: "flex" }}
        gap={"2rem"}
      >
        <Box w={"30%"}>
          <Image borderRadius={"10%"} w={"90%"} src={mypic} />
        </Box>
        <Box w={"70%"}>
          <Text fontSize={"lg"}>
            dedicated full stack web developer who is always passionate about
            learning new things. A good leader and a good team player. Looking
            forward to developing products that help in making peopleʼs lives
            better and becoming an integral part of an organization that helps
            me grow.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
