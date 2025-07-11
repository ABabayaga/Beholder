/*import React, { useEffect, useState, useMemo } from 'react';


function BookRow(props) {

    const [data, setData] = useState({
        bid: '0',
        ask: '0',
    })

    const bookRow = useMemo(() => (
        <tr>
            <td className='text--gray-900'>{props.symbol}</td>
            <td className='text--gray-900'>{`${data.bid}`.substring(0, 8)}`</td>
            <td className='text--gray-900'>{`${data.ask}`.substring(0, 8)}`</td>
        </tr>
    ), [data.bid, data.ask])

    useEffect(() => {
        if (!props.data) return;

        if (data.bid !== props.data.bestBid)
            data.bid = props.data.bestBid;

        if (data.ask !== props.data.bestAsk)
            data.ask = props.data.bestAsk;

        setData(data);

    }, [props.data])

    return (bookRow);
}

export default BookRow;*/
import React from 'react';

function BookRow({ symbol, data }) {
    const bid = data?.bestBid || '0';
    const ask = data?.bestAsk || '0';

    return (
        <tr>
            <td className='text--gray-900'>{symbol}</td>
            <td className='text--gray-900'>{bid.substring(0, 8)}</td>
            <td className='text--gray-900'>{ask.substring(0, 8)}</td>
        </tr>
    );
}

export default BookRow;
