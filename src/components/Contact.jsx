import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { IconContext } from "react-icons";

const Contact = () => {
  return (
    <Box
      id="contact"
      // w={{ base: "lg", sm: "full", md: "full" }}
      top={{ base: "20rem", sm: "15rem", md: "0rem" }}
      h={{ sm: "40rem", md: "30rem" }}
      position={{ base: "relative", md: "relative" }}
      color={"whiteAlpha.800"}
      bg={"#1a202c"}
    >
      <Box
        w={{ base: "12rem", sm: "fit-content", md: "10rem" }}
        m={"auto"}
        mt={{ base: "12rem" }}
        mb={"3rem"}
      >
        <Text
          fontWeight={{ base: "bold", md: "semibold" }}
          color={"blue.500"}
          fontSize={{ base: "4xl", md: "4xl" }}
        >
          Contact
        </Text>
      </Box>
      <Box textAlign={"center"}>
        <Text fontSize={"lg"}> vk640890@gmail.com</Text>
        <br />
        <Text fontSize={"lg"}>Mobile: +91 9667215291</Text>
        <br />
        <Text fontSize={"lg"}>Location: New Delhi, India</Text>
        <br />
      </Box>
      <Box
        // display={"flex"}
        // w={{ sm: "fit-content", md: "50%" }}
        // m={{ sm: "auto", md: "auto" }}
        mt={{ base: "4rem", sm: "4rem", md: "4rem" }}
      >
        <SimpleGrid
          w={{ base: "80%" }}
          m={{ base: "auto", sm: "auto" }}
          columns={{ base: "2", sm: "2", md: "4" }}
          spacing={{ base: 100, sm: 150, md: 200 }}
        >
          <Box
            id="contact-linkedin"
            cursor={"pointer"}
            boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
            p={"2rem"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            w={"8rem"}
            borderRadius={"1rem"}
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
            id="contact-github"
            cursor={"pointer"}
            boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
            borderRadius={"1rem"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            p={"2rem"}
            w={"8rem"}
            onClick={() => window.open("https://github.com/Vivek377", "_blank")}
          >
            <IconContext.Provider value={{ size: "3rem" }}>
              <BsGithub width={"3rem"} />
            </IconContext.Provider>
          </Box>
          <Box
            id="contact-email"
            cursor={"pointer"}
            boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            p={"2rem"}
            borderRadius={"1rem"}
            w={"8rem"}
            onClick={() => window.open("mailto:vk640890@gmail.com", "_blank")}
          >
            <IconContext.Provider value={{ size: "3rem" }}>
              <AiOutlineMail width={"3rem"} />
            </IconContext.Provider>
            {/* <Box>vk640890@gmail.com</Box> */}
          </Box>
          <Box
            id="contact-phone"
            cursor={"pointer"}
            boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            borderRadius={"1rem"}
            p={"2rem"}
            w={"7rem"}
            onClick={() =>
              window.open("whatsapp://send?phone=9667215291", "_blank")
            }
          >
            <IconContext.Provider value={{ size: "3rem" }}>
              <BsWhatsapp width={"3rem"} />
            </IconContext.Provider>
            {/* 9667215291 */}
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;
