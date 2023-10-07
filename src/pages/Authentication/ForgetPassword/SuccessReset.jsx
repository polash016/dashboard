import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { PiChatsLight } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

const SuccessReset = () => {
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
          <Heading fontSize={"2xl"}>Password Changed</Heading>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} p={8}>
          <Stack spacing={4}>
            <button className="mx-auto border border-sky-500 rounded-full">
              <TiTick className="text-6xl text-sky-500" />
            </button>
            <Text className="text-center font-light">
              Your password has been changed successfully
            </Text>

            <Stack>
              <Button
                mt="10"
                bg={"#443DF6"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                <Link to="/login">Log In</Link>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SuccessReset;
