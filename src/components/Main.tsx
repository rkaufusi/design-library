import React from 'react'
import ButtonOne from './ButtonOne'


type boolVal = {
    isOpen: boolean,
    component: React.ReactNode | React.ReactNode[]
}

const Main = ({isOpen, component}: boolVal) => {
    return (
        <>
            <div className="flex justify-center w-screen h-screen bg-slate-900">
                {component}
            </div>

        </>
    )
}

export default Main
