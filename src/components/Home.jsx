import { Box, Text } from "@chakra-ui/react";
import Typed from "react-typed";
import React from "react";
import homeLogo from "../assets/coding.gif";

const Home = () => {
  return (
    <Box id="home">
      <Box
        w={"full"}
        top={{ base: "-2rem", sm: "-2rem", md: "-1rem" }}
        position={{ base: "relative", md: "relative" }}
        color={"whiteAlpha.800"}
        bg={"#1a202c"}
        // fontFamily={"sans-serif"}
      >
        <Box
          w={{ base: "full", sm: "full" }}
          display={"flex"}
          m={"auto"}
          p={"5rem"}
          pt={"10rem"}
          flexDirection={{ base: "column", sm: "column", md: "row" }}
          mt={"5rem"}
          justifyContent={"center"}
          gap={{ base: "7rem", sm: "10rem", lg: "20rem" }}
          alignItems={"center"}
          fontWeight={"bold"}
        >
          <Box
            w={{ base: "15rem", sm: "20rem", lg: "40rem" }}
            // ml={"5rem"}
            display={{ sm: "flex" }}
            flexDirection={{ sm: "column" }}
          >
            <Text
              fontSize={{ base: "2xl", sm: "3xl", md: "2xl", lg: "4xl" }}
              color={"white"}
            >
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </Text>
            <Text
              id="user-detail-name"
              fontSize={{ base: "2xl", sm: "3xl", md: "2xl", lg: "4xl" }}
              color={"blue.300"}
            >
              <span style={{ color: "white" }}>I'M</span> VIVEK KUMAR
            </Text>
            <Text
              fontWeight={"bold"}
              color={"blue.300"}
              fontSize={{ base: "2xl", sm: "3xl", md: "2xl", lg: "4xl" }}
            >
              <Typed
                strings={[
                  "FullStack Developer",
                  "MERN Stack Developer",
                  "Frontend Developer",
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
              />
            </Text>
          </Box>

          <Box w={{ sm: "15rem", lg: "30rem" }}>
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              // style={{ maxHeight: "450px" }}
            />
          </Box>
        </Box>

        <Box w={"fit-content"} m={"auto"} mt={"2rem"}></Box>
        <Box h={{ base: "36rem" }} mt={"2rem"} id="about">
          {/* <div>
            <Text fontSize={{ base: "large", md: "lg" }} w={"60%"} m={"auto"}>
              Full Stack Web Developer, willing to work in a challenging
              environment. Fully passionate to work in teams and collaborate on
              various projects.
            </Text>
          </div> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
