import {
  Box,
  Flex,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut();
  };
  return (
    <div>
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
            <Menu>
              <div className="flex gap-3 justify-center items-center">
                <button className="bg-gray-300 border rounded-full px-2 py-1 text-xs h-8">
                  AB
                </button>
                <div>
                  <h4 className="text-sm">Name</h4>
                  <p className="text-xs text-gray-500">email@gmail.com</p>
                </div>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <ArrowDownIcon />
                </MenuButton>
              </div>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>
                  {user ? (
                    <Link onClick={handleLogout}>Log Out</Link>
                  ) : (
                    <Link to="/login">Log In</Link>
                  )}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default NavBar;
