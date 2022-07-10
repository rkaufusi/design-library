import React, {useState, useContext} from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
import { ComponentContext } from '../App'
import {ButtonTwo2, ComponentObj} from '../componentObj'




type boolVal = {
    isOpen: boolean
}

const Buttons = ({isOpen}: boolVal) => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }

    const [context, setContext] = useContext(ComponentContext);

    const handleSelection = (name: any) => {
        setContext(name)
    }
    return (
        <div>
            <div onClick={() => handleClick()} className="flex flex-row items-center hover:rounded-md hover:cursor-pointer hover:bg-slate-700">
                <div className={!isOpen ? 'hidden md:block text-white text-1xl mx-2 px-2' : 'text-1xl text-white mx-2 px-2'}>
                    Buttons 
                </div>
                <div onClick={() => handleClick()} className={click ? "rotate-180 transition duration-200 ease-in-out" : "transition duration-200 ease-in-out"}>
                    <RiArrowDropDownLine className={!isOpen ? "hidden md:block text-3xl text-white" : "text-3xl text-white"}/>
                </div>

            </div>
            <div className={isOpen ? "" : "hidden md:block"}>
                <ul className={click ?  "text-white mx-2" : "hidden"}>
                    <li onClick={() => handleSelection(ComponentObj)} className="hover:bg-slate-700 hover:cursor-pointer hover:rounded-md px-4">button one</li>
                    <li onClick={() => handleSelection(ButtonTwo2)} className="hover:bg-slate-700 hover:cursor-pointer hover:rounded-md px-4">button two</li>
                    <li onClick={() => handleSelection('buttonThree')} className="hover:bg-slate-700 hover:cursor-pointer hover:rounded-md px-4">button three</li>
                </ul>
            </div>
        </div>
    )
}

export default Buttons
