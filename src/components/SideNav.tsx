import React, { useState } from 'react'
import Main from './Main'
import {RiArrowDropDownLine} from 'react-icons/ri'
import Buttons from './Buttons'

type boolVal = {
    isOpen: boolean
}

const SideNav = ({isOpen}: boolVal) => {
    const [click, setClick] = useState(false)
    const [selected, setSelected] = useState("Main")
    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div className="flex flex-row">
            <div className={!isOpen ? `md:h-screen md:w-fit md:bg-slate-800 whitespace-nowrap` : `h-screen w-fit bg-slate-800 whitespace-nowrap`}>
                <div className={!isOpen ? 'hidden md:block text-white text-2xl px-4' : 'text-2xl text-white px-4'}>Design Elements</div>
                <Buttons isOpen={isOpen} />
            </div>
            <Main isOpen={isOpen} />
        </div>
    )
}

export default SideNav
