/*import React, { useState } from 'react';
import useWebSocket from 'react-use-websocket';

function Dashboard() {

    const [miniTickerState, setMiniTickerState] = useState({});

    const { lastJsonMessage } = useWebSocket(process.env.REACT_APP_WS_URL, {
        onOpen: () => {
            console.log(`Connected to App WS Server`);
        },
        onMessage: () => {
            if (lastJsonMessage) {
                if (lastJsonMessage.miniTicker)
                    setMiniTickerState(lastJsonMessage.miniTicker);
            }
        },
        queryParams: {},
        onError: (event) => {
            console.error(event);
        },
        shouldReconnect: (closeEvent) => true,
        reconnectInterval: 3000
    });

    return (
        <React.Fragment>
            {JSON.stringify(miniTickerState)}
        </React.Fragment>
    );
}

export default Dashboard;*/

import React, { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import Menu from '../../components/Menu/Menu';
import LineChart from './LineChart';
import MiniTicker from './MiniTicker/MiniTicker';
import BookTicker from './BookTicker/BookTicker';
import Wallet from './Wallet/Wallet';

function Dashboard() {

    const [miniTickerState, setMiniTickerState] = useState({});
    const [bookState, setBookState] = useState({});

    const { lastJsonMessage } = useWebSocket(process.env.REACT_APP_WS_URL, {
        onOpen: () => {
            console.log(`Connected to App WS Server`);
        },
        onError: (event) => {
            console.error(event);
        },
        shouldReconnect: () => true,
        reconnectInterval: 3000,
    });

    /*
    useEffect(() => {
        if (lastJsonMessage && lastJsonMessage.miniTickerStream) {setMiniTickerState(lastJsonMessage.miniTickerStream);
            
        }if (lastJsonMessage && lastJsonMessage.book) {setBookState(lastJsonMessage.book);
        }
    }, [lastJsonMessage]);*/

    useEffect(() => {
        if (!lastJsonMessage) return;
    
        if (lastJsonMessage.miniTickerStream) {
            setMiniTickerState(lastJsonMessage.miniTickerStream);
        }
    
        if (lastJsonMessage.book) {
            const formattedBook = lastJsonMessage.book.reduce((acc, b) => {
                acc[b.symbol] = b;
                return acc;
            }, {});
    
            setBookState(formattedBook);
        }
    }, [lastJsonMessage]);
    

    return (
        <React.Fragment>
            <Menu />
            <main className='content'>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                    <div className="d-block mb-4 mb-md-0">
                        <h1 className="h4">Dashboard</h1>
                    </div>
                </div>
                <LineChart />
                <MiniTicker data={miniTickerState} />
                <div className='row'>
                    <BookTicker data={bookState} />
                    <Wallet/>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Dashboard;
