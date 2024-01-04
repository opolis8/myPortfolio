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

const Projects = () => {
  const [itemShow, setItemShow] = useState(3);
  const projectData = [
    {
      title: "Instgram Clone",
      projectImage: "/instagram_clone.png",
      demoLink: "https://social-app-opolis8.vercel.app",
      codeLink: "https://github.com/opolis8/instagram-clone.git",
    },

    {
      title: "E-commerce product page",
      projectImage: "/ecommerce.png",
      demoLink: "https://opolis8.github.io/ecommerce-product-page/",
      codeLink: "https://github.com/opolis8/ecommerce-product-page.git",
    },
    {
      title: "Advice generator app",
      projectImage: "/advice_generator.jpg",
      demoLink: "https://opolis8.github.io/advice-generator-app-main/",
      codeLink: "https://github.com/opolis8/advice-generator-app-main.git",
    },
    {
      title: "Interactive Card Detail",
      projectImage: "/Interactive_Card.jpg",
      demoLink: "https://opolis8.github.io/interactive-card-details-form/",
      codeLink: "https://github.com/opolis8/interactive-card-details-form.git",
    },
    {
      title: "Interactive Rating",
      projectImage: "/interactive_rating.png",
      demoLink: "https://opolis8.github.io/Interactive-rating/",
      codeLink: "https://github.com/opolis8/Interactive-rating.git",
    },
    {
      title: "news-letter-sign-up",
      projectImage: "/news_letter_sign-up.png",
      demoLink: "https://opolis8.github.io/news-letter-sign-up/",
      codeLink: "https://github.com/opolis8/news-letter-sign-up.git",
    },
  ];
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
                            <Image src="/external-link.svg" />
                          </Link>
                        </Button>
                        <Button bgColor={"#B6C4B6"} variant="outline">
                          <Link href={project.codeLink} isExternal>
                            <Image
                              src="/code.svg
                      "
                            />
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
