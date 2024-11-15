import { createContext, useContext, useMemo, useReducer } from 'react';
import { initialStates, rootReducer } from './reducer/rootReducer';

// Create a new context
const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {

    const [states, dispatch] = useReducer(rootReducer, initialStates);

    const ContextValue = useMemo(() => {
        return { states, dispatch };
    }, [states, dispatch]);

    return (
        <GlobalStateContext.Provider value={ContextValue}>
            {children}
        </GlobalStateContext.Provider>
    )
}

export const useGlobalStateContext = () => {
    return useContext(GlobalStateContext)
}