import React, { useState, useEffect } from 'react';
import { getBalance } from '../../../services/ExchangeService';
import { useHistory } from 'react-router-dom';
import '../Dashboard.css';

function Wallet(props) {

    //if(!props || !props.data) return <React.Fragment></React.Fragment>;

    const history = useHistory();

    const [balances, setBalances] = useState([]);

    useEffect(() => {
        let isMounted = true; // controla se o componente ainda está montado

        const token = localStorage.getItem('token');
        getBalance(token)
            .then(info => {

                const balances = Object.entries(info).map(item => {
                    return {
                        symbol: item[0],
                        available: item[1].available,
                        onOrder: item[1].onOrder
                    }
                })

                setBalances(balances);
            })
            .catch(err => {
                if (isMounted) {
                    if (err.response && err.response.status === 401) return history.push('/');
                    console.error(err);
                }
            });

        return () => {
            isMounted = false; // desativa atualizações se desmontar
        };
    }, [props.data]);

    return (
        <div className='col-md-6 col-sm-12 mb-4'>
            <div className='card border-0 shadow'>
                <div className='card-header'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='fs-5 fw-bold-mb-0'>Wallet</h2>
                        </div>
                    </div>
                </div>
                <div className='table-responsive divScroll'>
                    <table className='table align-items-center table-flush table-sm table-hover tableFixHead'>
                        <thead className='thead-light'>
                            <tr>
                                <th className='border-bottom' scope='col'>Symbol</th>
                                <th className='border-bottom col-2' scope='col'>Free</th>
                                <th className='border-bottom col-2' scope='col'>Lock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                balances.map(item => (
                                    <tr key={`wallet${item.symbol}`}>
                                        <td className='text-gray-900'>{item.symbol}</td>
                                        <td className='text-gray-900'>{item.available?.substring(0, 8) || "0.00000000"}</td>
                                        <td className='text-gray-900'>{item.onOrder?.substring(0, 8) || "0.00000000"}</td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>

    )
}

export default Wallet;