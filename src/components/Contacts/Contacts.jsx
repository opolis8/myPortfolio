import { Box, Center, Flex, Image, Link, Text } from "@chakra-ui/react";

import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import Aos from "aos";
import { useEffect } from "react";
const Contacts = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Flex
      position={"relative"}
      flexDir={"row"}
      w={"100%"}
      h={{ base: "auto", lg: "20rem" }}
      alignItems={"center"}
      justifyContent={"center"}
      id="contact"
      wrap={"wrap"}
      borderTop={"1px solid gray"}
    >
      <Box>
        <Text
          pos={"absolute"}
          top={"-1rem"}
          left="50%"
          fontSize={20}
          fontWeight={"bold"}
          bg={"gray.800"}
          px={5}
          transform={"translateX(-50%)"}
        >
          Contact Me
        </Text>
      </Box>

      <Box
        display={"Flex"}
        flexDir={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        gap={3}
        w={"20rem"}
        h={"10rem"}
        data-aos="fade-right"
      >
        <Box
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          <MdOutlineMail size={30} />

          <Text fontSize={"1rem"} fontWeight={"bold"}>
            kimedwardoclida@gmail.com
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          <IoCallOutline size={30} />
          <Text fontSize={"1rem"} fontWeight={"bold"}>
            (+63)9555-4923-80
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          flexWrap={"wrap"}
        >
          <FaLocationDot size={30} />
          <Text fontSize={"1rem"} fontWeight={"bold"}>
            Philippines
          </Text>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"Center"}
        w={"20rem"}
        h={"10rem"}
        gap={3}
        data-aos="fade-left"
      >
        <Box>Social</Box>
        <Box display={"flex"} flexDir={"row"} gap={5}>
          <Link href="https://web.facebook.com/KimEdx/" isExternal>
            <Box
              border={"none"}
              transition={"transform .2s linear"}
              _hover={{
                cursor: "pointer",
                transform: "scale(1.2)",
                color: "#4267B2",
              }}
            >
              <FaSquareFacebook size={25} />
            </Box>
          </Link>

          <Link href="https://github.com/opolis8" isExternal>
            <Box
              transition={"transform .2s linear"}
              _hover={{
                cursor: "pointer",
                transform: "scale(1.2)",
              }}
            >
              <FaGithub size={25} />
            </Box>
          </Link>
          <Link href="https://www.instagram.com/keome94/" isExternal>
            <Box
              p={0}
              m={0}
              transition={"transform .2s linear"}
              _hover={{
                cursor: "pointer",
                transform: "scale(1.2)",
                color: "linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)",
              }}
            >
              <TiSocialInstagram size={25} />
            </Box>
          </Link>
          <Link
            href="https://www.linkedin.com/in/kim-edward-oclida-383859118/"
            isExternal
          >
            <Box
              transition={"transform .2s linear"}
              _hover={{
                cursor: "pointer",
                transform: "scale(1.2)",
                color: "#0077b5",
              }}
            >
              <FaLinkedinIn size={25} />
            </Box>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Contacts;
