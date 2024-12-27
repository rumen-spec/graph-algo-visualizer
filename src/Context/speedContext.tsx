import {SpeedType} from "../util/Types.ts";
import {createContext, ReactNode, useState} from "react";

interface SpeedContext {
    speed: SpeedType,
    setSpeed: (speed: SpeedType) => void,
}

export const SpeedContext = createContext<SpeedContext | undefined>(undefined);

export const SpeedProvider = ({children}: {children: ReactNode}) =>{
    const [ speed, setSpeed ] = useState<SpeedType>(0.5)

    return(
        <SpeedContext.Provider value = {{speed, setSpeed}}>
            {children}
        </SpeedContext.Provider>
    )
}