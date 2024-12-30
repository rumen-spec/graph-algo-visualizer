import { endTileConfig, MAX_COLS, MAX_ROWS, startTileConfig, TILE_STYLE } from "./consts.ts";
import { isEqual } from "./helper.ts";
import { GridType, TileType } from "./types.ts";

export const reset = ({
                              grid,
                              startTile = startTileConfig,
                              endTile = endTileConfig
                          }: {
    grid: GridType;
    startTile?: TileType;
    endTile?: TileType;
}) => {
    for (let row = 0; row < MAX_ROWS; row++){
        for (let col = 0; col < MAX_COLS; col++){
            const tile = grid[row][col];
            tile.distance = Infinity;
            tile.isTraversed = false;
            tile.isPath = false;
            tile.parent = null;
            tile.isWall = false

            if (!isEqual(startTile, tile) && !isEqual(endTile, tile)){
                const tileElement = document.getElementById(`${tile.row}-${tile.col}`);

                if (tileElement){
                    tileElement.className = TILE_STYLE;
                }

                if (tile.row === MAX_ROWS - 1){
                    tileElement?.classList.add("border-b");
                }

                if (tile.col === 0){
                    tileElement?.classList.add("border-l");
                }
            }
        }
    }
}