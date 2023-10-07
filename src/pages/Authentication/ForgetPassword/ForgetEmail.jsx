import {
  Flex,
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { PiChatsLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const ForgetEmail = () => {
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
          <Heading fontSize={"2xl"}>Forget Password?</Heading>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} p={8}>
          <Stack spacing={4}>
            <Text className="text-center font-light">
              Enter your email So We could send you reset password instructions.
            </Text>
            <FormControl id="email">
              <Input type="email" placeholder="Email" />
            </FormControl>

            <Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                <Link to="/reset">Next</Link>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ForgetEmail;
