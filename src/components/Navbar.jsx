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
        w={"full"}
        top={0}
        position={'fixed'}
        zIndex={'3'}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        h={"3rem"}
        fontWeight={'bold'}
      >
        <Box ml={"1rem"}>VKumar</Box>
        <Box
          display={{ base: "none", sm: "flex", md: "flex" }}
          alignItems={"center"}
          cursor={"pointer"}
          gap={{ sm: "1rem", md: "2rem" }}
        >
          <Box>Home</Box>
          <Box>About</Box>
          <Box>Skills</Box>
          <Box>Projects</Box>
          <Box>Contact</Box>
          <Box>
            <Button variant={"ghost"}>
              <HiDownload /> Resume
            </Button>
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
          w={"20%"}
          flexDirection={"column"}
          gap={"3rem"}
          color={"#ccd6f6"}
          fontSize={'2xl'}
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
