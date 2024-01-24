// import { z } from "zod";
// import { useForm, FieldValues } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useRef } from "react";
// import {
//   Text,
//   Box,
//   Flex,
//   Input,
//   Button,
//   ButtonGroup,
//   HStack,
//   Radio,
//   RadioGroup,
//   Stack,
//   background,
//   InputGroup,
//   InputRightElement,
// } from "@chakra-ui/react";
// // import RegToast from "./RegToast";
// import UniversityList from "../react-query/UniversityList";
// import { useState } from "react";
// import PasswordInput from "../components/passwordCompnent";

// const schema = z.object({
//   name: z
//     .string({ invalid_type_error: "Please enter your name" })
//     .min(2, { message: "Your name is too short" }),
//   age: z
//     .string({ invalid_type_error: "WELP, Age??" })
//     .min(18, { message: "NO MINORS ALLOWED" }),
//   email: z
//     .string()
//     .email({ message: "Invalid email format" })
//     .refine((value) => value.endsWith(".edu.ng"), {
//       message: "Only students are allowed. Use your .edu.ng email to register",
//     }),
//   password: z
//     .string()
//     .min(8, { message: "Too Short, 8 Minimum" })
//     .regex(/[A-Z]+/, { message: "Capital character missing" })
//     .regex(/[a-z]+/, { message: "Lowercase character missing" })
//     .regex(/[0-9]+/, { message: "Number missing" })
//     .regex(/[@#$%^&*()_+\-=\/~]+/, { message: "Special character missing" }),
// });
// type FormData = z.infer<typeof schema>;

// const RegisterForm = () => {
//   const formRef = useRef();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitSuccessful },
//   } = useForm<FormData>({ resolver: zodResolver(schema) });
//   const onSubmit = (data: FieldValues) => {
//     console.log("good to see you work");
//     console.log(data);
//   };
//   return (
//     <Box>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Flex align="center" flexDirection="column" gap={3} p="10px">
//           <Input
//             background="rgba(255, 119, 0, 0.3)"
//             h={12}
//             border="1px solid rgba(255, 119, 0, 0.2)"
//             focusBorderColor="rgba(255, 119, 0, 0.5 )"
//             {...register("name")}
//             type="text"
//             placeholder="Full Name:"
//           />
//           {errors.name && (
//             <Text fontSize="sm" color="red.400">
//               {errors.name.message}
//             </Text>
//           )}
//           <Input
//             background="rgba(255, 119, 0, 0.3)"
//             h={12}
//             border="1px solid rgba(255, 119, 0, 0.2)"
//             focusBorderColor="rgba(255, 119, 0, 0.5 )"
//             {...register("email")}
//             type="email"
//             placeholder=" Students E-mail:"
//           />
//           {errors.email && (
//             <Text fontSize="sm" color="red.400">
//               {errors.email.message}
//             </Text>
//           )}
//           {/* <UniversityList /> */}
//           {/* <HStack>
//             <Text>Age:</Text>
//             <RadioGroup
//               colorScheme="orange"
//               defaultValue="1"
//               {...register("age")}
//             >
//               <Radio value="1">Below 18</Radio>
//               <Radio value="2">18-25</Radio>
//               <Radio value="3">Above 25</Radio>
//             </RadioGroup>
//           </HStack> */}
//           {/* <PasswordInput register={register} /> */}
//           <Input
//             {...register("password")}
//             type="password"
//             placeholder="Password Should be something you'd remember"
//             background="rgba(255, 119, 0, 0.3)"
//             h={12}
//             border="1px solid rgba(255, 119, 0, 0.2)"
//             focusBorderColor="rgba(255, 119, 0, 0.5 )"
//           />
//           {errors.password && (
//             <Text textAlign="center" ml={2} fontSize="sm" color="red.400">
//               {errors.password.message}
//             </Text>
//           )}
//           <HStack>
//             <Box
//               type="submit"
//               as="button"
//               width="180px"
//               height="50px"
//               borderRadius="50px"
//               background="#ff7700"
//               boxShadow="0 20px 30px -6px rgba(255, 119, 0, 0.5)"
//               outline="none"
//               cursor="pointer"
//               border="none"
//               fontSize="24px"
//               color="white"
//               transition="all 0.3s ease-in-out"
//               fontFamily="'Mena Grotesk', sans-serif"
//               _hover={{
//                 transform: "translateY(3px)",
//                 boxShadow: "none",
//               }}
//               _active={{
//                 opacity: 0.5,
//               }}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleSubmit(onSubmit)();
//               }}
//             >
//               <Text fontSize="12px">Sign Up</Text>
//             </Box>
//             {/* <button
//               type="submit"
//               // onClick={onSubmit}
//               style={{
//                 color: "white",
//                 padding: "10px 20px",
//                 background: "slateblue",
//                 borderRadius: "5px",
//               }}
//             >
//               Sign Up
//             </button> */}
//             <HStack>
//               <Text>Already Have an account? </Text>
//               <Button variant="unstyled" color="#ff7700">
//                 Login
//               </Button>
//             </HStack>
//           </HStack>
//           {/* {isSubmitSuccessful && <RegToast />} */}
//         </Flex>
//       </form>
//     </Box>
//   );
// };

// export default RegisterForm;

// RegForm.tsx
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
    <Box>
      <Text textTransform="uppercase" fontWeight="bold" textAlign="center">
        {" "}
        Sign Up{" "}
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex align="center" flexDirection="column" gap={3} p="10px">
          <Input
            background="rgba(255, 119, 0, 0.15)"
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
            <Text fontSize="sm" color="red.400">
              {errors.name.message}
            </Text>
          )}

          <UniversityList
            onLocationChange={handleLocationChange}
            onUniversityChange={(value) => setValue("university", value)}
          />
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
            background="rgba(255, 119, 0, 0.15)"
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
            <Text fontFamily="Cordana" fontSize="sm" color="red.400">
              {errors.email.message}
            </Text>
          )}
          <HStack>
            <Text>Age:</Text>
            <RadioGroup
              colorScheme="orange"
              defaultValue=""
              onChange={(value) => setValue("age", value)}
            >
              <Stack spacing={4} direction="row">
                <Radio value="below18">Below 18</Radio>
                <Radio value="18to25">18-25</Radio>
                <Radio value="above25">Above 25</Radio>
              </Stack>
            </RadioGroup>
            <Text>{errors.age?.message}</Text>
          </HStack>
          <Input
            background="rgba(255, 119, 0, 0.15)"
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

          <Text>{errors.university?.message}</Text>

          <HStack gap="3em">
            <Button
              type="submit"
              width="220px"
              height="60px"
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
            <HStack>
              <Text fontSize="20px" fontWeight="bold">
                Already have an account?
              </Text>
              <Button
                fontSize="20px"
                fontWeight="bold"
                color="#ff7700"
                variant="unstyled"
              >
                Login
              </Button>
            </HStack>
          </HStack>
          {/* {isSubmitSuccessful && <RegToast />} */}
        </Flex>
      </form>
    </Box>
  );
};

export default RegForm;
