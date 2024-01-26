import { z } from "zod";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Text,
  Box,
  Flex,
  Input,
  Button,
  ButtonGroup,
  Radio,
  RadioGroup,
  Stack,
  Select,
  HStack,
} from "@chakra-ui/react";
// import RegToast from "./RegToast";
import UniversityList from "../react-query/UniversityList";
import { useState } from "react";

const schema = z.object({
  name: z
    .string({ invalid_type_error: "Please enter your name" })
    .min(2, { message: "Your name is too short" }),
  // age: z
  //   .number({ invalid_type_error: "WELP, Age??" })
  //   .min(18, { message: "NO MINORS ALLOWED" }),
  age: z
    .string()
    .refine((value) => ["below18", "18to25", "above25"].includes(value), {
      message: "Invalid age range",
    }),
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .refine((value) => value.endsWith(".edu.ng"), {
      message: "Only students are allowed. Use your .edu.ng email to register",
    }),
  university: z.string().refine((value) => !!value, {
    message: "Please select a university",
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

const RegForm = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    setValue,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    // Retrieve the selected university from the form state
    const university = data.university;

    console.log("good to see you work");
    console.log(data);
  };
  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
  };

  return (
    <Box
      pl="10vw"
      pr="10vw"
      width={{ base: "100vw", md: "100vw", lg: "70vw", xl: "65vw" }}
      height={{ base: "80vh", md: "80vh", lg: "100vh", xl: "70vh" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection="column" gap={3} p="10px">
          <Input
            background="rgba(255, 119, 0, 0.12)"
            h={16}
            border="none"
            borderRadius="8px"
            focusBorderColor="rgba(255, 119, 0, 0.5 )"
            mb={4}
            pl="35px"
            {...register("name")}
            type="text"
            placeholder="Full Name"
          />
          {errors.name && (
            <Text textAlign="center" fontSize="sm" color="red.400">
              {errors.name.message}
            </Text>
          )}

          <UniversityList
            onLocationChange={handleLocationChange}
            onUniversityChange={(value) => setValue("university", value)}
          />
          <Text textAlign="center" fontSize="sm" color="red.400">
            {errors.university?.message}
          </Text>
          {/* <Input
            {...register("age", { valueAsNumber: true })}
            type="number"
            placeholder="Enter your age"
          />
          {errors.age && (
            <Text fontFamily="Cordana" fontSize="sm" color="red.400">
              {errors.age.message}
            </Text>
          )} */}

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
          <HStack>
            <Text
              fontSize={{
                base: "12px",
                md: "17px",
                lg: "22px",
                xl: "22px",
              }}
              pl={{ base: "20px", md: "30px", lg: "4em", xl: "3em" }}
              fontWeight={"bold"}
            >
              Age:
            </Text>
            <RadioGroup
              colorScheme="orange"
              alignItems={{
                base: "center",
                md: "normal",
                lg: "normal",
                xl: "normal",
              }}
              defaultValue=""
              onChange={(value) => setValue("age", value)}
            >
              <Stack spacing={4} direction="row">
                <Radio value="below18">
                  <Text
                    fontSize={{
                      base: "10px",
                      md: "15px",
                      lg: "20px",
                      xl: "20px",
                    }}
                  >
                    Below 18
                  </Text>
                </Radio>
                <Radio value="18to25">
                  {" "}
                  <Text
                    fontSize={{
                      base: "10px",
                      md: "15px",
                      lg: "20px",
                      xl: "20px",
                    }}
                  >
                    18-25
                  </Text>
                </Radio>
                <Radio value="above25">
                  {" "}
                  <Text
                    fontSize={{
                      base: "10px",
                      md: "15px",
                      lg: "20px",
                      xl: "20px",
                    }}
                  >
                    Above 25
                  </Text>
                </Radio>
                {/* <Text textAlign="center" fontSize="sm" color="red.400">
                  {errors.age?.message}
                </Text> */}
              </Stack>
            </RadioGroup>
          </HStack>
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
            placeholder="Password:"
          />
          {errors.password && (
            <Text textAlign="center" fontSize="sm" color="red.400">
              {errors.password.message}
            </Text>
          )}

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
              fontFamily="'Mena Grotesk', sans-serif"
              _hover={{
                transform: "translateY(3px)",
                boxShadow: "none",
              }}
              _active={{
                opacity: 0.5,
              }}
            >
              <Text fontSize="15px">Sign Up</Text>
            </Button>
            <HStack
              gap={{
                base: "5px",
                md: "1em",
                lg: "10px",
                xl: "10px",
              }}
            >
              <Text
                fontSize={{
                  base: "15px",
                  md: "20px",
                  lg: "18px",
                  xl: "18px",
                }}
                fontWeight="bold"
              >
                Already have an account?
              </Text>
              <Button
                fontSize="18px"
                fontWeight="bold"
                color="#ff7700"
                variant="unstyled"
              >
                Login
              </Button>
            </HStack>
          </Flex>
          {/* {isSubmitSuccessful && <RegToast />} */}
        </Flex>
      </form>
    </Box>
  );
};

export default RegForm;
