import React from 'react'

const ButtonTwo = () => {
    return (
        <div className="flex flex-col w-auto h-auto justify-evenly items-center">
        <h1 className="text-white text-4xl">Basic Button</h1>

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">Button</button>
    <div className="border-amber-100 border-solid border-2 w-fit max-w-4xl h-fit">
        <p className="text-lg flex justify-center my-10 mx-10">
            <span>
                <span className="text-slate-500">{`<`}</span>
                <span className="text-sky-600">button </span> 
                <span className="text-sky-300">className</span>
                <span className="text-white">=</span>
                <span className="text-yellow-600">"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"</span>
                <span className="text-slate-500">{`>`}</span>
                <span className="text-white">Button</span>
                <span className="text-slate-500">{`</`}</span>
                <span className="text-sky-600">button</span> 
                <span className="text-slate-500">{`>`}</span>
            </span>
        </p>
    </div>
    </div>
    )
}

export default ButtonTwo