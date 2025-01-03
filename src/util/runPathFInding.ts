import { bfs } from "../Algorithms/PathFinding/bfs.ts";
import { AlgorithmType, GridType, TileType } from "./types";
import {dfs} from "../Algorithms/PathFinding/dfs.ts";
import {dijkstra} from "../Algorithms/PathFinding/dijkstra.ts";
import {aStar} from "../Algorithms/PathFinding/aStar.ts";

export const runPathfindingAlgorithm = ({
                                            algorithm,
                                            grid,
                                            startTile,
                                            endTile,
                                        }: {
    algorithm: AlgorithmType;
    grid: GridType;
    startTile: TileType;
    endTile: TileType;
}) => {
    switch (algorithm) {
        case "BFS":
            return bfs(grid, startTile, endTile);
        case "DFS":
            return dfs(grid, startTile, endTile);
        case "Dijkstra":
            return dijkstra(grid, startTile, endTile);
        case "A_STAR":
            return aStar(grid, startTile, endTile);
        default:
            return bfs(grid, startTile, endTile);
    }
};