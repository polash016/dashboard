/* eslint-disable react/prop-types */
import { AbsoluteCenter, Box, Button, Divider } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLogin = ({ route, title, text }) => {
  return (
    <>
      <Box position="relative" padding="2">
        <Divider />
        <AbsoluteCenter color="gray.500" bg="white" px="4">
          or continue with
        </AbsoluteCenter>
      </Box>
      <div className="flex gap-2 justify-center items-center">
        <Button colorScheme="gray" variant="outline">
          <FcGoogle className="text-2xl" />
        </Button>
        <Button colorScheme="gray" variant="outline">
          <FaApple className="text-2xl" />
        </Button>
      </div>
      <div className="text-center text-blue-600">
        <span className="text-gray-500">{text}</span>
        <Link to={route}>{title}</Link>
      </div>
    </>
  );
};

export default SocialLogin;
