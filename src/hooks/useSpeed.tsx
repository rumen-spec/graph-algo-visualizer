import {useContext} from "react";
import {SpeedContext, SpeedProivder} from "../Context/speedContext.tsx";

export const useSpeed = () =>{
    const context = useContext(SpeedContext);
    if(!context){
        throw new Error('useSpeed must be used within use speed')
    }

    return context;
}