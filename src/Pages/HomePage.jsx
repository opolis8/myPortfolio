import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Tooltip,
  keyframes,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Aos from "aos";
import "../assets/dist/aos.css";
import { animation } from "../components/Animation";
import { TypeAnimation } from "react-type-animation";
animation;
import Resume from "../assets/dist/Resume/My_Resume.pdf";
import { RxDownload } from "react-icons/rx";
const HomePage = () => {
  const myAnimation = `${animation} infinite 10s`;
  useEffect(() => {
    Aos.init();
  }, []);

  const handleDownload = () => {
    window.alert("Are you sure you want to download the PDF?");
  };
  return (
    <>
      <Flex
        alignItems={"center"}
        w={"full"}
        justifyContent={"center"}
        h={"100vh"}
        gap={"2rem"}
        wrap={"wrap"}
        id="home"
        data-aos="fade-right"
      >
        <Flex
          flexDir={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <Text fontSize={"2rem"}>HEY! I'M</Text>
          <Text color={"gold"} fontSize={"3rem"} fontWeight={"bold"}>
            KIM EDWARD OCLIDA
          </Text>
          <Text fontSize={"2rem"}>
            <TypeAnimation
              sequence={[
                "A",
                500,
                "A WEB ", //  Continuing previous Text
                500,
                "A WEB Developer",
                500,
                "A WEB",
                500,
                "A",
                500,
                "",
                500,
              ]}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </Text>
        </Flex>
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          gap={5}
        >
          <Box
            animation={myAnimation}
            backdropBlur={1}
            bg={"rgba(22, 48, 32,.5)"}
            backdropFilter={"blur(6px)"}
            overflow={"hidden"}
            border={"1px solid white"}
          >
            <Image
              src="/kim.jpg"
              w={"15rem"}
              h={"15rem"}
              opacity={0.8}
              zIndex={1}
            />
          </Box>
          <Tooltip label="Download CV" placement="bottom">
            <Button
              colorScheme="teal"
              variant="ghost"
              leftIcon={<RxDownload size={15} />}
              borderRadius={20}
              onClick={handleDownload}
            >
              <a
                className="button"
                href={Resume}
                download="ResumeOfficial.pdf"
                target="_blank"
              >
                CV
              </a>
            </Button>
          </Tooltip>
        </Box>
      </Flex>
    </>
  );
};

export default HomePage;
