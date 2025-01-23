import React, { createContext, useState } from 'react'

export const addResponseContext = createContext({})
export const editProjectRespone = createContext({})
export const loginResponseContext = createContext({})

function ContextShare({children}) {

    const [addResponse, setAddResponse] = useState([])
    const [editResponse, setEditResponse] = useState([])
    const [loginResponse, setLoginResponse] = useState([])
    return ( 
        <>
            <addResponseContext.Provider value={{ addResponse, setAddResponse }}>
                <editProjectRespone.Provider value={(editResponse, setEditResponse)}>
                   <loginResponseContext.Provider value={{loginResponse, setLoginResponse}}> {children}</loginResponseContext.Provider>
                    </editProjectRespone.Provider>
            </addResponseContext.Provider>
        </>
    )
}

export default ContextShare