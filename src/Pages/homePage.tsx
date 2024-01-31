import { Box, Text, Stack, HStack, Flex, Button } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import firstImage from "../assets/firstImage.png";

const HomePage = () => {
  return (
    <Box>
      <NavBar />
      <Box
        background={`linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${firstImage}) no-repeat`}
        backgroundSize="cover"
        mt={{ base: "0", md: "", lg: "18vh", xl: "18vh" }}
        height="82vh"
        width="100vw"
      >
        <Flex flexDirection="column" align="center" pt="25vh">
          <Text>WELCOME TO KAMPUS</Text>
          <HStack gap="none">
            <Text>EMPOWER</Text>
            <Text>.CONNECT</Text>
            <Text>.THRIVE</Text>
          </HStack>
          <Stack>
            <Text> What do you need on Kampus?</Text>
            <Text> Unlock impossibilities with a variety students' hub</Text>
          </Stack>
          <HStack>
            <Button>See Activities</Button>
            <Button>Learn More</Button>
          </HStack>
        </Flex>
      </Box>
      {/* <Box
        filter="auto"
        background={`url(${firstImage}) no-repeat`}
        height="100vh"
        w="100v"
      ></Box> */}
    </Box>
  );
};

export default HomePage;
