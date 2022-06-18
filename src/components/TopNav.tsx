import React, {useState} from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import SideNav from './SideNav'


const TopNav = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)
    return (
        <>
            <div className="w-full h-14 bg-cyan-900 flex items-center justify-between">
                <GiHamburgerMenu className="text-white h-14 w-7 ml-4 md:hidden" onClick={() => handleClick()}/>
                <h1 className="ml-4 text-3xl text-white">My Design Library</h1>
                <AiFillGithub className="text-white h-20 w-10 mr-2"/>    
            </div>
            <SideNav isOpen={open}/>
        </>
    )
}

export default TopNav
