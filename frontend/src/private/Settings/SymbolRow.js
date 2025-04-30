/*import React from "react";

/**
 * props:
 * - symbol
 * - basePrecision
 * - quotePrecision
 * - mintNotional
 * - minLotSize
 * - isFavorite
 */

/*
function SymbolRow(props) {
    return (
        <tr>
            <td className="text-gray-900">
                {props.data.symbol}
                {props.data.isFavorite
                    ? <svg className="icon icon-xs" data-slot="icon" fill="yellow" stroke-width="1.5" stroke="orange" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                    </svg>
                    : <React.Fragment></React.Fragment>
                }
            </td>
            <td className="text-gray-900">
                {props.data.basePrecision}
            </td>
            <td className="text-gray-900">
                {props.data.quotePrecision}
            </td>
            <td className="text-gray-900">
                {props.data.minNotional}
            </td>
            <td className="text-gray-900">
                {props.data.minLotSize}
            </td>
            <td>
                <button id={"edit" + props.data.symbol} className="btn btn-secondary animate-up-2" width={32} onClick={props.onClick}   >
                    <svg id={"edit" + props.data.symbol} className="icon icon-xs" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path>
                    </svg>
                </button>
            </td>
        </tr>
    );
}

export default SymbolRow; */

/*import React from "react";

/**
 * props:
 * - data: {
 *     symbol: string,
 *     basePrecision: number,
 *     quotePrecision: number,
 *     minNotional: string,
 *     minLotSize: string,
 *     isFavorite: boolean
 *   }
 * - onClick: function
 */

/*
function SymbolRow({ data, onClick }) {
    const { symbol, basePrecision, quotePrecision, minNotional, minLotSize, isFavorite } = data;

    return (
        <tr>
            <td className="text-gray-900">
                {symbol}
                {isFavorite && (
                    <svg
                        className="icon icon-xs ms-2"
                        fill="yellow"
                        strokeWidth="1.5"
                        stroke="orange"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                    </svg>
                )}
            </td>
            <td className="text-gray-900">{basePrecision}</td>
            <td className="text-gray-900">{quotePrecision}</td>
            <td className="text-gray-900">{minNotional}</td>
            <td className="text-gray-900">{minLotSize}</td>
            <td>
                <button
                    id={`edit-${symbol}`}
                    className="btn btn-secondary animate-up-2"
                    onClick={onClick}
                >
                    <svg
                        className="icon icon-xs"
                        fill="none"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                    </svg>
                </button>
            </td>
        </tr>
    );
}

export default SymbolRow;*/


import React from 'react';

/**
 * props.onclick
 * props.data:
 * - symbol
 * - basePrecision
 * - quotePrecision
 * - minNotional
 * - minLotSize
 * - isFavorite
 */
function SymbolRow(props) {
    return (
        <tr>
            <td className="text-gray-900">
                {props.data.symbol}
                {props.data.isFavorite
                    ? <svg className="icon icon-xs" fill="yellow" stroke="orange" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    : <React.Fragment></React.Fragment>
                }
            </td>
            <td className="text-gray-900">
                {props.data.basePrecision}
            </td>
            <td className="text-gray-900">
                {props.data.quotePrecision}
            </td>
            <td className="text-gray-900">
                {props.data.minNotional}
            </td>
            <td className="text-gray-900">
                {props.data.minLotSize}
            </td>
            <td>
                <button id={"edit" + props.data.symbol} className="btn btn-secondary animate-up-2" width={32} onClick={props.onClick} data-bs-toggle="modal" data-bs-target="#modalSymbol">
                    <svg id={"edit" + props.data.symbol} className="icon icon-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>
            </td>
        </tr>
    );
}

export default SymbolRow;