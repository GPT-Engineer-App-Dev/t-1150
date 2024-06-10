import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => (
  <Box bg="green.500" minH="100vh">
    <Container centerContent maxW="container.md" py={10}>
      <Heading as="h1" size="xl" mb={6}>
        Contact
      </Heading>
      <Text fontSize="lg">
        This is the Contact page. Here you can find ways to get in touch with us.
      </Text>
    </Container>
  </Box>
);

export default Contact;