import React from 'react'
const AppContext = React.createContext();
export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider =({children}) =>{
    const [appState, setAppstate]= React.useState({
        data: [],
        addtocard: [],
    });
    const updateState =(newState) =>{
        setAppstate((prevState)=>(
            {
            ...prevState,
            ...newState
        }
           ) )};


    return(
        <AppContext.Provider value={{appState, updateState}}>
            {children}

        </AppContext.Provider>
    );
};