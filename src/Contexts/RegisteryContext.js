import React from 'react';

const RegisteryContext = React.createContext({
    dispatch : ()=>{},
    user : []
})

export default RegisteryContext;