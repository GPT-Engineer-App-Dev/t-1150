import { Box, Container, Heading, Text } from "@chakra-ui/react";

const PrivacyPolicy = () => (
  <Box bg="green.500" minH="100vh">
    <Container centerContent maxW="container.md" py={10}>
      <Heading as="h1" size="xl" mb={6}>
        Privacy Policy
      </Heading>
      <Text fontSize="lg">
        This is the Privacy Policy page. Here you can find information about our privacy practices.
      </Text>
    </Container>
  </Box>
);

export default PrivacyPolicy;