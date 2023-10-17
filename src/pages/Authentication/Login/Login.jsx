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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SocialLogin from "../SocialLogin/SocialLogin";
import { PiChatsLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  // const [success, setSuccess] = useState("");
  // const [error, setError] = useState("");
  const { signIn } = useAuth();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate("/");
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <button onClick={onOpen}>Login</button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <ModalOverlay />
        <ModalContent w="sm">
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleLogin}>
              <Flex className="w-full" align={"center"} justify={"center"}>
                <Stack spacing={8} mx={"auto"} w="full" py={2}>
                  <Stack align={"center"}>
                    <PiChatsLight className="text-4xl" />
                    <Heading fontSize={"xl"}>Log In</Heading>
                  </Stack>
                  <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    py={4}
                  >
                    <Stack spacing={4}>
                      <FormControl id="email">
                        <Input
                          size="sm"
                          name="email"
                          type="email"
                          placeholder="Email"
                        />
                      </FormControl>
                      <InputGroup size="sm">
                        <Input
                          name="password"
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
                      <Stack>
                        <Button
                          type="submit"
                          bg={"#1A2A83"}
                          color={"white"}
                          _hover={{
                            bg: "#7F77D4",
                          }}
                        >
                          Sign in
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                  <SocialLogin
                    route="/register"
                    title="Create new Account"
                    text=""
                  />
                </Stack>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Login;
