import { ReactNode, createContext, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../util/types.ts";
import { createGrid } from "../util/helper.ts";
import {
    endTileConfig,
    startTileConfig,
} from "../util/consts.ts";

interface PathFindingContextInterface {
    algorithm: AlgorithmType;
    setAlgorithm: (algorithm: AlgorithmType) => void;
    maze: MazeType;
    setMaze: (maze: MazeType) => void;
    grid: GridType;
    setGrid: (grid: GridType) => void;
    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const PathFindingContext = createContext<
    PathFindingContextInterface | undefined
>(undefined);

export const PathFindingProvider = ({ children }: { children: ReactNode }) => {
    const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
    const [maze, setMaze] = useState<MazeType>("NONE");
    const [grid, setGrid] = useState<GridType>(
        createGrid(startTileConfig, endTileConfig)
    );
    const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

    return (
        <PathFindingContext.Provider
            value={{
                algorithm,
                setAlgorithm,
                maze,
                setMaze,
                grid,
                setGrid,
                isGraphVisualized,
                setIsGraphVisualized,
            }}>
            {children}
        </PathFindingContext.Provider>
    );
};