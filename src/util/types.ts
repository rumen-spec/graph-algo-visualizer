export type AlgorithmType = "Dijkstra" | "A_STAR" | "BFS" | "DFS"
export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION"

export interface MazeSelectType {
    name: string;
    value: MazeType;
}
export interface AlgorithmSelectType {
    name: string;
    value: AlgorithmType;
}
export interface SpeedSelectType {
    name: string;
    value: SpeedType;
}

export type TileType = {
    row: number,
    col: number,
    isEnd: boolean,
    isStart: boolean,
    parent: TileType | null,
    distance: number,
    isWall: boolean,
    isPath: boolean
    isTraversed: boolean,
}

export type SpeedType = 2 | 1 | 0.5

export type GridType = TileType[][]