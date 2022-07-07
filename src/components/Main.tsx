import React, {useContext} from 'react'
import { ComponentContext } from '../App'

type boolVal = {
    isOpen: boolean,

}

const Main = ({isOpen}: boolVal) => {

    const context = useContext(ComponentContext) as any
    console.log(context)

    return (
        <>
            <div className="flex justify-center w-screen h-screen bg-slate-900">
                {context}
                
            </div>

        </>
    )
}

export default Main
