import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { IoHome } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { MdContactPhone } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <Flex
        p={"1rem"}
        px={{ base: "2rem", sm: "5rem", lg: "10rem" }}
        justifyContent={"space-between"}
        position={"sticky"}
        top={0}
        left={0}
        bg={"#1a202c"}
        zIndex={1}
        color={"white"}
        borderBottom={"1px solid gray"}
      >
        <Flex>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Text
              fontSize={"1.2rem"}
              fontWeight={"bold"}
              _hover={{ cursor: "pointer" }}
            >
              KEO.DEV
            </Text>
          </Link>
        </Flex>

        <Flex gap={"2rem"}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"Center"}
            >
              <Text
                display={{ base: "none", md: "Flex" }}
                fontSize={"1rem"}
                fontWeight={"bold"}
                _hover={{ cursor: "pointer", borderBottom: "2px solid white" }}
              >
                Home
              </Text>
              <Box display={{ base: "flex", md: "none" }}>
                <IoHome size={25} />
              </Box>
            </Box>
          </Link>
          <Link
            activeClass="active"
            to="port"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"Center"}
            >
              <Text
                display={{ base: "none", md: "Flex" }}
                fontSize={"1rem"}
                fontWeight={"bold"}
                _hover={{ cursor: "pointer", borderBottom: "2px solid white" }}
              >
                Project
              </Text>
              <Box display={{ base: "flex", md: "none" }}>
                <BiTask size={25} />
              </Box>
            </Box>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"Center"}
            >
              <Text
                display={{ base: "none", md: "Flex" }}
                fontSize={"1rem"}
                fontWeight={"bold"}
                _hover={{ cursor: "pointer", borderBottom: "2px solid white" }}
              >
                Contact
              </Text>
              <Box display={{ base: "flex", md: "none" }}>
                <MdContactPhone size={25} />
              </Box>
            </Box>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
