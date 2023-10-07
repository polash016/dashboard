import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  Input,
  Checkbox,
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

const Login = () => {
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
          <Heading fontSize={"2xl"}>Log In</Heading>
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
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <button onClick={handleClick}>
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </button>
              </InputRightElement>
            </InputGroup>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link to="/forget" className="text-blue-600">
                  Forget Password
                </Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
        <SocialLogin route="/register" title="Create new Account" text="" />
      </Stack>
    </Flex>
  );
};

export default Login;
