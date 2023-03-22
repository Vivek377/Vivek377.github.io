import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { HiDownload } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <Box>
      <Box
        bg={"#23283e"}
        color={"whiteAlpha.800"}
        w={{ base: "100%", md: "full" }}
        top={0}
        position={{ base: "fixed", md: "fixed" }}
        zIndex={"3"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        h={{ md: "4rem" }}
        fontWeight={"bold"}
      >
        <Box ml={"1rem"}>VKumar</Box>
        <Box
          display={{ base: "none", sm: "flex", md: "flex" }}
          alignItems={"center"}
          cursor={"pointer"}
          fontSize={"xl"}
          gap={{ sm: "1rem", md: "2rem" }}
        >
          <Box>Home</Box>
          <Box>About</Box>
          <Box>Skills</Box>
          <Box>Projects</Box>
          <Box>Contact</Box>
          <Box>
            <HiDownload />
            <a href="http://localhost:3000/Vivek-Kumar-Resume.pdf" download>
              <Button
                onClick={() =>
                  window.open(
                    "http://localhost:3000/Vivek-Kumar-Resume.pdf",
                    "_blank"
                  )
                }
                variant={"ghost"}
              >
                Resume
              </Button>
            </a>
          </Box>
        </Box>
        <Box mr={"1rem"} display={{ sm: "none", md: "none" }}>
          {!nav ? (
            <FaBars onClick={() => setNav(!nav)} />
          ) : (
            <GiCancel onClick={() => setNav(!nav)} />
          )}
        </Box>
      </Box>

      {/* Mobile Navbar */}
      <Box w={"100%"} display={nav ? null : "none"} bg={"#1a202c"} h={"100vh"}>
        <Box
          display={"flex"}
          m={"auto"}
          w={"100%"}
          flexDirection={"column"}
          gap={{ base: "3rem" }}
          color={"#ccd6f6"}
          fontSize={{ base: "2xl" }}
        >
          <Box>Home</Box>
          <Box>About</Box>
          <Box>Skills</Box>
          <Box>Projects</Box>
          <Box>Contact</Box>
          <Box>Resume</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
