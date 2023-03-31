import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
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
        w={{ base: "full", sm: "full", md: "full" }}
        top={0}
        position={{ base: "fixed", sm: "fixed", md: "fixed" }}
        zIndex={"3"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        h={{ base: "4rem", sm: "3rem", md: "4rem" }}
        fontWeight={"bold"}
      >
        <Box fontSize={{ base: "xl", sm: "md", md: "xl" }} ml={"1rem"}>
          VKumar
        </Box>
        <Box
          display={{ base: "none", sm: "flex", md: "flex" }}
          alignItems={"center"}
          cursor={"pointer"}
          fontSize={{ sm: "md", md: "xl" }}
          gap={{ sm: "1rem", md: "2rem" }}
        >
          <Box id=".nav-link.home">
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
          <Box id=".nav-link.about">
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
          <Box id=".nav-link.skills">
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
          <Box id=".nav-link.projects">
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
          <Box id=".nav-link.contact">
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
            <a href="https://vivek377.github.io/Vivek-Kumar-Resume.pdf" download>
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                border={"1px solid white"}
                id="resume-button-1"
                onClick={() =>
                  window.open(
                    "https://vivek377.github.io/Vivek-Kumar-Resume.pdf",
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
          <Link
            smooth={true}
            duration={100}
            spy={true}
            hashSpy={true}
            to="home"
          >
            {!nav ? (
              <FaBars onClick={() => setNav(!nav)} />
            ) : (
              <GiCancel onClick={() => setNav(!nav)} />
            )}
          </Link>
        </Box>
      </Box>

      {/* Mobile Navbar */}

      <Box
        m={{ base: "auto" }}
        zIndex={"9"}
        w={{ base: "150%" }}
        h={{ base: "50rem" }}
        position={{ base: "relative" }}
        top={{ base: "4rem" }}
        p={{ base: "4rem" }}
        color={"whiteAlpha.800"}
        fontSize={{ base: "4xl" }}
        bg={"blue.900"}
        display={{ base: nav ? "flex" : "none" }}
        gap={{ base: "0rem" }}
        flexDirection={"column"}
      >
        <Box>
          <Link
            smooth={true}
            duration={1000}
            spy={true}
            hashSpy={true}
            to="home"
            onClick={() => setNav(false)}
          >
            Home
          </Link>
        </Box>
        <Box>
          <Link
            smooth={true}
            duration={1000}
            spy={true}
            hashSpy={true}
            to="about section"
            onClick={() => setNav(false)}
          >
            About
          </Link>
        </Box>
        <Box>
          <Link
            smooth={true}
            duration={1000}
            spy={true}
            hashSpy={true}
            to="skills"
            onClick={() => setNav(false)}
          >
            Skills
          </Link>
        </Box>
        <Box>
          <Link
            smooth={true}
            duration={1000}
            spy={true}
            hashSpy={true}
            onClick={() => setNav(false)}
            to="projects"
          >
            Projects
          </Link>
        </Box>
        <Box>
          <Link
            smooth={true}
            duration={1000}
            spy={true}
            hashSpy={true}
            onClick={() => setNav(false)}
            to="contact"
          >
            Contact
          </Link>
        </Box>
        <Box>
          <a href="https://vivek377.github.io/Vivek-Kumar-Resume.pdf" download>
            <Button
              variant={"ghost"}
              _hover={{ color: "black", bg: "white" }}
              border={"1px solid white"}
              id="resume-button-1"
              onClick={() => {
                setNav(false);
                window.open(
                  "https://vivek377.github.io/Vivek-Kumar-Resume.pdf",
                  "_blank"
                );
              }}
            >
              Resume
            </Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
