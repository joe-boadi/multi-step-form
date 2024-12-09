import { useEffect, useState } from "react";

export const usePersistedState = ( key:string, value:unknown ) => {
        const [ state, setState ] = useState( () => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : value;
    });
  
    useEffect( () => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [state, key] );
  
    return [state, setState] as const;
  }
