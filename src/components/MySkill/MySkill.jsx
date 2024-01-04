import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Aos from "aos";
import "../../assets/dist/aos.css";
import React, { useEffect } from "react";
import { skillAnimation } from "../Animation";
import { anotherAnimation } from "../Animation";

const MySkill = () => {
  const skillData = [
    {
      id: "1",
      name: "HTML",
      image: "/Html.svg",
      animation: `${skillAnimation} infinite 3s linear`,
    },
    {
      id: "2",
      name: "CSS",
      image: "/CSS3_logo.svg",
      animation: `${skillAnimation} infinite 3s linear`,
    },
    {
      id: "3",
      name: "React",
      image: "/react.svg",
      animation: `${anotherAnimation} infinite 10s linear `,
    },
    {
      id: "4",
      name: "Firebase",
      image: "/Firebase.png",
      animation: `${skillAnimation} infinite 3s linear`,
    },
    {
      id: "5",
      name: "Vite",
      image: "/vite.svg",
      animation: `${skillAnimation} infinite 3s linear`,
    },
    {
      id: "6",
      name: "Saas",
      image: "/Sass_Logo.svg",
      animation: `${skillAnimation} infinite 3s linear`,
    },
    {
      id: "7",
      name: "Github",
      image: "/github.svg",
      animation: `${skillAnimation} infinite 10s linear `,
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Flex
        flexDir={"column"}
        gap={"4rem"}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        borderTop={"1px solid white"}
        pt={20}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
          data-aos="fade-right"
        >
          <Text fontSize={"3rem"} fontWeight={"bold"}>
            ABOUT
          </Text>
          <Text fontSize={"1.2rem"}>
            I'm a passionate WEB Developer , I've worked on a variety of
            projects in the retail, Social-media, e-commerce. I'm passionate
            about creating great user experiences and have a strong
            understanding of usability and accessibility standards.
          </Text>
        </Box>

        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w={"100%"}
          flexDir={"column"}
          gap={5}
          data-aos="fade-left"
        >
          <Text fontSize={"3rem"} fontWeight={"bold"}>
            Language and Tools
          </Text>

          <Wrap spacing={30} justify={"center"} data-aos="fade-right">
            {skillData.map((skill) => {
              return (
                <WrapItem _hover={{ cursor: "pointer" }} key={skill.id}>
                  <Center
                    w="180px"
                    h="150px"
                    bg={"rgba(96, 114, 116,0.2)"}
                    backdropFilter={"blur(8px)"}
                    borderRadius={21}
                    transition={"background .6s ease-in-out"}
                    _hover={{
                      background: "rgba(96, 114, 116,.5)",
                    }}
                    boxShadow={"1px 0px 20px rgba(0, 0, 0, 0.4)"}
                  >
                    <Flex flexDir={"Column"} gap={2} alignItems={"center"}>
                      <Box display={"flex"} flexDir={"row"}>
                        <Image
                          src={skill.image}
                          w={55}
                          objectFit={"contain"}
                          _hover={{ animation: `${skill.animation}` }}
                        />
                      </Box>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <Text fontWeight={"bold"}>{skill.name}</Text>
                      </Box>
                    </Flex>
                  </Center>
                </WrapItem>
              );
            })}
          </Wrap>
        </Flex>
      </Flex>
    </>
  );
};

export default MySkill;
