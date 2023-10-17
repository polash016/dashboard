import {
  Box,
  Flex,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import useAuth from "../../hooks/useAuth";
import { PiUserCirclePlus } from "react-icons/pi";
import Login from "../../pages/Authentication/Login/Login";

const NavBar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="border border-b-gray-400">
      <Box bg="white" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {user ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <PiUserCirclePlus />
                  <span>{user.email}</span>
                  <ArrowDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem>View Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>LogOut</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <div className="flex items-center gap-1 border border-gray-400 rounded-lg px-4 py-0.5 font-semibold text-sm">
                <PiUserCirclePlus className="text-xl" />
                <Login />
              </div>
            )}
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default NavBar;
