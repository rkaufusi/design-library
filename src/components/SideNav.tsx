import React, { useState } from 'react'
import Main from './Main'
import {RiArrowDropDownLine} from 'react-icons/ri'

type boolVal = {
    isOpen: boolean
}

const SideNav = ({isOpen}: boolVal) => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div className="flex flex-row">
            <div className={!isOpen ? `md:h-screen md:w-fit md:bg-slate-800 whitespace-nowrap` : `h-screen w-fit bg-slate-800 whitespace-nowrap`}>
                <div className={!isOpen ? 'hidden md:block text-white text-2xl px-4' : 'text-2xl text-white px-4'}>Design Elements</div>
                <div onClick={() => handleClick()} className="flex flex-row items-center hover:cursor-pointer">
                    <div className={!isOpen ? 'hidden md:block text-white text-1xl px-4' : 'text-1xl text-white px-4'}>
                        Buttons 
                    </div>
                    <div onClick={() => handleClick()} className={click ? "rotate-180 transition duration-200 ease-in-out" : "transition duration-200 ease-in-out"}>
                        <RiArrowDropDownLine className={!isOpen ? "hidden md:block text-3xl text-white" : "text-3xl text-white"}/>
                    </div>

                </div>
                    <div className={isOpen ? "" : "hidden md:block"}>
                        <ul className={click ?  "text-white pl-6" : "hidden"}>
                            <li>button one</li>
                            <li>button two</li>
                            <li>button 5555</li>
                        </ul>

                </div>
            </div>
            <Main isOpen={isOpen}/>
        </div>
    )
}

export default SideNav
