import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";

const AccountDetails = () => {
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
            <Heading fontSize={"xl"}>Account Details</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName">
                    <FormLabel>Full Name</FormLabel>
                    <InputGroup>
                      <Input
                        defaultValue={"James Quill"}
                        background={"gray.100"}
                        type="text"
                      />
                      <InputLeftElement>
                        <AiOutlineUser />
                      </InputLeftElement>
                    </InputGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      defaultValue={"+123 123 1234"}
                      background={"gray.100"}
                      type="text"
                    />
                  </FormControl>
                </Box>
              </HStack>
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
                <FormLabel>Username</FormLabel>
                <InputGroup>
                  <Input
                    defaultValue={"JQUill"}
                    background={"gray.100"}
                    type="text"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Bio</FormLabel>
                <InputGroup>
                  <Textarea
                    defaultValue={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in incidunt iure est fugit. Totam, labore consequatur iure harum laudantium quas veniam dolorem dolores itaque, reprehenderit nostrum ex ipsum error."
                    }
                    rows={7}
                    background={"gray.100"}
                    type="text"
                    pl={"10"}
                  />
                  <InputLeftElement>
                    <FiEdit />
                  </InputLeftElement>
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

export default AccountDetails;
