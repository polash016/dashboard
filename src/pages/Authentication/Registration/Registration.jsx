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
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SocialLogin from "../SocialLogin/SocialLogin";
import { PiChatsLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Registration = () => {
  // const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { createUser } = useAuth();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.confirmPass.value;
    console.log(email, password, confirmPass);
    if (password !== confirmPass) {
      setError("Password and Confirm Password do not match");
      return;
    }
    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate("/");
      setError("");
    });
  };
  return (
    <div>
      <button onClick={onOpen}>Create An Account</button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleRegistration}>
              <Flex
                w="full"
                className="w-full"
                align={"center"}
                justify={"center"}
              >
                <Stack spacing={4} mx={"auto"} w="full" py={2}>
                  <Stack align={"center"}>
                    <PiChatsLight className="text-4xl" />
                    <Heading fontSize={"xl"}>Create New Account</Heading>
                  </Stack>
                  <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    p={8}
                  >
                    <Stack spacing={4}>
                      <FormControl id="email">
                        <Input
                          size="sm"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                      </FormControl>
                      {error && (
                        <p className="text-xs text-orange-600">{error}</p>
                      )}
                      <InputGroup size="sm">
                        <Input
                          pr="4.5rem"
                          name="password"
                          type={show ? "text" : "password"}
                          placeholder="Password"
                        />
                        <InputRightElement width="4.5rem">
                          <button onClick={handleClick}>
                            {show ? <ViewOffIcon /> : <ViewIcon />}
                          </button>
                        </InputRightElement>
                      </InputGroup>
                      <InputGroup size="sm">
                        <Input
                          name="confirmPass"
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
                          type="submit"
                          bg={"#1A2A83"}
                          color={"white"}
                          _hover={{
                            bg: "#7F77D4",
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
                  <SocialLogin route="login" />
                </Stack>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Registration;
