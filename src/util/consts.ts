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