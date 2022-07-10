import React from 'react'

export const BasicButton = () => {
    return (
        <div className="flex flex-col w-auto h-auto justify-evenly items-center">
            <h1 className="text-white text-4xl">Basic Button</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
            <div className="border-amber-100 border-solid border-2 w-fit max-w-4xl h-fit">
                <p className="text-lg flex justify-center my-10 mx-10">
                    <span>
                        <span className="text-slate-500">{`<`}</span>
                        <span className="text-sky-600">button </span> 
                        <span className="text-sky-300">className</span>
                        <span className="text-white">=</span>
                        <span className="text-yellow-600">"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"</span>
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

export const BasicButton2XLRound = () => {
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

export const HoverButton = () => {
    return (
        <div className="flex flex-col w-auto h-auto justify-evenly items-center">
            <h1 className="text-white text-4xl">Hover Button</h1>
                <button
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >Button</button>
            <div className="border-amber-100 border-solid border-2 w-fit max-w-4xl h-fit">
                <p className="text-lg flex justify-center my-10 mx-10">
                    <span>
                        <span className="text-slate-500">{`<`}</span>
                        <span className="text-sky-600">button </span>
                        <span className="text-sky-300">data-mdb-ripple</span>
                        <span className="text-white">=</span>
                        <span className="text-yellow-600">"true" </span>
                        <span className="text-sky-300">data-mdb-ripple-color</span>
                        <span className="text-white">=</span>
                        <span className="text-yellow-600">"light" </span> 
                        <span className="text-sky-300">className</span>
                        <span className="text-white">=</span>
                        <span className="text-yellow-600">"inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"</span>
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


