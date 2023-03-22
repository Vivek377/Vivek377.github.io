import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box } from "@chakra-ui/react";

const GitStats = () => {
  return (
    <Box
      w={{ base: "100%" }}
      top={{ base: "28rem", md: "8rem" }}
      // h={"100%"}
      position={{ base: "relative" }}
      color={"whiteAlpha.600"}
      bg={"#1a202c"}
    >
      <Box>
        <GitHubCalendar username="Vivek377" />
      </Box>
    </Box>
  );
};

export default GitStats;
