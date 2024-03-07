import { Box, HStack, Text, Image, Flex, Button } from "@chakra-ui/react";
import RegisterForm from "../forms/registerForm";
import { IoChevronBackOutline } from "react-icons/io5";
import photo from "../assets/regImage.png";

const Register = () => {
  return (
    <Box
      fontFamily="MGThin"
      width={{ base: "100vw", md: "100vw", lg: "100vw", xl: "100vw" }}
      height={{ base: "60vh", md: "100vh", lg: "70vh", xl: "70vh" }}
    >
      <HStack>
        <Box>
          <Button variant="ghost" ml="15px">
            <IoChevronBackOutline fontSize="35px" />
          </Button>

          <Flex
            ml={{ base: "13vw", md: "13vw", lg: "12vw", xl: "11vw" }}
            alignItems="flex-start"
            flexDir="column"
          >
            <Box>
              <HStack gap="2">
                <Text fontSize="15px"> Welcome to </Text>
                <Text fontSize="25px" fontFamily="Autography" color="#ff7700">
                  Kampus!
                </Text>
              </HStack>
            </Box>
            <Text fontSize="2xl" fontWeight="extrabold">
              Create an Account
            </Text>
          </Flex>
          <RegisterForm />
        </Box>
        <Image
          ml="-5%"
          mt="10vh"
          pt="0vh"
          src={photo}
          display={{ base: "none", md: "none", lg: "block", xl: "block" }}
          width={{ lg: "50%", xl: "80vw" }}
          height={{ lg: "70vh", xl: "80vh" }}
        ></Image>
      </HStack>
    </Box>
  );
};

export default Register;
