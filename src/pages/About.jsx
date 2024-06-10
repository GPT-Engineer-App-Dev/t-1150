import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Box bg="green.500" minH="100vh">
    <Container centerContent maxW="container.md" py={10}>
      <Heading as="h1" size="xl" mb={6}>
        About
      </Heading>
      <Text fontSize="lg">
        This is the About page. Here you can find more information about our application.
      </Text>
    </Container>
  </Box>
);

export default About;