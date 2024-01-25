import { Box, HStack, Text, Image } from "@chakra-ui/react";
import RegisterForm from "../forms/registerForm";
import { IoChevronBackOutline } from "react-icons/io5";
import photo from "../assets/regImage.png";

const Register = () => {
  return (
    <Box
      width={{ base: "100vw", md: "100vw", lg: "100vw", xl: "100vw" }}
      height={{ base: "60vh", md: "100vh", lg: "70vh", xl: "70vh" }}
    >
      <HStack>
        <Box>
          <Box>
            <IoChevronBackOutline fontSize="35px" />
            <Text fontSize="10px"> Welcome to </Text>
            KAMPUS LOGO
          </Box>
          <Text>Create an Account</Text>
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
