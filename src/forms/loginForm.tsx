import { z } from "zod";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text, Box, Flex, Input, Button } from "@chakra-ui/react";
// import RegToast from "./RegToast";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .refine((value) => value.endsWith(".edu.ng"), {
      message: "Only students are allowed. Use your .edu.ng email to Log in",
    }),

  password: z
    .string()
    .min(8, { message: "Too Short, 8 Minimum" })
    .regex(/[A-Z]+/, { message: "Capital character missing" })
    .regex(/[a-z]+/, { message: "Lowercase character missing" })
    .regex(/[0-9]+/, { message: "Number character missing" })
    .regex(/[@#$%^&*()_+\-=\/~]+/, { message: "Special character missing" }),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    setValue,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log("good to see you work");
    console.log(data);
  };

  return (
    <Box
      pl="10vw"
      pr="10vw"
      width={{ base: "100vw", md: "100vw", lg: "70vw", xl: "65vw" }}
      height={{ base: "80vh", md: "80vh", lg: "100vh", xl: "70vh" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex fontFamily="MGThin" flexDirection="column" gap={3} p="10px">
          <Input
            background="rgba(255, 119, 0, 0.12)"
            h={16}
            border="none"
            borderRadius="8px"
            focusBorderColor="rgba(255, 119, 0, 0.5 )"
            mb={4}
            pl="35px"
            {...register("email")}
            type="email"
            placeholder=" Student Email Address"
          />
          {errors.email && (
            <Text textAlign="center" fontSize="sm" color="red.400">
              {errors.email.message}
            </Text>
          )}

          <Input
            fontFamily="MGThin"
            background="rgba(255, 119, 0, 0.12)"
            h={16}
            border="none"
            borderRadius="8px"
            focusBorderColor="rgba(255, 119, 0, 0.5 )"
            mb={4}
            pl="35px"
            {...register("password")}
            type="password"
            placeholder="Password:"
          />
          {errors.password && (
            <Text textAlign="center" fontSize="sm" color="red.400">
              {errors.password.message}
            </Text>
          )}
          <Button
            ml={{ base: "28vw", md: "55vw", lg: "31vw", xl: "30vw" }}
            variant="unstyled"
            width="200px"
          >
            <Text alignItems="end">Forgot Password?</Text>
          </Button>
          <Flex
            flexDirection={{
              base: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            gap={{
              base: "2em",
              md: "4em",
              lg: "4em",
              xl: "3em",
            }}
            alignItems="center"
          >
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
              fontFamily="MGRegular"
              _hover={{
                transform: "translateY(3px)",
                boxShadow: "none",
              }}
              _active={{
                opacity: 0.5,
              }}
            >
              <Text fontSize="15px" fontFamily="MGThin">
                Login
              </Text>
            </Button>
          </Flex>
          {/* {isSubmitSuccessful && <RegToast />} */}
        </Flex>
      </form>
    </Box>
  );
};

export default LoginForm;
