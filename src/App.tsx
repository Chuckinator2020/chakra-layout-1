import logo from './logo.svg';
import './App.css';
import { Box, Center, ChakraProvider, Container, Flex, Heading, Spacer, Text, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';

const Navbar = () => {
  return (
    <Center bg="gray.700" h="5rem" w="100%" color="white">
      <Text>Navbar</Text>
    </Center>
  )
}

const Cards = () => {
  const names = [
    {firstName: 'jfdksla;jf', lastName: 'hfdksalhkfdsa'},
    {firstName: 'jfdksla;jf', lastName: 'hfdksalhkfdsa'},
    {firstName: 'jfdksla;jf', lastName: 'hfdksalhkfdsa'},
    {firstName: 'jfdksla;jf', lastName: 'hfdksalhkfdsa'},
    {firstName: 'jfdksla;jf', lastName: 'hfdksalhkfdsa'},
    {firstName: 'jfdksla;jf', lastName: 'hfdksalhkfdsa'},
    {firstName: 'jfdksla;jf', lastName: 'hfdksalhkfdsa'},
    {firstName: 'jfdksla;jf', lastName: 'hfdksalhkfdsa'},
    {firstName: 'jfdksla;jf', lastName: 'hfdksalhkfdsa'},
    {firstName: 'jfdksla;jf', lastName: 'hfdksalhkfdsa'},
    {firstName: 'jfdksla;jf', lastName: 'hfdksalhkfdsa'},
  ];

  return (
    <Fragment>
      { names.map((name) => (
            <Box p={2} bg="gray.300" rounded={20} w="100%">
                <VStack alignItems="left" padding={1}>
                    <Heading as="h3" size="lg" textAlign="left">Heading</Heading>
                    <Text align="left">{name.firstName} {name.lastName}</Text>
                    <Text align="left">Content</Text>
                </VStack>
            </Box>
          )) }
    </Fragment>
    
  )
}

const Content = () => {
  return (
    // <Flex align="center" flex={0.5}>
    <Box bg="red.500" w="100%" paddingX={5} >
    <VStack w="inherit" padding={3}>
    {/* <Center> */}
      {/* <Container> */}
        <Cards />
      {/* </Container> */}
    {/* </Center> */}
    </VStack>
    </Box>
    // </Flex>
  )
}

function App() {
  return (
    <ChakraProvider>
      <VStack spacing="0">
        <Navbar />
        <Content />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
