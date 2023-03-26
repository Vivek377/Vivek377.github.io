import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Image, Text } from "@chakra-ui/react";

const GitStats = () => {
  return (
    <Box
      w={{ base: "lg", sm: "full", md: "full" }}
      top={{ base: "28rem", md: "-10rem" }}
      h={{ base: "75rem" }}
      position={{ base: "relative", md: "relative" }}
      color={"whiteAlpha.800"}
      bg={"#1a202c"}
    >
      <Box
        w={{ base: "fit-content", sm: "fit-content", md: "20rem" }}
        m={{ base: "auto", md: "auto", sm: "auto" }}
        mt={{ base: "5rem" }}
      >
        <Text
          fontWeight={{ base: "bold", md: "semibold" }}
          color={"blue.500"}
          fontSize={{ base: "4xl", md: "4xl" }}
        >
          My GitHub Stats
        </Text>
      </Box>
      <Box
        boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        p={"2rem"}
        borderRadius={"1rem"}
        w={"fit-content"}
        m={"auto"}
        mt={"5rem"}
      >
        <GitHubCalendar username="Vivek377" />
      </Box>
      <Box
        boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        p={"2rem"}
        borderRadius={"1rem"}
        w={"fit-content"}
        m={"auto"}
        mt={"5rem"}
        id="github-top-langs"
      >
        <Image src="https://camo.githubusercontent.com/185568c08706e016dbf0e5a5295f531534c9f6e309fe777a204d09dbe626c162/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d766976656b3337372673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" />
      </Box>
      <Box display={{ sm: "flex", md: "flex" }}>
        <Box
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          p={"2rem"}
          borderRadius={"1rem"}
          w={"fit-content"}
          m={"auto"}
          mt={"5rem"}
          id="github-streak-stats"
        >
          <Image src="https://camo.githubusercontent.com/66a1c3f12862e0927cd34a24dd0a15b8ed4cf8a6daee805772baefbfb54c9554/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d766976656b33373726" />
        </Box>
        <Box
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          p={"2rem"}
          borderRadius={"1rem"}
          w={"fit-content"}
          m={"auto"}
          mt={"5rem"}
          id="github-stats-card"
        >
          <Image src="https://camo.githubusercontent.com/259d875f7f83a1f8a623d9ddaeaa0db8d098e49fc69718f27491ff45f61f077f/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d766976656b3337372673686f775f69636f6e733d74727565266c6f63616c653d656e" />
        </Box>
      </Box>
    </Box>
  );
};

export default GitStats;
