import { Box, Flex, Text, Heading, VStack, Link, Button } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" p={4} bg="gray.800" color="white" justifyContent="space-between" alignItems="center">
        <Heading size="lg">GPT Engineer</Heading>
        <Box>
          <Link href="#about" p={2}>About</Link>
          <Link href="#portfolio" p={2}>Portfolio</Link>
          <Link href="#contact" p={2}>Contact</Link>
        </Box>
      </Flex>
      <Box id="about" p={4}>
        <Heading size="xl" mb={2}>About Me</Heading>
        <Text fontSize="lg">I am a web developer with a passion for building beautiful and functional web applications.</Text>
      </Box>
      <Box id="portfolio" p={4}>
        <Heading size="xl" mb={2}>Portfolio</Heading>
        <VStack spacing={4}>
          <Text fontSize="lg">Project 1: E-commerce Website</Text>
          <Text fontSize="lg">Project 2: Social Media Platform</Text>
        </VStack>
      </Box>
      <Box id="contact" p={4}>
        <Heading size="xl" mb={2}>Contact</Heading>
        <VStack spacing={4}>
          <Button leftIcon={<FaEnvelope />} colorScheme="teal">Email Me</Button>
          <Button leftIcon={<FaGithub />} colorScheme="gray">GitHub</Button>
          <Button leftIcon={<FaLinkedin />} colorScheme="blue">LinkedIn</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;