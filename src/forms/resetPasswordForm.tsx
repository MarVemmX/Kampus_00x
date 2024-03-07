import { z } from "zod";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text, Box, Flex, Input, Button } from "@chakra-ui/react";
// import RegToast from "./RegToast";

const schema = z.object({
  password: z
    .string()
    .min(8, { message: "Too Short, 8 Minimum" })
    .regex(/[A-Z]+/, { message: "Capital character missing" })
    .regex(/[a-z]+/, { message: "Lowercase character missing" })
    .regex(/[0-9]+/, { message: "Number character missing" })
    .regex(/[@#$%^&*()_+\-=\/~]+/, { message: "Special character missing" }),
});

type FormData = z.infer<typeof schema>;

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    setValue,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Box
      pl="10vw"
      pr="10vw"
      width={{ base: "100vw", md: "100vw", lg: "80vw", xl: "80vw" }}
      height={{ base: "80vh", md: "80vh", lg: "100vh", xl: "70vh" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex alignItems="center" flexDirection="column" gap={3} p="10px">
          <Input
            background="rgba(255, 119, 0, 0.12)"
            h={16}
            border="none"
            borderRadius="8px"
            focusBorderColor="rgba(255, 119, 0, 0.5 )"
            mb={4}
            pl="35px"
            {...register("password")}
            type="password"
            placeholder="New Password:"
          />
          {errors.password && (
            <Text textAlign="center" fontSize="sm" color="red.400">
              {errors.password.message}
            </Text>
          )}

          <Button
            type="submit"
            width="225px"
            height="64px"
            borderRadius="50px"
            background="#ff7700"
            boxShadow="0 20px 30px -6px rgba(255, 119, 0, 0.5)"
            outline="none"
            cursor="pointer"
            border="none"
            fontSize="24px"
            color="white"
            transition="all 0.3s ease-in-out"
            fontFamily="'Mena Grotesk', sans-serif"
            _hover={{
              transform: "translateY(3px)",
              boxShadow: "none",
            }}
            _active={{
              opacity: 0.5,
            }}
          >
            <Text fontSize="15px" fontFamily="MGThin">
              Reset Password
            </Text>
          </Button>

          {/* {isSubmitSuccessful && <RegToast />} */}
        </Flex>
      </form>
    </Box>
  );
};

export default ResetPasswordForm;
