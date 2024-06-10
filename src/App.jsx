import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const Navbar = () => (
    <Box bg="blue.500" px={4} py={2}>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap">
        <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ bg: "blue.700" }} _activeLink={{ bg: "blue.700" }}>
          Home
        </Link>
        <Link as={NavLink} to="/about" px={2} py={1} rounded="md" _hover={{ bg: "blue.700" }} _activeLink={{ bg: "blue.700" }}>
          About
        </Link>
        <Link as={NavLink} to="/contact" px={2} py={1} rounded="md" _hover={{ bg: "blue.700" }} _activeLink={{ bg: "blue.700" }}>
          Contact
        </Link>
      </Flex>
    </Box>
  );

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;