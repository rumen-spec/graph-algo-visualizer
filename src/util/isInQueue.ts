import { isEqual } from "./helper.ts";
import { TileType } from "./types.ts";

export function isInQueue(tile: TileType, queue: TileType[]) {
    for (let i = 0; i < queue.length; i++) {
        if (isEqual(tile, queue[i])) return true;
    }
    return false;
}