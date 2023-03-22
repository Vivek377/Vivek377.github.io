import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Lnkdin from "../assets/Lnkdin.png";
import github from "../assets/github.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { IconContext } from "react-icons";

const Contact = () => {
  console.log(Lnkdin);
  return (
    <Box
      w={{ base: "100%" }}
      top={{ base: "28rem", md: "8rem" }}
      h={"15rem"}
      position={{ base: "relative" }}
      color={"whiteAlpha.800"}
      bg={"#1a202c"}
      mt={"10rem"}
    >
      <Box w={{ base: "12rem", md: "10rem" }} m={"auto"} mt={{ base: "12rem" }}>
        <Text fontWeight={"semibold"} fontSize={"4xl"}>
          Contact
        </Text>
      </Box>
      <Box
        display={"flex"}
        w={{ md: "50%" }}
        m={{ md: "auto" }}
        mt={{ md: "4rem" }}
      >
        <SimpleGrid columns={{ base: "2", sm: "3", md: "4" }} spacing={200}>
          <Box
            cursor={"pointer"}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/vivek-kumar-7843b4216/",
                "_blank"
              )
            }
          >
            <IconContext.Provider value={{ size: "3rem" }}>
              <BsLinkedin width={"3rem"} />
            </IconContext.Provider>
          </Box>
          <Box
            cursor={"pointer"}
            onClick={() => window.open("https://github.com/Vivek377", "_blank")}
          >
            <IconContext.Provider value={{ size: "3rem" }}>
              <BsGithub width={"3rem"} />
            </IconContext.Provider>
          </Box>
          <Box
            cursor={"pointer"}
            onClick={() => window.open("mailto:vk640890@gmail.com", "_blank")}
          >
            <IconContext.Provider value={{ size: "3rem" }}>
              <AiOutlineMail width={"3rem"} />
            </IconContext.Provider>
          </Box>
          <Box
            cursor={"pointer"}
            onClick={() => window.open("whatsapp://send?phone=9667215291", "_blank")}
          >
            <IconContext.Provider value={{ size: "3rem" }}>
              <BsWhatsapp width={"3rem"} />
            </IconContext.Provider>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;
