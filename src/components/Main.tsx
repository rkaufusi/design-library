import React from 'react'
import buttonObj from '../buttonObj'

type boolVal = {
    isOpen: boolean
}

const Main = ({isOpen}: boolVal) => {
    console.log(buttonObj.buttonOne.design)
    return (
        <>
            <div className="flex justify-center w-screen h-screen bg-slate-900">
                <div className="flex flex-col w-auto h-auto justify-around items-center">
                <h1 className="text-white text-4xl">{buttonObj.buttonOne.title}</h1>
                <button className={buttonObj.buttonOne.design}>Button</button>
                <div className="border-amber-100 border-solid border-2 w-[600px] h-64">
                    <p className="text-lg text-amber-700 flex justify-center my-10 mx-5"><span className="text-slate-500">{`<`}</span>{`button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Button </button>`}</p>
                </div>
                </div>

            </div>

        </>
    )
}

export default Main
