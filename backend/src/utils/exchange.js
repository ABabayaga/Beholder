const Binance  = require('node-binance-api');

module.exports = (settings) => {

    if(!settings) throw new Error('The settings object is required to connect on enchange.'); 

    const binance  = new Binance({
        APIKEY: settings.accessKey,
        APISECRET: settings.secretKey,
        family: 0,
        urls: {
            base: settings.apiUrl.endsWith('/') ? settings.apiUrl : settings.apiUrl + '/'
        }
    })

    function exchangeInfo(){
        return binance.exchangeInfo();
    }

    function miniTickerStream(callback){
        binance.websockets.miniTicker(markets => callback(markets));
    }

    
    function bookStream(callback) {
        const symbols = ['BTCUSDT', 'ETHUSDT']; // ou use settings.symbols se for dinâmico
    
        binance.websockets.bookTickers(symbols, order => {
            callback(order);
        });
    }

    return {
        exchangeInfo,
        miniTickerStream,
        bookStream
    }
}