import React from 'react'

type boolVal = {
    isOpen: boolean
}

const Main = ({isOpen}: boolVal) => {
    console.log(isOpen)
    return (
        <div className={isOpen ? `flex justify-center` : ``}>
            {isOpen.toString()}
        </div>
    )
}

export default Main
