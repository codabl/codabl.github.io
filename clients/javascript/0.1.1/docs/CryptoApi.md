# BrainrexApiExplorer.CryptoApi

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exchangesDownloadCandles**](CryptoApi.md#exchangesDownloadCandles) | **POST** /download_candles | Downloads candle format market data
[**exchangesList**](CryptoApi.md#exchangesList) | **GET** /markets | The markets data structure supported by the Brainrex Market API
[**exchangesMarketmaker**](CryptoApi.md#exchangesMarketmaker) | **POST** /market_making | Market Making as a Service API.
[**exchangesRead**](CryptoApi.md#exchangesRead) | **GET** /exchanges | The exchanges data structure supported by the Brainrex API
[**exchangesTickerDataDownload**](CryptoApi.md#exchangesTickerDataDownload) | **POST** /download_ticker | Download raw ticker data from major crypto markets


<a name="exchangesDownloadCandles"></a>
# **exchangesDownloadCandles**
> InlineResponse201 exchangesDownloadCandles(request)

Downloads candle format market data

Returns a list of candle data from specified market and data range

### Example
```javascript
var BrainrexApiExplorer = require('brainrex_api_explorer');

var apiInstance = new BrainrexApiExplorer.CryptoApi();

var request = new BrainrexApiExplorer.Request2(); // Request2 | Person to create


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exchangesDownloadCandles(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request2**](Request2.md)| Person to create | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="exchangesList"></a>
# **exchangesList**
> [Object] exchangesList()

The markets data structure supported by the Brainrex Market API

Read the list of supported markets ( currency pairs ) in each exchange

### Example
```javascript
var BrainrexApiExplorer = require('brainrex_api_explorer');

var apiInstance = new BrainrexApiExplorer.CryptoApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exchangesList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="exchangesMarketmaker"></a>
# **exchangesMarketmaker**
> InlineResponse2011 exchangesMarketmaker(request)

Market Making as a Service API.

Our AI will trade at the risk level you want, you need to provide your credential to the exchange you are trading at.

### Example
```javascript
var BrainrexApiExplorer = require('brainrex_api_explorer');

var apiInstance = new BrainrexApiExplorer.CryptoApi();

var request = new BrainrexApiExplorer.Request3(); // Request3 | Name of exchange and currency pair you want to provide liquidity


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exchangesMarketmaker(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request3**](Request3.md)| Name of exchange and currency pair you want to provide liquidity | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="exchangesRead"></a>
# **exchangesRead**
> [Object] exchangesRead()

The exchanges data structure supported by the Brainrex API

Read the list of supported exchanges in the Market Data API

### Example
```javascript
var BrainrexApiExplorer = require('brainrex_api_explorer');

var apiInstance = new BrainrexApiExplorer.CryptoApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exchangesRead(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="exchangesTickerDataDownload"></a>
# **exchangesTickerDataDownload**
> InlineResponse201 exchangesTickerDataDownload(request)

Download raw ticker data from major crypto markets

Downloads specified asset class and market and time frame. Of our raw ticker data format

### Example
```javascript
var BrainrexApiExplorer = require('brainrex_api_explorer');

var apiInstance = new BrainrexApiExplorer.CryptoApi();

var request = new BrainrexApiExplorer.Request1(); // Request1 | Person to create


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.exchangesTickerDataDownload(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request1**](Request1.md)| Person to create | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

