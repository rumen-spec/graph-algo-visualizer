import {TileType} from "../util/types.ts";
import {createContext, ReactNode, useState} from "react";
import {endTileConfig, startTileConfig} from "../util/consts.ts";

interface TileContextInterface{
    startTile: TileType,
    setStartTile: (tile: TileType) => void,
    endTile: TileType,
    setEndTile: (tile: TileType) => void,
}

export const TileContext = createContext<TileContextInterface | undefined>(
    undefined
)

export const TileProvider = ({children}: {children: ReactNode}) => {
    const [startTile, setStartTile] = useState<TileType>(startTileConfig)
    const [endTile, setEndTile] = useState<TileType>(endTileConfig)

    return (
        <TileContext.Provider
            value={
                {
                    startTile,
                    setStartTile,
                    setEndTile,
                    endTile
                }}
        >
            {children}
        </TileContext.Provider>
    )
}