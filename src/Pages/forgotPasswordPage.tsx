import { Box, HStack, Text, Image, Flex, Button } from "@chakra-ui/react";
import { IoChevronBackOutline } from "react-icons/io5";
import photo from "../assets/logImage.png";
import ForgotPasswordForm from "../forms/forgotPasswordForm";

const ForgotPassword = () => {
  return (
    <Box
      pt={{ base: "15vw", md: "30vw", lg: "10vh", xl: "15vh" }}
      pl={{ base: "", md: "", lg: "10vw", xl: "10vw" }}
      width={{ base: "100vw", md: "100vw", lg: "100vw", xl: "100vw" }}
      height={{ base: "60vh", md: "100vh", lg: "100%", xl: "70vh" }}
    >
      <Box>
        <Button>
          <IoChevronBackOutline fontSize="35px" />
        </Button>

        <Flex
          ml={{ base: "10vw", md: "8vw", lg: "12vw", xl: "11vw" }}
          alignItems="flex-start"
          flexDir="column"
          pb={16}
        >
          <Flex
            pl={{ base: "", md: "", lg: "10vw", xl: "12vw" }}
            flexDirection="column"
            alignItems="center"
            width={{ base: "80vw", md: "80vw", lg: "45vw", xl: "45vw" }}
          >
            <Text textAlign="center" fontSize="4xl" fontWeight="extrabold">
              Forgot Password?
            </Text>
            <Text textAlign="center">
              Dont worry we would send a recovery link back to your students
              e-mail to reset and get you back on track
            </Text>
          </Flex>
        </Flex>
        <ForgotPasswordForm />
      </Box>
    </Box>
  );
};

export default ForgotPassword;
