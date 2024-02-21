import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineTool,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-scroll";
import { MdOutlinePhone } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <Box id="nav-menu">
      <Box
        bg={"#23283e"}
        color={"whiteAlpha.800"}
        w={"full"}
        top={0}
        position={{ base: "fixed", sm: "fixed", md: "fixed" }}
        zIndex={"3"}
        display={"flex"}
        justifyContent={{
          md: "space-around",
          lg: "space-around",
          xl: "space-around",
          sm: "space-around",
          base: "space-around",
        }}
        gap={{
          base: "16rem",
          md: "1rem",
          sm: "12rem",
          lg: "8rem",
          xl: "30rem",
        }}
        alignItems={"center"}
        h={{ base: "4rem", sm: "4rem", md: "4rem" }}
        fontWeight={"bold"}
        // fontFamily={"sans-serif"}
      >
        <Box fontWeight={"bold"} fontSize={{ base: "md", sm: "md", md: "xl" }} ml={"0rem"}>
          VK.
        </Box>

        <Box
          display={{ base: "none", sm: "none", md: "flex" }}
          alignItems={"center"}
          cursor={"pointer"}
          fontSize={{ sm: "md", md: "xl" }}
          gap={{ sm: "1rem", md: "2rem" }}
        >
          <Box>
            <Link
              className="nav-link home"
              smooth={true}
              duration={1000}
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
              spy={true}
              hashSpy={true}
              to="home"
            >
              <AiOutlineHome />
              Home
            </Link>
          </Box>
          <Box>
            <Link
              smooth={true}
              duration={1000}
              spy={true}
              className="nav-link about"
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
              hashSpy={true}
              to="about"
            >
              <AiOutlineUser />
              About
            </Link>
          </Box>
          <Box>
            <Link
              smooth={true}
              className="nav-link skills"
              duration={1000}
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
              spy={true}
              hashSpy={true}
              to="skills"
            >
              <AiOutlineTool />
              Skills
            </Link>
          </Box>
          <Box>
            <Link
              smooth={true}
              duration={1000}
              spy={true}
              hashSpy={true}
              className="nav-link projects"
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
              to="projects"
            >
              <AiOutlineFundProjectionScreen />
              Projects
            </Link>
          </Box>
          <Box>
            <Link
              smooth={true}
              duration={1000}
              spy={true}
              hashSpy={true}
              className="nav-link contact"
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
              to="contact"
            >
              <MdOutlinePhone />
              Contact
            </Link>
          </Box>
          <Box>
            <a
              href="https://vivek377.github.io/Vivek-Kumar-Resume.pdf"
              download
            >
              <Button
                variant={"ghost"}
                _hover={{ color: "black", bg: "white" }}
                // border={"1px solid white"}
                className="nav-link resume"
                fontSize={{ md: "xl" }}
                id="resume-button-1"
                onClick={() =>
                  window.open(
                    "https://vivek377.github.io/Vivek-Kumar-Resume.pdf",
                    "_blank"
                  )
                }
              >
                <CgFileDocument style={{ marginRight: "4px" }} size={"20px"} />
                Resume
              </Button>
            </a>
          </Box>
        </Box>

        <Box mr={"1rem"} display={{ sm: "block", md: "none" }}>
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
        zIndex={"9"}
        w={{ base: "full" }}
        h={{ base: "full" }}
        position={{ base: "fixed" }}
        top={{ base: "4rem" }}
        p={{ base: "10rem" }}
        color={"whiteAlpha.800"}
        fontSize={{ base: "2xl" }}
        bg={"blue.900"}
        display={{ base: nav ? "flex" : "none", sm: nav ? "flex" : "none" }}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box>
          <Link
            smooth={true}
            duration={1000}
            spy={true}
            hashSpy={true}
            to="home"
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
            // className="nav-link home"
            onClick={() => setNav(false)}
          >
            <AiOutlineHome />
            Home
          </Link>
        </Box>
        <Box>
          <Link
            smooth={true}
            duration={1000}
            spy={true}
            hashSpy={true}
            to="about"
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
            // className="nav-link about"
            onClick={() => setNav(false)}
          >
            <AiOutlineUser />
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
            // className="nav-link skills"
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
            onClick={() => setNav(false)}
          >
            <AiOutlineTool />
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
            // className="nav-link projects"
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
            to="projects"
          >
            <AiOutlineFundProjectionScreen />
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
            // className="nav-link contact"
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
            to="contact"
          >
            <MdOutlinePhone />
            Contact
          </Link>
        </Box>
        <Box>
          <a href="https://vivek377.github.io/Vivek-Kumar-Resume.pdf" download>
            <Button
              variant={"ghost"}
              _hover={{ color: "black", bg: "white" }}
              // border={"1px solid white"}
              // className="nav-link resume"
              fontSize={{ base: "2xl" }}
              fontWeight={"light"}
              // id="resume-button-1"
              onClick={() => {
                setNav(false);
                window.open(
                  "https://vivek377.github.io/Vivek-Kumar-Resume.pdf",
                  "_blank"
                );
              }}
            >
              <CgFileDocument style={{ marginRight: "4px" }} size={"20px"} />
              Resume
            </Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
