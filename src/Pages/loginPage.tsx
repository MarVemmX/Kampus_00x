import { Box, HStack, Text, Image, Flex, Button } from "@chakra-ui/react";
import { IoChevronBackOutline } from "react-icons/io5";
import photo from "../assets/logImage.png";
import LoginForm from "../forms/loginForm";

const Login = () => {
  return (
    <Box
      mt={{ base: "10vh", md: "15vh", lg: "0", xl: "0" }}
      width={{ base: "100vw", md: "100vw", lg: "100vw", xl: "100vw" }}
      height={{ base: "60vh", md: "60vh", lg: "100%", xl: "70vh" }}
    >
      <HStack>
        <Box>
          <Button>
            <IoChevronBackOutline fontSize="35px" />
          </Button>

          <Flex
            ml={{ base: "13vw", md: "13vw", lg: "12vw", xl: "11vw" }}
            alignItems="flex-start"
            flexDir="column"
          >
            <Box>
              <HStack gap="2">
                <Text fontSize="10px"> Login to your </Text>
                <Text fontFamily="Autography" fontSize="20px" color="#ff7700">
                  Kampus!
                </Text>
                <Text fontSize="10px"> account </Text>
              </HStack>
            </Box>
            <Text fontSize="2xl" fontWeight="extrabold">
              Welcome Back
            </Text>
          </Flex>
          <LoginForm />
        </Box>
        <Image
          ml="-5%"
          mt={{ lg: "-10vh", xl: "5vh" }}
          pt="0vh"
          pb="10vh"
          src={photo}
          display={{ base: "none", md: "none", lg: "block", xl: "block" }}
          width={{ lg: "40vw", xl: "40vw" }}
          height={{ lg: "90vh", xl: "95vh" }}
        ></Image>
      </HStack>
    </Box>
  );
};

export default Login;
