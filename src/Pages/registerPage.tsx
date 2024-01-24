import { Box, HStack, Text } from "@chakra-ui/react";
import RegisterForm from "../forms/registerForm";
import { IoChevronBackOutline } from "react-icons/io5";

const Register = () => {
  return (
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
      <Box
        width="600px"
        height="650px"
        backgroundColor="whiteAlpha.200"
        border="2px solid #ff7700"
      ></Box>
    </HStack>
  );
};

export default Register;
