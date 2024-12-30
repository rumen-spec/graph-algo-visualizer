import { MazeType, GridType, TileType, SpeedType } from './types';
import { binaryTree } from '../Algorithms/Maze/binaryTree.tsx';
// import { constructBorder } from './constructBorder';
import { MAX_COLS, MAX_ROWS, SPEEDS } from './consts.ts';
import {constructBorder} from "./constructBorder.ts";
import recurvsiveDivision from "../Algorithms/Maze/recursiveDivision.ts";

export const runMazeAlgorithm = async ({
                                           maze,
                                           grid,
                                           startTile,
                                           endTile,
                                           setIsDisabled,
                                           speed
                                       }:{
    maze: MazeType;
    grid: GridType;
    startTile: TileType;
    endTile: TileType;
    setIsDisabled: (isDisabled: boolean) => void;
    speed: SpeedType
}) => {
    if (maze == "BINARY_TREE") {
        await binaryTree(grid, startTile, endTile, setIsDisabled, speed);
    } else if (maze === "RECURSIVE_DIVISION") {
        const currentSpeed = SPEEDS.find((s) => s.value === speed)!.value ?? 2
        await constructBorder(grid, startTile, endTile);
        await recurvsiveDivision({
            grid,
            startTile,
            endTile,
            row: 1,
            col: 1,
            height: Math.floor((MAX_ROWS - 1) / 2),
            width: Math.floor((MAX_COLS- 1) / 2),
            setIsDisabled,
            speed
        })
        setTimeout(() => {
            setIsDisabled(false)
        }, 800 * currentSpeed);
    }
}