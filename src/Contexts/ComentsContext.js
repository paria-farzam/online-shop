import React from 'react';

const ComentsContext = React.createContext({
    coments : [],
    comentsDispatch : ()=>{}
})

export default ComentsContext;