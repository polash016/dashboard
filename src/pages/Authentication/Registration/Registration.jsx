import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SocialLogin from "../SocialLogin/SocialLogin";
import { PiChatsLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Registration = () => {
  // const [success, setSuccess] = useState("");
  // const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Flex
      className="w-full"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <PiChatsLight className="text-6xl" />
          <Heading fontSize={"2xl"}>Create New Account</Heading>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <Input type="email" placeholder="Email" />
            </FormControl>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Password"
              />
              <InputRightElement width="4.5rem">
                <button onClick={handleClick}>
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </button>
              </InputRightElement>
            </InputGroup>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Confirm password"
              />
              <InputRightElement width="4.5rem">
                <button onClick={handleClick}>
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </button>
              </InputRightElement>
            </InputGroup>
            <Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign Up
              </Button>
              <div>
                <span className="text-xs text-gray-600">
                  By Signing Up You Agree to our
                </span>
                <Link className="text-blue-600 text-xs">
                  {" "}
                  Terms & Condition
                </Link>
              </div>
            </Stack>
          </Stack>
        </Box>
        <SocialLogin route="/login" title="Log In" text="Already a Member?" />
      </Stack>
    </Flex>
  );
};

export default Registration;