/*import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getSymbols, syncSymbols } from '../../services/SymbolsService';
import SymbolRow from './SymbolRow';
import SelectQuote, { getDefaultQuote, filterSymbolObjects, setDefaultQuote } from '../../components/SelectQuote/SelectQuote';
import SymbolModal from './SymbolModal';

function Symbols() {

    const history = useHistory();

    const [symbols, setSymbols] = useState([]);

    const [error, setError] = useState('');

    const [quote, setQuote] = useState(getDefaultQuote());

    const [sucess, setSucess] = useState('');

    const [isSyncing, setIsSyncing] = useState(false);

    //Teste
    const [selectedSymbol, setSelectedSymbol] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        getSymbols(token)
            .then(symbols => {
                setSymbols(filterSymbolObjects(symbols, quote));
            })
            .catch(err => {
                if (err.response && err.response.status === 401) return history.push('/');
                console.error(err.message);
                setError(err.message);
                setSucess('');
            })
    }, [isSyncing, quote])

    function onSyncClick(event) {
        const token = localStorage.getItem('token');
        setIsSyncing(true);
        syncSymbols(token)
            .then(response => setIsSyncing(false))
            .catch(err => {
                if (err.response && err.response.status === 401) return history.push('/');
                console.error(err.message);
                setError(err.message);
                setSucess('');
            })
    }

    function onQuoteChange(event) {
        setQuote(event.target.value);
        setDefaultQuote(event.target.value);
    }

    //Teste
    function handleEditSymbol(symbolData) {
        setSelectedSymbol(symbolData);
        setShowModal(true);
    }

    return (<React.Fragment>

        <div className='row'>
            <div className='col-12'>
                <div className='col-12 mb-4'>
                    <div className='card border-0 shadow'>
                        <div class="card-header">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h2 class="fs-5 fw-bold mb-0">Symbols</h2>
                                </div>
                                <div className="col" >
                                    <SelectQuote onChange={onQuoteChange} />
                                </div>
                            </div>
                        </div>
                        <div className='table-responsive'>
                            <table class="table align-items-center table-flush">
                                <thead class="thead-light">
                                    <tr>
                                        <th class="border-bottom" scope="col">Symbol</th>
                                        <th class="border-bottom" scope="col">Base Prec</th>
                                        <th class="border-bottom" scope="col">Quote Prec</th>
                                        <th class="border-bottom" scope="col">Min National</th>
                                        <th class="border-bottom" scope="col">Min Lot Size</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {symbols.map(item => <SymbolRow key={item.symbol} data={item} onClick={() => handleEditSymbol(item)} />)}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="2">
                                            <button className="btn btn-primary animate-up-2" type="button" onClick={onSyncClick}>
                                                <svg className='icon icon-xs' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path>
                                                </svg>
                                                {isSyncing ? "Syncing..." : "Sync"}
                                            </button>
                                        </td>
                                        <td>
                                            {error
                                                ? <div className="alert alert-danger">{error}</div>
                                                : <React.Fragment></React.Fragment>
                                            }
                                            {sucess
                                                ? <div className="alert alert-sucess">{sucess}</div>
                                                : <React.Fragment></React.Fragment>
                                            }
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SymbolModal />
    </React.Fragment>);
}

export default Symbols;*/

/*
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getSymbols, syncSymbols } from '../../services/SymbolsService';
import SymbolRow from './SymbolRow';
import SelectQuote, { getDefaultQuote, filterSymbolObjects, setDefaultQuote } from '../../components/SelectQuote/SelectQuote';
import SymbolModal from './SymbolModal';

function Symbols() {
    const history = useHistory();

    // Estados principais
    const [symbols, setSymbols] = useState([]);
    const [quote, setQuote] = useState(getDefaultQuote());
    const [isSyncing, setIsSyncing] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Modal
    const [selectedSymbol, setSelectedSymbol] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Buscar símbolos da API
    useEffect(() => {
        const token = localStorage.getItem('token');

        getSymbols(token)
            .then(res => {
                setSymbols(filterSymbolObjects(res, quote));
                setError('');
            })
            .catch(err => {
                if (err.response?.status === 401) return history.push('/');
                console.error(err.message);
                setError(err.message);
            });
    }, [isSyncing, quote]);

    // Sincronizar símbolos com a Binance
    function onSyncClick() {
        const token = localStorage.getItem('token');
        setIsSyncing(true);

        syncSymbols(token)
            .then(() => {
                setIsSyncing(false);
                setSuccess('Symbols synced successfully!');
                setError('');
            })
            .catch(err => {
                setIsSyncing(false);
                if (err.response?.status === 401) return history.push('/');
                console.error(err.message);
                setError(err.message);
                setSuccess('');
            });
    }

    function onQuoteChange(event) {
        const selected = event.target.value;
        setQuote(selected);
        setDefaultQuote(selected);
    }

    function handleEditSymbol(symbolData) {
        setSelectedSymbol(symbolData);
        setShowModal(true);
    }

    function toggleFavorite(symbolName) {
        setSymbols(prevSymbols =>
            prevSymbols.map(item =>
                item.symbol === symbolName
                    ? { ...item, isFavorite: !item.isFavorite }
                    : item
            )
        );
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card border-0 shadow mb-4">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h2 className="fs-5 fw-bold mb-0">Symbols</h2>
                                </div>
                                <div className="col">
                                    <SelectQuote onChange={onQuoteChange} />
                                </div>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table align-items-center table-flush">
                                <thead className="thead-light">
                                    <tr>
                                        <th className="border-bottom">Symbol</th>
                                        <th className="border-bottom">Base Prec</th>
                                        <th className="border-bottom">Quote Prec</th>
                                        <th className="border-bottom">Min National</th>
                                        <th className="border-bottom">Min Lot Size</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {symbols.map(item => (
                                        <SymbolRow
                                            key={item.symbol}
                                            data={item}
                                            onClick={() => handleEditSymbol(item)}
                                        />
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="6">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <button
                                                    className="btn btn-primary animate-up-2"
                                                    type="button"
                                                    onClick={onSyncClick}
                                                >
                                                    <svg className="icon icon-xs me-2" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182M21 5v5" />
                                                    </svg>
                                                    {isSyncing ? "Syncing..." : "Sync"}
                                                </button>

                                                {error && <div className="alert alert-danger mb-0">{error}</div>}
                                                {success && <div className="alert alert-success mb-0">{success}</div>}
                                            </div>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <SymbolModal
                show={showModal}
                onClose={() => setShowModal(false)}
                data={selectedSymbol}
            />
        </>
    );
}

export default Symbols;*/

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getSymbols, syncSymbols, getSymbol } from '../../services/SymbolsService';
import SymbolRow from './SymbolRow';
import SelectQuote, { getDefaultQuote, filterSymbolObjects, setDefaultQuote } from '../../components/SelectQuote/SelectQuote';
import SymbolModal from './SymbolModal';

