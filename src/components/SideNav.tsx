import React from 'react'

type boolVal = {
    isOpen: boolean
}

const SideNav = ({isOpen}: boolVal) => {

    return (
        <div className={!isOpen ? `md:h-screen md:w-fit md:bg-slate-700` : `h-screen w-fit bg-slate-700`}>
            <div className={!isOpen ? 'hidden md:block' : 'text-xl'}>SideNav</div>
        </div>
    )
}

export default SideNav
