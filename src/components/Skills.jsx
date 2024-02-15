import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { skills } from "../utilities/skills";

const Skills = () => (
  <Box
    id="skills"
    w={"full"}
    top={{ base: "-10rem", md: "none" }}
    position={{ base: "relative", md: "relative" }}
    color={"whiteAlpha.800"}
    bg={"#1a202c"}
    mb={"2rem"}
  >
    <Box w={"full"} mt={{ base: "12rem" }} textAlign={"center"}>
      <Text
        fontWeight={{ base: "bold", md: "semibold" }}
        color={"blue.500"}
        fontSize={{ base: "3xl", md: "4xl" }}
      >
        Skills
      </Text>
    </Box>

    <Box
      w={{ base: "60%", md: "70%" }}
      m={{ base: "auto", md: "auto" }}
      mt={{ base: "4rem", sm: "5rem", md: "5rem" }}
    >
      <SimpleGrid columns={{ base: "1", sm: "2", md: "4" }} spacing={20}>
        {skills.map((ele) => {
          return (
            <Box
              boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
              p={"1rem"}
              textAlign={"center"}
              borderRadius={"1rem"}
              className="skills-card"
              key={ele.pic}
            >
              <Image
                m={"auto"}
                mt={"1rem"}
                className="skills-card-img"
                w={"4rem"}
                src={ele.pic}
              />
              <Box className="skills-card-name">{ele.name}</Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  </Box>
);

export default Skills;
