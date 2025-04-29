import React, { useEffect, useState } from 'react';
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

export default Symbols;