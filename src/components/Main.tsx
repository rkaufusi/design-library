import React from 'react'

type boolVal = {
    isOpen: boolean
}

const Main = ({isOpen}: boolVal) => {
    console.log(isOpen)
    return (
            <div className="flex justify-center w-screen h-screen bg-slate-900">
                <h1 className="text-white text-4xl">Main</h1>
            </div>
    )
}

export default Main
