import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";

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

  const Footer = () => (
    <Box bg="blue.500" px={4} py={6} mt={10}>
      <Flex direction="column" align="center" justify="center">
        <Text color="white" mb={2}>© 2023 Todo App. All rights reserved.</Text>
        <Flex>
          <Link as={NavLink} to="/privacy-policy" px={2} py={1} rounded="md" _hover={{ bg: "blue.700" }} _activeLink={{ bg: "blue.700" }} color="white">
            Privacy Policy
          </Link>
          <Link as={NavLink} to="/terms-of-service" px={2} py={1} rounded="md" _hover={{ bg: "blue.700" }} _activeLink={{ bg: "blue.700" }} color="white">
            Terms of Service
          </Link>
        </Flex>
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;