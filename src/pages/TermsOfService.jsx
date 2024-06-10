import { Box, Container, Heading, Text } from "@chakra-ui/react";

const TermsOfService = () => (
  <Box bg="green.500" minH="100vh">
    <Container centerContent maxW="container.md" py={10}>
      <Heading as="h1" size="xl" mb={6}>
        Terms of Service
      </Heading>
      <Text fontSize="lg">
        This is the Terms of Service page. Here you can find information about our terms of service.
      </Text>
    </Container>
  </Box>
);

export default TermsOfService;