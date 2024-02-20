import {
  Navbar,
  TextInput,
  Button,
  NavbarToggle,
  Dropdown,
  Avatar,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="whitespace-nowrap self-center text-sm md:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-slate-500 via-slate-900 to-orange-500 text-white rounded-lg">
          Shahand's
        </span>{" "}
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden md:inline" color="gray" pill>
          <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user" img={currentUser.profilePicture} 
            rounded/>}
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentUser.username}</span>
              <span className="block font-medium truncate">{currentUser.email}</span>
            </Dropdown.Header>
            <Link to='/dashboard?tab=profile'>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider/>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}

        <NavbarToggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/project"} as={"div"}>
          <Link to="/project">Project</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
