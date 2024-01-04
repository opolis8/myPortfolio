import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import { projectData } from "./ProjectData";
import externalLink from "/external-link.svg";
import code from "/code.svg";

const Projects = () => {
  const [itemShow, setItemShow] = useState(3);

  useEffect(() => {
    Aos.init();
  }, []);

  const showmore = () => {
    setItemShow(projectData.length);
  };

  const showless = () => {
    setItemShow(3);
  };
  return (
    <>
      <Flex
        w={"100%"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        id="port"
        mt={10}
        mb={5}
        data-aos="fade-right"
        pb={20}
      >
        <Text
          fontSize={"3rem"}
          fontFamily={"Inter,sans-serif"}
          fontWeight={"bold"}
          data-aos="fade-right"
        >
          Portfolio
        </Text>
        <Flex>
          <Wrap spacing={10} justify={"center"} data-aos="fade-right">
            {projectData.slice(0, itemShow).map((project, idx) => {
              return (
                <WrapItem _hover={{ cursor: "pointer" }} key={idx}>
                  <Center
                    w="300px"
                    h="250px"
                    bgImage={project.projectImage}
                    bgRepeat={"no-repeat"}
                    backgroundPosition={"center"}
                    backgroundSize={"cover"}
                    borderRadius={20}
                    overflow={"hidden"}
                    transition={"transform .2s ease-in-out"}
                    _hover={{ transform: "scale(1.1)" }}
                    boxShadow={"1px 0px 20px rgba(0, 0, 0, 0.4)"}
                  >
                    <Box
                      display="flex"
                      w={"full"}
                      h={"full"}
                      alignItems={"Center"}
                      justifyContent={"center"}
                      flexDir={"column"}
                      gap={5}
                      opacity={0}
                      _hover={{ opacity: 1 }}
                      bg={"rgba(22, 48, 32,0.5)"}
                      backdropFilter={"blur(1px)"}
                    >
                      <Text fontWeight={"bold"} fontSize={"1rem"}>
                        {project.title}
                      </Text>
                      <Box
                        display={"flex"}
                        alignItems={"Center"}
                        justifyContent={"center"}
                        columnGap={5}
                        width={"auto"}
                      >
                        <Button bgColor={"#B6C4B6"} variant="outline">
                          <Link href={project.demoLink} isExternal>
                            <Image src={externalLink} />
                          </Link>
                        </Button>
                        <Button bgColor={"#B6C4B6"} variant="outline">
                          <Link href={project.codeLink} isExternal>
                            <Image src={code} />
                          </Link>
                        </Button>
                      </Box>
                    </Box>
                  </Center>
                </WrapItem>
              );
            })}
          </Wrap>
        </Flex>

        <Box>
          {itemShow === 3 ? (
            <Button onClick={showmore}>Show More</Button>
          ) : (
            <Button onClick={showless}>Show Less </Button>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default Projects;
