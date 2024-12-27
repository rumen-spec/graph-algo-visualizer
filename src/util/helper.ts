import {GridType, TileType} from "./Types.ts";
import {MAX_COLS, MAX_ROWS} from "./consts.ts";

function createRow(row: number, start: TileType, end: TileType): TileType[] {
    const current_row: TileType[] = []
    for (let i = 0; i < MAX_COLS; i++) {
        current_row.push({
            row,
            col: i,
            isEnd: row === end.row && i === end.col,
            isStart: row === start.row && i === end.col,
            parent: null,
            isWall: false,
            isPath: false,
            distance: Infinity,
            isTraversed: false
        })
    }
    return current_row;
}

export const createGrid = (start: TileType, end: TileType): GridType => {
    const grid: GridType = []
    for (let i = 0; i < MAX_ROWS; i++) {
        grid.push(createRow(i, start, end))
    }
    return grid;
}