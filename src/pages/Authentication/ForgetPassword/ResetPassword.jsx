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
import { useState } from "react";
import { PiChatsLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const ResetPassword = () => {
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
          <Heading fontSize={"2xl"}>Reset Password?</Heading>
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
                mt="10"
                bg={"#443DF6"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                <Link to="/success">Reset Password</Link>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ResetPassword;
