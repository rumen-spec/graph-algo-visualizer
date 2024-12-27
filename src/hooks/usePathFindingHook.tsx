import {useContext} from "react";
import {PathFindingContext} from "../Context/PathFindingContext.tsx";

export const usePathFinding = () => {
    const context = useContext(PathFindingContext)
    if(!context){
        throw new Error('usePathFindingHook must be used within the pathFindingContext.')
    }

    return context
}