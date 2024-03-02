import { Box, HStack, Text, Image, Flex, Button } from "@chakra-ui/react";
import { IoChevronBackOutline } from "react-icons/io5";

import ResetPasswordForm from "../forms/resetPasswordForm";

const ResetPassword = () => {
  return (
    <Box
      fontFamily="MGLight"
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
              Enter New Password
            </Text>
            <Text textAlign="center">
              Update your Password, Don't forget it this time, but just incase
              you do;{" "}
              <Text fontStyle="italic" color="#ff7700">
                Just Reset!
              </Text>
            </Text>
          </Flex>
        </Flex>
        <ResetPasswordForm />
      </Box>
    </Box>
  );
};

export default ResetPassword;
