import {AlgorithmSelectType, MazeSelectType, SpeedSelectType} from "./types.ts";

export const MAX_ROWS = 39;
export const MAX_COLS = 49

export const startTileConfig = {
    row: 1,
    col: 1,
    parent: null,
    isWall: false,
    isPath: false,
    distance: Infinity,
    isTraversed: false,
    isEnd: false,
    isStart: false,
}
export const endTileConfig = {
    row: MAX_ROWS-2,
    col: MAX_COLS-2,
    parent: null,
    isWall: false,
    isPath: false,
    distance: Infinity,
    isTraversed: false,
    isEnd: false,
    isStart: false

}

export const TILE_STYLE =
    "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-500";
export const START_TILE_STYLE = TILE_STYLE + " bg-green-500";
export const END_TILE_STYLE = TILE_STYLE + " bg-red-600";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-200";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-green-600";

export const MAZES: MazeSelectType[] = [
    {name: "No Maze", value: "NONE"},
    {name: "Binary Tree", value: "BINARY_TREE"},
    {name: "Recursive Division", value: "RECURSIVE_DIVISION"},
]

export const PATH_FINDING_ALGORITHMS: AlgorithmSelectType[] = [
    {name: "Dijkstra", value: "Dijkstra"},
    {name: "A-Star", value: "A_STAR"},
    {name: "Breath First Search", value: "BFS"},
    {name: "Depth First Search", value: "DFS"},
]

export const SPEEDS: SpeedSelectType[] = [
    {name: "Slow", value: 2},
    {name: "Medium", value: 1},
    {name: "Fast", value: 0.5},
]
export const SLEEP_TIME = 8;
export const EXTENDED_SLEEP_TIME = 30;