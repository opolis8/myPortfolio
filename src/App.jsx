import "./App.css";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { Center, Flex, VStack } from "@chakra-ui/react";
import MySkill from "./components/MySkill/MySkill";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import { useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Center width={"100%"} h={"100vh"}>
          <FidgetSpinner />
        </Center>
      ) : (
        <Flex
          flexDir={"column"}
          pb={5}
          backgroundColor={"#1a202c"}
          color={"white"}
        >
          <Navbar />

          <VStack px={{ base: 0, sm: "5rem", lg: "10rem" }}>
            <HomePage />
            <MySkill />
            <Projects />
            <Contacts />
          </VStack>
        </Flex>
      )}
    </>
  );
}

export default App;
