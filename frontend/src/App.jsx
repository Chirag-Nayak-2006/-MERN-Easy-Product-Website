import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/header/navbar";
import HomePage from "./pages/homePage";
import CreatePage from "./pages/createPage";

function App() {
  return (
    // box is like a div element
    <Box minH={"100vh"} bg={useColorModeValue("gray.100")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
