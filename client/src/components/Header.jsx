import React, { useEffect, useState } from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/ThemeSlice";
import { signOutSuccess } from "../redux/user/UserSlice";

export default function Header() {
    const path = useLocation().pathname
    const location = useLocation()
    const { currentUser } = useSelector(state=>state.user)
    const { theme } = useSelector(state=>state.theme)

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()    

    const dispatch = useDispatch()   
    
    useEffect(()=>{
      const urlParams = new URLSearchParams(location.search);
      const searchTermFromUrl = urlParams.get('searchTerm');

      if(searchTermFromUrl) {
        setSearchTerm(searchTermFromUrl)
      }

    }, [location.search])

    const handleSignOut = async() => {
      try {
        const res = await fetch('api/user/signout', {
          method: 'POST'
        })
        const data = await res.json();
        if(!res.ok) {
          console.log(data.message);
        } else {
          dispatch(signOutSuccess())
        }
      } catch (error) {
        console.log('error');
      }
    }

    const handleSubmit = async(e) => {
      e.preventDefault()
      const urlParams = new URLSearchParams(location.search)
      urlParams.set('searchTerm', searchTerm);
      const searchQuery = urlParams.toString();
      navigate(`/search?${searchQuery}`);
    }

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-xl lg:text-sm font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Animesh's
        </span>
        blog
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </form>
      <Button className="h-10 w-12 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill onClick={()=>dispatch(toggleTheme())}>
          {theme === 'light' ? <FaSun />: <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown 
            arrowIcon={false}
            inline
            label={
              <Avatar 
                alt="user"
                img={currentUser?.profilePicture}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>SignOut</Dropdown.Item>
            </Link>
          </Dropdown>
        ): (
        <Link to="/sign-up">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign Up
          </Button>
        </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as="span">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as="span">
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as="span">
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
