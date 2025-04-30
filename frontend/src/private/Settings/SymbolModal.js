/*import React from "react";

function SymbolModal() {

    function onSubmit(event) {

    }

    return (
        <div className="modal fade" id="modalSymbol" tabIndex="-1" role="dialog" aria-labelleby="modalTitleNotify" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title" id="modalTitleNotify">Edit Symbol</p>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="modal-body">
                            <div className="py-3">
                                <div className="form-group mb-4">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group mb-4">
                                                <label htmlFor="symbol">Symbol</label>
                                                <div className="input-group">
                                                    <input className="form-control" id="symbol" type="text" placeholder="BTCUSD" required />
                                                    <button type="button" className="btn btn-secondary d-inline-flex align-items-center me-2">
                                                        <svg className="icon icon-xs" fill="white" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="basePrecision">Base Precision:</label>
                                                <input type="number" className="form-control" id="basePrecision" placeholder="8" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="quotePrecision">Quote Precision:</label>
                                                <input type="number" className="form-control" id="quotePrecision" placeholder="8" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="minNotional">Min Notional:</label>
                                                <input type="text" className="form-control" id="minNotional" placeholder="0.1" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="minLotSize">Min Lot Size:</label>
                                                <input type="text" className="form-control" id="minLotSize" placeholder="0.1" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#modalSymbol" >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default SymbolModal;*/

/*
import React, { useState, useEffect } from "react";

function SymbolModal({ show, onClose, data }) {
    const [form, setForm] = useState({
        symbol: '',
        basePrecision: '',
        quotePrecision: '',
        minNotional: '',
        minLotSize: ''
    });

    useEffect(() => {
        if (data) {
            setForm({
                symbol: data.symbol || '',
                basePrecision: data.basePrecision || '',
                quotePrecision: data.quotePrecision || '',
                minNotional: data.minNotional || '',
                minLotSize: data.minLotSize || ''
            });
        }
    }, [data]);

    function handleChange(e) {
        const { id, value } = e.target;
        setForm(prev => ({ ...prev, [id]: value }));
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log("Salvar:", form);
        onClose(); // ou salvar no backend
    }

    if (!show) return null; // não renderiza nada se oculto

    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title">Edit Symbol</p>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="symbol">Symbol</label>
                                    <input id="symbol" className="form-control" value={form.symbol} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="basePrecision">Base Precision</label>
                                    <input id="basePrecision" type="number" className="form-control" value={form.basePrecision} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="quotePrecision">Quote Precision</label>
                                    <input id="quotePrecision" type="number" className="form-control" value={form.quotePrecision} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="minNotional">Min Notional</label>
                                    <input id="minNotional" className="form-control" value={form.minNotional} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="minLotSize">Min Lot Size</label>
                                <input id="minLotSize" className="form-control" value={form.minLotSize} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SymbolModal;*/

import React, { useState, useEffect, useRef } from 'react';
import { updateSymbol } from '../../services/SymbolsService';

/**
 * props:
 * - data
 * - onSubmit
 */
function SymbolModal(props) {
    const btnClose = useRef('');
    const [error, setError] = useState('');
    const [symbol, setSymbol] = useState({});

    useEffect(() => {
        if (!props.data) return;
        setSymbol(props.data);
    }, [props.data]);

    function onInputChange(event) {
        setSymbol(prevState => ({ ...prevState, [event.target.id]: event.target.value }));
    }

    function getStarFillColor() {
        return symbol.isFavorite ? "yellow" : "white";
    }

    function onFavoriteClick() {
        setSymbol(prevState => ({
            ...prevState,
            isFavorite: !prevState.isFavorite // <- usar prevState, não symbol direto
        }));
    }

    function onSubmit(event) {
        event.preventDefault();
        const token = localStorage.getItem('token');
        updateSymbol(symbol, token)
            .then(() => {
                setError('');
                props.onSubmit({ target: { id: 'symbol', value: symbol } });
                props.onClose(); // fecha o modal
            })
            .catch(err => setError(err.response ? err.response.data : err.message));
    }

    // ✅ Oculta o modal se "show" for falso
    if (!props.show) return null;

    return (
        <div className="modal show d-block" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title" id="modalTitleNotify">Edit Symbol</p>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={props.onClose}
                            aria-label="close"
                        ></button>
                    </div>

                    <form onSubmit={onSubmit}>
                        <div className="modal-body">
                            <div className="py-3">
                                <div className="form-group mb-4">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group mb-4">
                                                <label htmlFor="symbol">Symbol</label>
                                                <div className="input-group">
                                                    <input
                                                        className="form-control me-2"
                                                        id="symbol"
                                                        type="text"
                                                        value={symbol.symbol}
                                                        disabled
                                                    />
                                                    <button
                                                        type="button"
                                                        className="btn btn-warning"
                                                        onClick={onFavoriteClick}
                                                        title={symbol.isFavorite ? "Unfavorite" : "Favorite"}
                                                    >
                                                        <svg
                                                            className="icon icon-xs"
                                                            fill={symbol.isFavorite ? "yellow" : "none"}
                                                            stroke="orange"
                                                            strokeWidth="1.5"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557L3.04 8.72a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="basePrecision">Base Precision:</label>
                                                <input type="number" className="form-control" id="basePrecision" placeholder="8" defaultValue={symbol.basePrecision} required onChange={onInputChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="quotePrecision">Quote Precision:</label>
                                                <input type="number" className="form-control" id="quotePrecision" placeholder="8" defaultValue={symbol.quotePrecision} required onChange={onInputChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="minNotional">Min Notional:</label>
                                                <input type="text" className="form-control" id="minNotional" placeholder="0.1" defaultValue={symbol.minNotional} required onChange={onInputChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="minLotSize">Min Lot Size:</label>
                                                <input type="text" className="form-control" id="minLotSize" placeholder="0.1" defaultValue={symbol.minLotSize} required onChange={onInputChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            {
                                error
                                    ? <div className="alert alert-danger">{error}</div>
                                    : <React.Fragment></React.Fragment>
                            }
                            <button type="submit" className="btn btn-sm btn-primary">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SymbolModal;