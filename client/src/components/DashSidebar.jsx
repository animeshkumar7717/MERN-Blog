import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiUser, HiDocumentText, HiOutlineUserGroup, HiAnnotation, HiChartPie } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutSuccess } from "../redux/user/UserSlice";

export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  const { currentUser } = useSelector(state=>state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

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

  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.ItemGroup className="flex flex-col gap-1">
        {currentUser && currentUser.isAdmin && (
          <Link to={"/dashboard?tab=dash"}>
          <Sidebar.Item
            active={tab === "dash" || !tab}
            icon={HiChartPie}
            as='span'
          >
           Dashboard
          </Sidebar.Item>
        </Link>
        )}
        <Link to={"/dashboard?tab=profile"}>
          <Sidebar.Item
            active={tab === "profile"}
            icon={HiUser}
            label= {currentUser.isAdmin ? 'Admin' : 'User'}
            labelColor="dark"
            as='span'
          >
           Profile
          </Sidebar.Item>
        </Link>
        {currentUser.isAdmin && ( 
          <>
            <Link to={"/dashboard?tab=post"}>
              <Sidebar.Item
                active={tab === "post"}
                icon={HiDocumentText}
                labelColor="dark"
                as='span'
              >
                Post
              </Sidebar.Item>
            </Link>
            <Link to={"/dashboard?tab=user"}>
              <Sidebar.Item
                active={tab === "user"}
                icon={HiOutlineUserGroup}
                labelColor="dark"
                as='span'
              >
              User
              </Sidebar.Item>
            </Link>
            <Link to={"/dashboard?tab=comments"}>
              <Sidebar.Item
                active={tab === "comments"}
                icon={HiAnnotation}
                labelColor="dark"
                as='span'
              >
              Comments
              </Sidebar.Item>
            </Link>
          </>  
        )}
        <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer" onClick={handleSignOut}>
          Sign Out
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar>
  );
}
