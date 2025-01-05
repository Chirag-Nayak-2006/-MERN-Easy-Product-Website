import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          bgGradient="linear(to-r,rgb(29, 72, 152),rgb(0, 128, 255))"
          bgClip="text"
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
          textAlign={"center"}
        >
          <Link to={"/"}>PRODUCT STORE 🛒</Link>
        </Text>
        <HStack>
          <Link to={"/create"}>
            <Button>
              <FaRegPlusSquare />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
