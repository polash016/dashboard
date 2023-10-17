/* eslint-disable react/prop-types */
import { AbsoluteCenter, Box, Button, Divider } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";

const SocialLogin = ({ route }) => {
  const navigate = useNavigate();
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result);
      navigate("/");
    });
  };
  return (
    <>
      <Box position="relative">
        <Divider />
        <AbsoluteCenter color="gray.500" bg="white" px="4">
          or continue with
        </AbsoluteCenter>
      </Box>
      <div className="flex gap-2 justify-center items-center">
        <Button
          onClick={handleGoogleLogin}
          colorScheme="gray"
          variant="outline"
        >
          <FcGoogle className="text-2xl" />
        </Button>
        <Button colorScheme="gray" variant="outline">
          <FaApple className="text-2xl" />
        </Button>
      </div>
      <div className="text-center text-blue-600">
        {route == "register" ? (
          <Registration />
        ) : (
          <Login text="Already a Member? " />
        )}
      </div>
    </>
  );
};

export default SocialLogin;
