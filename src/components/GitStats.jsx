import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Text } from "@chakra-ui/react";

const GitStats = () => {
  return (
    <Box
      w={"full"}
      top={{ base: "28rem", md: "10rem" }}
      // h={{ base: "65rem",md:"55rem" }}
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
          fontSize={{ base: "3xl", md: "4xl" }}
        >
          My GitHub Stats
        </Text>
      </Box>
      <Box
        boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        p={"2rem"}
        borderRadius={"1rem"}
        w={{base:"90%",md:"fit-content"}}
        m={"auto"}
        mt={"5rem"}
      >
        <GitHubCalendar username="Vivek377" />
      </Box>
      <Box
        boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        p={"2rem"}
        borderRadius={"1rem"}
        w={{ md: "fit-content", base: "90%" }}
        m={"auto"}
        mt={"5rem"}
      >
        <Box>
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Vivek377&layout=compact&theme=transparent&hide_border=true"
            alt="langs"
          />
        </Box>
      </Box>
      <Box display={{ sm: "flex", md: "flex" }}>
        <Box
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          p={"2rem"}
          borderRadius={"1rem"}
          w={{base:"90%",md:"fit-content"}}
          m={"auto"}
          mt={"5rem"}
        >
          <Box>
            <img
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=Vivek377&theme=transparent&hide_border=true&border_radius=15"
              alt="streak"
            />
          </Box>
        </Box>
        <Box
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          p={"2rem"}
          borderRadius={"1rem"}
          w={{base:"90%",md:"fit-content"}}
          m={"auto"}
          mt={"5rem"}
        >
          <Box>
            <img
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=Vivek377&show_icons=true&hide_border=true&theme=transparent"
              alt="stats"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GitStats;
