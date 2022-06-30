import React from 'react'
import buttonObj from '../buttonObj'
import ButtonOne from './ButtonOne'


type boolVal = {
    isOpen: boolean
}

const Main = ({isOpen}: boolVal) => {
    console.log(buttonObj.buttonOne.design)
    return (
        <>
            <div className="flex justify-center w-screen h-screen bg-slate-900">
                <ButtonOne/>

            </div>

        </>
    )
}

export default Main
