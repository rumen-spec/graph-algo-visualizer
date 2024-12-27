import "./grid.css";
import {useContext} from "react";
import {useTile} from "../hooks/useTile.tsx";
import {usePathFinding} from "../hooks/usePathFindingHook.tsx";
import {twMerge} from "tailwind-merge";
import {MAX_ROWS} from "../util/consts.ts";

export const Grid = () => {

    const {grid} = usePathFinding();

    return(
        <div className={twMerge(
            "flex-col flex items-center justify-center border-sky-300",
            `lg:min-h-[${MAX_ROWS*17}px] md:min-h-[${MAX_ROWS*15}px] xs:min-h-[${MAX_ROWS*8}px] min-h-[${MAX_ROWS*7}px]`,
            `lg:min-w-[${MAX_ROWS*17}px] md:min-w-[${MAX_ROWS*15}px] xs:min-w-[${MAX_ROWS*8}px] min-w-[${MAX_ROWS*7}px]`,
        )}>
            {grid.map((row, index) => (
                <div key={index} className="flex">{row.map((tile, tileindex) => (
                    <div className="bg-white h-2 w-2 border"/>
                ))}</div>
            ))}
        </div>
    )
}