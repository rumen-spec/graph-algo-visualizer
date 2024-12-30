import "./Nav.css"
import {Select} from "./Select.tsx";
import {usePathFinding} from "../hooks/usePathFindingHook.tsx";
import {MAZES, PATH_FINDING_ALGORITHMS, SPEEDS,} from "../util/consts.ts";
import {useSpeed} from "../hooks/useSpeed.tsx";
import {MazeType} from "../util/types.ts";
import {reset} from "../util/reset.tsx";
import {useTile} from "../hooks/useTile.tsx";
import {useState} from "react";
import {twMerge} from "tailwind-merge";
import {runMazeAlgorithm} from "../util/runmazealgo.tsx";

export function Nav() {
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const {maze, setMaze, grid, setGrid, setIsGraphVisualized} = usePathFinding()
    const {speed} = useSpeed()
    const {startTile, endTile} = useTile()

    function GenerateMaze(maze: MazeType){
        if( maze == "NONE"){
            setMaze(maze)
            reset({grid, startTile, endTile})
            return
        }

        else{
            setMaze(maze)
            setIsDisabled(true)
            runMazeAlgorithm({
                maze, grid, startTile, endTile, setIsDisabled, speed
            })
            const newGrid = grid.slice()
            setGrid(newGrid)
            setIsGraphVisualized(false)
        }
    }
    return(
        <div className={twMerge("Navbar", "min-h-[4.5rem] sm:px-5 px-0")}>
            <div className={twMerge("Namebar", "lg:justify-between sm:w-[52-rem]")}>
            <h1 className="Title">
                PathFinding Visualizer
            </h1>
            <p className="Author">by Osarumen Izedonmwen</p>
            </div>
            <div className="Selectbar">
                <Select
                    value={maze}
                    onChange={(e)=>{
                        GenerateMaze(e.target.value as MazeType)
                    }}
                    label="Maze"
                    options={MAZES}
                    isDisabled={isDisabled}/>
                <Select
                    value={maze}
                    onChange={()=>{

                    }}
                    label="Algorithm"
                    isDisabled={isDisabled}
                    options={PATH_FINDING_ALGORITHMS}/>
                <Select
                    value={speed}
                    onChange={()=>{
                    }}
                    label="Speed"
                    isDisabled={isDisabled}
                    options={SPEEDS}/>
            </div>
        </div>
    )
}