import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";

const Support = () => {
  return (
    <div>
      <Flex
        className="lg:h-[700px]"
        align={"center"}
        justify={"center"}
        shadow={"lg"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack mx={"auto"} maxW={"lg"}>
          <Stack>
            <Heading fontSize={"xl"}>Support Section</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack className=" lg:w-[440px] w-full" spacing={4}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <InputGroup>
                  <Input
                    defaultValue={"JQUill"}
                    background={"gray.100"}
                    type="text"
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <InputGroup>
                  <Input
                    defaultValue={"JQuillk@gmail.com"}
                    background={"gray.100"}
                    type="email"
                  />
                  <InputLeftElement>
                    <CiMail />
                  </InputLeftElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Subject</FormLabel>
                <InputGroup>
                  <Input
                    defaultValue={"JQUill"}
                    background={"gray.100"}
                    type="text"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <InputGroup>
                  <Textarea
                    pt={"4"}
                    defaultValue={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in incidunt iure est fugit. Totam, labore consequatur iure harum laudantium quas veniam dolorem dolores itaque, reprehenderit nostrum ex ipsum error."
                    }
                    rows={7}
                    background={"gray.100"}
                    type="text"
                    pl={"10"}
                  />
                </InputGroup>
              </FormControl>
              <div className="flex gap-2 justify-end">
                <Button
                  loadingText="Submitting"
                  size="sm"
                  variant="outline"
                  color={"dark"}
                >
                  Cancel
                </Button>
                <Button
                  loadingText="Submitting"
                  size="sm"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Save
                </Button>
              </div>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Support;
