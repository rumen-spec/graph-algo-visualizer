import { SPEEDS, WALL_TILE_STYLE } from "../../util/consts";
import { getRandInt, isEqual, sleep } from "../../util/helper";
import { GridType, TileType, SpeedType } from "../../util/types";
import recurvsiveDivision from "./recursiveDivision";

export async function verticalDivision({
                                           grid,
                                           startTile,
                                           endTile,
                                           row,
                                           col,
                                           height,
                                           width,
                                           setIsDisabled,
                                           speed
                                       }:{
    grid: GridType;
    startTile: TileType,
    endTile: TileType,
    row: number,
    col: number,
    height: number,
    width: number,
    setIsDisabled: (isDisabled: boolean) => void,
    speed: SpeedType
}) {
    const makeWallAt = col + getRandInt(0, width - 1) * 2 + 1;
    const makePassageAt = row + getRandInt(0, height) * 2;

    for (let i = 0; i < 2 * height - 1; i++){
        if (makePassageAt !== row + i){
            if (!isEqual(grid[row + i][makeWallAt], startTile) && !isEqual(grid[row + i][makeWallAt], endTile)){
                grid[row + i][makeWallAt].isWall = true;

                document.getElementById(`${row + i}-${makeWallAt}`)!.className = `${WALL_TILE_STYLE} animate-wall`;
                await sleep(10 * SPEEDS.find((s) => s.value === speed)!.value - 5)
            }
        }
    }

    await recurvsiveDivision({
        grid,
        startTile,
        endTile,
        row,
        col,
        height,
        width: (makeWallAt - col + 1) / 2,
        setIsDisabled,
        speed
    })

    await recurvsiveDivision({
        grid,
        startTile,
        endTile,
        row,
        col: makeWallAt + 1,
        height,
        width: width - (makeWallAt - col + 1) / 2,
        setIsDisabled,
        speed
    })
}