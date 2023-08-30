import { createContext, useContext, useState } from "react";


const AddContext = createContext();

export const useAddContext = () => {
    return useContext(AddContext);
}

export const AddressProvider = ({children}) => {
    // const [address, setAddress] = useState(''); 
    // const [privateKey, setPrivateKey] = useState('');
    // const [show, setShow] = useState();


    return <AddContext.Provider >
        {children}
    </AddContext.Provider>
}