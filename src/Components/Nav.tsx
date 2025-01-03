import "./Nav.css"
import {Select} from "./Select.tsx";
import {usePathFinding} from "../hooks/usePathFindingHook.tsx";
import {EXTENDED_SLEEP_TIME, MAZES, PATH_FINDING_ALGORITHMS, SLEEP_TIME, SPEEDS,} from "../util/consts.ts";
import {useSpeed} from "../hooks/useSpeed.tsx";
import {AlgorithmType, MazeType, SpeedType} from "../util/types.ts";
import {reset} from "../util/reset.tsx";
import {useTile} from "../hooks/useTile.tsx";
import {MutableRefObject, useState} from "react";
import {twMerge} from "tailwind-merge";
import {runMazeAlgorithm} from "../util/runmazealgo.tsx";
import {PlayButton} from "./PlayButton.tsx";
import {animatePath} from "../util/animatepath.ts"
import {runPathfindingAlgorithm} from "../util/runPathFInding.ts";

export function Nav({isVisualizationRunningRef}: {isVisualizationRunningRef: MutableRefObject<boolean> }) {
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const {maze, setMaze, grid, setGrid, setIsGraphVisualized, isGraphVisualized, algorithm, setAlgorithm} = usePathFinding()
    const {speed, setSpeed} = useSpeed()
    const {startTile, endTile} = useTile()

    const handlerRunVisualizer = () => {
        if (isGraphVisualized) {
            setIsGraphVisualized(false);
            reset({grid: grid.slice(), startTile, endTile});
            return;
        }

        const {traversedTiles, path} = runPathfindingAlgorithm({
            algorithm,
            grid,
            startTile,
            endTile
        })

        animatePath(traversedTiles, path, startTile, endTile, speed)
        setIsDisabled(true)
        isVisualizationRunningRef.current = true
        setTimeout(() => {
            const newGrid = grid.slice();
            setGrid(newGrid);
            setIsGraphVisualized(true);
            setIsDisabled(false);
            isVisualizationRunningRef.current = false;
        }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value);
    }

    function GenerateMaze(maze: MazeType) {
        reset({grid, startTile, endTile})
        if (maze == "NONE") {
            setMaze(maze)
            return
        }

        setMaze(maze)
        setIsDisabled(true)
        runMazeAlgorithm({
            maze, grid, startTile, endTile, setIsDisabled, speed
        })
        const newGrid = grid.slice()
        setGrid(newGrid)
        setIsGraphVisualized(false)

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
                    value={algorithm}
                    onChange={(e)=>{
                        setAlgorithm(e.target.value as AlgorithmType)
                    }}
                    label="Algorithm"
                    isDisabled={isDisabled}
                    options={PATH_FINDING_ALGORITHMS}/>
                <Select
                    value={speed}
                    onChange={(e)=>{
                        setSpeed(parseInt(e.target.value) as SpeedType)
                    }}
                    label="Speed"
                    isDisabled={isDisabled}
                    options={SPEEDS}/>
                <PlayButton  isDisabled={isDisabled} isGraphVisualized={isGraphVisualized} handlerRunVisualizer={handlerRunVisualizer}/>
            </div>
        </div>
    )
}