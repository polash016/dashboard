import { ChatIcon } from "@chakra-ui/icons";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import { FaCrown } from "react-icons/fa";
import { useState } from "react";

const Layout = () => {
  const [activeLink, setActiveLink] = useState("search");
  return (
    <div className="flex h-full">
      <div className="w-60 md:w-48  border border-r-slate-400">
        <div className="flex justify-center h-10 mt-4 items-center">
          <ChatIcon color={"blue.400"} className="text-3xl" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col mt-8">
            <div
              onClick={() => setActiveLink("search")}
              className={`flex gap-2 items-center pl-6 py-2 text-gray-600 ${
                activeLink === "search" ? "bg-[#E6F4FF] border rounded-lg" : ""
              }`}
            >
              <AiOutlineSearch
                className={`${activeLink === "search" ? "text-[#4A96FF]" : ""}`}
              />
              <Link className="text-sm" to="/">
                Search
              </Link>
            </div>
            <div
              onClick={() => setActiveLink("reports")}
              className={`flex gap-2 items-center pl-6 py-2 text-gray-600 ${
                activeLink === "reports" ? "bg-[#E6F4FF] border rounded-lg" : ""
              }`}
            >
              <HiOutlineDocumentDuplicate
                className={`${
                  activeLink === "reports" ? "text-[#4A96FF]" : ""
                }`}
              />
              <Link className="text-sm" to="/report">
                My Reports
              </Link>
            </div>
            <div
              onClick={() => setActiveLink("account")}
              className={`flex gap-2 items-center pl-6 py-2 text-gray-600 ${
                activeLink === "account" ? "bg-[#E6F4FF] border rounded-lg" : ""
              }`}
            >
              <AiOutlineUser
                className={`${
                  activeLink === "account" ? "text-[#4A96FF]" : ""
                }`}
              />
              <Link className="text-sm" to="/account">
                Account
              </Link>
            </div>
            <div
              onClick={() => setActiveLink("support")}
              className={`flex gap-2 items-center pl-6 py-2 text-gray-600 ${
                activeLink === "support" ? "bg-[#E6F4FF] border rounded-lg" : ""
              }`}
            >
              <HiOutlineChatBubbleLeftRight
                className={`${
                  activeLink === "support" ? "text-[#4A96FF]" : ""
                }`}
              />
              <Link className="text-sm" to="/support">
                Support
              </Link>
            </div>
            <div
              onClick={() => setActiveLink("template")}
              className={`flex gap-2 items-center pl-6 py-2 text-gray-600 ${
                activeLink === "template"
                  ? "bg-[#E6F4FF] border rounded-lg"
                  : ""
              }`}
            >
              <FaCrown className="text-amber-500" />
              <Link className="text-sm" to="/support">
                Template
              </Link>
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
