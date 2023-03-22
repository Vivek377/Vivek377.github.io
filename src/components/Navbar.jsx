import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { HiDownload } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <Box id="nav-menu">
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
          <Box id="nav-link home">
            <Link
              smooth={true}
              duration={1000}
              spy={true}
              hashSpy={true}
              to="home"
            >
              Home
            </Link>
          </Box>
          <Box id="nav-link about">
            <Link
              smooth={true}
              duration={1000}
              spy={true}
              hashSpy={true}
              to="about section"
            >
              About
            </Link>
          </Box>
          <Box id="nav-link skills">
            <Link
              smooth={true}
              duration={1000}
              spy={true}
              hashSpy={true}
              to="skills"
            >
              Skills
            </Link>
          </Box>
          <Box id="nav-link projects">
            <Link
              smooth={true}
              duration={1000}
              spy={true}
              hashSpy={true}
              to="projects"
            >
              Projects
            </Link>
          </Box>
          <Box id="nav-link contact">
            <Link
              smooth={true}
              duration={1000}
              spy={true}
              hashSpy={true}
              to="contact"
            >
              Contact
            </Link>
          </Box>
          <Box id="nav-link resume">
            <HiDownload />
            <a href="http://localhost:3000/Vivek-Kumar-Resume.pdf" download>
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                border={"1px solid white"}
                id="resume-button-1"
                onClick={() =>
                  window.open(
                    "http://localhost:3000/Vivek-Kumar-Resume.pdf",
                    "_blank"
                  )
                }
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
