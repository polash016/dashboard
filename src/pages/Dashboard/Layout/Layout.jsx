import { ChatIcon } from "@chakra-ui/icons";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";

const Layout = () => {
  return (
    <div className="flex">
      <div className="w-60 md:w-48 h-full">
        <div className="flex justify-center h-10 mt-4 items-center">
          <ChatIcon color={"blue.400"} className="text-3xl" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col space-y-4 ml-4 mt-8">
            <div className="flex gap-2 items-center text-gray-600">
              <AiOutlineSearch /> <Link to="/">Search</Link>
            </div>
            <div className="flex gap-2 items-center text-gray-600">
              <HiOutlineDocumentDuplicate />
              <Link to="/report">My Reports</Link>
            </div>
            <div className="flex gap-2 items-center text-gray-600">
              <AiOutlineUser /> <Link to="/account">Account</Link>
            </div>
            <div className="flex gap-2 items-center text-gray-600">
              <HiOutlineChatBubbleLeftRight />
              <Link to="/support">Support</Link>
            </div>
          </div>
          <div className="flex flex-col mb-auto justify-end space-y-3 ml-4 mt-20 lg:mt-60">
            <div className="flex gap-2 items-center text-gray-600">
              <AiOutlineUser /> <Link to="/account">Account</Link>
            </div>
            <div className="flex gap-2 items-center text-gray-600">
              <MdOutlineSupportAgent /> <Link to="/">Help</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F4F9] flex-grow w-full h-screen my-auto">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
