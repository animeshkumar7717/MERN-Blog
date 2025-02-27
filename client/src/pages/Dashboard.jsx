import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar'
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';
import DashUser from '../components/DashUser';
import DashComments from '../components/DashComment';
import DashbordComp from '../components/Dashbordcomp';


const Dashboard = () => {
  const location = useLocation();
  const [tab,setTab] = useState('');
  
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl) {
      setTab(tabFromUrl)
    }
  }, [location.search])

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* sidebar */}
        <DashSidebar />
      </div>
        {/* profile */}
        {tab === 'profile' && <DashProfile />}
        {/* post  */}
        {tab === 'post' && <DashPosts />}
        {/* user  */}
        {tab === 'user' && <DashUser />}
        {/* comments  */}
        {tab === 'comments' && <DashComments />}
        {/* dashboard comp  */}
        {tab === 'dash' && <DashbordComp />}
    </div>
  )
}

export default Dashboard
