import {ChangeEvent} from "react";

export function Select({
    value,
    onChange,
    options,
    label,
    isDisabled }:{
    value: string | number,
    onChange: (value: ChangeEvent<HTMLSelectElement>) => void,
    label:string,
    isDisabled?: boolean,
    options: {value: string | number; name: string}[];
}) {
    return (
        <div className="flex flex-col items-start gap-1">
            <label className="text-xs text-gray-300 ml-1 justify-center align-center" htmlFor={label}>{label}</label>
            <select
                disabled={isDisabled}
                className="bg-gray-700 rounded-md cursor-pointer hover:bg-gray-800 transition ease-in active:ring-0 active:border-0 p-2 min-w-[200px] sm:min-w-full"
                id={label}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}