function Symbols() {

    const history = useHistory();

    const [symbols, setSymbols] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isSyncing, setIsSyncing] = useState(false);
    const [quote, setQuote] = useState(getDefaultQuote());
    const [editSymbol, setEditSymbol] = useState({
        symbol: '',
        basePrecision: '',
        quotePrecision: '',
        minNotional: '',
        minLotSize: ''
    });

    //Update
    const [showModal, setShowModal] = useState(false);

    function errorHandling(err) {
        if (err.response && err.response.status === 401)
            return history.push('/');

        console.error(err.response ? err.response.data : err.message);
        setError(err.response ? err.response.data : err.message);
        setSuccess('');
    }

    /*
    function onEditSymbol(event) {
        const token = localStorage.getItem("token");
        const symbol = event.target.id.replace('edit', '');

        getSymbol(symbol, token)
            .then(symbolObj => setEditSymbol(symbolObj))
            .catch(err => errorHandling(err))
    }*/

    //Update
    function onEditSymbol(event) {
        const token = localStorage.getItem("token");
        const symbol = event.target.id.replace('edit', '');

        getSymbol(symbol, token)
            .then(symbolObj => {
                setEditSymbol(symbolObj);
                setShowModal(true); // ✅ ATIVA o modal!
            })
            .catch(err => errorHandling(err));
    }

    function onSyncClick(event) {
        const token = localStorage.getItem("token");
        setIsSyncing(true);
        syncSymbols(token)
            .then(response => setIsSyncing(false))
            .catch(err => {
                errorHandling(err)
                setIsSyncing(false);
            })
    }

    function onQuoteChange(event) {
        setQuote(event.target.value);
        setDefaultQuote(event.target.value);
    }

    function loadSymbols() {
        const token = localStorage.getItem('token');
        getSymbols(token)
            .then(symbols => {
                setSymbols(filterSymbolObjects(symbols, quote));
            })
            .catch(err => errorHandling(err))
    }

    useEffect(() => {
        loadSymbols();
    }, [isSyncing, quote])

    function onModalSubmit(event) {
        loadSymbols();
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12">
                    <div className="col-12 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h2 className="fs-5 fw-bold mb-0">Symbols</h2>
                                    </div>
                                    <div className="col">
                                        <SelectQuote onChange={onQuoteChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-items-center table-flush">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="border-bottom" scope="col">Symbol</th>
                                            <th className="border-bottom" scope="col">Base Prec</th>
                                            <th className="border-bottom" scope="col">Quote Prec</th>
                                            <th className="border-bottom" scope="col">Min Notional</th>
                                            <th className="border-bottom" scope="col">Min Lot Size</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {symbols.map(item => <SymbolRow key={item.symbol} data={item} onClick={onEditSymbol} />)}
                                    </tbody>
                                </table>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn btn-primary animate-up-2" type="button" onClick={onSyncClick}>
                                                <svg className="icon icon-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                                {isSyncing ? "Syncing..." : "Sync"}
                                            </button>
                                        </div>
                                        <div className="col">
                                            {error ? <div className="alert alert-danger">{error}</div> : <React.Fragment></React.Fragment>}
                                            {success ? <div className="alert alert-success">{success}</div> : <React.Fragment></React.Fragment>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SymbolModal
                show={showModal}
                onClose={() => setShowModal(false)}
                data={editSymbol}
                onSubmit={onModalSubmit}
            />
        </React.Fragment>
    )
}

export default Symbols;
