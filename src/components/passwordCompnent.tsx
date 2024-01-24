import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import React from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
// @ts-ignore
function PasswordInput({ register }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        {...register("password")}
      />
      <InputRightElement width="4.5rem">
        <Button variant="unsyled" h="1.75rem" size="sm" onClick={handleClick}>
          {show ? <IoIosEyeOff /> : <IoIosEye />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
