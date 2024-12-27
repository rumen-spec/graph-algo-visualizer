import {useContext} from "react";
import {TileContext} from "../Context/TileContext.tsx";

export const useTile = () => {

    const context = useContext(TileContext);
    if(!context){
        throw new Error('useTile must be used inside a TileProvider');
    }

    return context
}