import React from 'react'

export var globalContextValues = {
    login: false,
    handleSignIn: ()=>{console.log('hola')},

}

export const globalContext = React.createContext({
    globalContextValues
  })