# Getting Started with the Brainrex API
Welcome to Brainrex! Get familiar with the Brainrex products and explore their features:



Welcome to the Brainrex API explorer, we make analytics tools for crypto and blockchain. Our currently propiertary models offer sentiment analysis, market making, blockchain monitoring and face-id verification. This AI models can be consumed from this API. We also offer integrations to open data and propietary data providers, as well as free test data we collect. There is a collection of data transformation tools. Join our Telegram group to get the latest news and ask questions [https://t.me/brainrex, #brainrex](https://t.me/brainrex). More about Brainrex at [https://brainrex.com](http://brainrex.com). Full Documentation can be found at [https://brainrexapi.github.io/docs](https://brainrexapi.github.io/docs)




## Client libraries available in the following programming lanaguges.
 - [Python](python/README.md)
 - [Bash](bash/README.md)
 - [C-Sharp](c-sharp/README.md)
 - [Go](go/README.md)
 - [Haskell](haskell/README.md)
 - [Java](java/README.md)
 - [Javascript](javascript/README.md)
 - [Perl](perl/README.md)
 - [PHP](php/README.md)
 - [Python](python/README.md)
 - [R](r/README.md)
 - [Rust](rust/README.md)
 - [Ruby](ruby/README.md)



## Available endpoints
## Full Documentation for API Endpoints

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BlockchainApi* | [**blockchainAverageTx**] | **POST** /average_tx_fee | Calculate average transccion fee of a given blockchain
*BlockchainApi* | [**blockchainList**] | **GET** /list_blockchain | The blockchains data structure supported by the Brainrex API
*CryptoApi* | [**exchangesDownloadCandles**] | **POST** /download_candles | Downloads candle format market data
*CryptoApi* | [**exchangesList**] | **GET** /markets | The markets data structure supported by the Brainrex Market API
*CryptoApi* | [**exchangesMarketmaker**] | **POST** /market_making | Market Making as a Service API.
*CryptoApi* | [**exchangesRead**] | **GET** /exchanges | The exchanges data structure supported by the Brainrex API
*CryptoApi* | [**exchangesTickerDataDownload**]| **POST** /download_ticker | Download raw ticker data from major crypto markets
*SentimentAnalysisApi* | [**sentimentGetPriceSentiment**] | **POST** /get_buy_sentiment | Sentiment analysis score using a model trained for buy signals.
*SentimentAnalysisApi* | [**sentimentGetSentiment**] | **POST** /get_sentiment | Sentiment analysis for any given blob of text
