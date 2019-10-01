# BrainrexApi.CryptoApi

All URIs are relative to *https://0.0.0.0:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cryptoDownloadCandles**](CryptoApi.md#cryptoDownloadCandles) | **POST** /download_candles | Downloads candle format market data
[**cryptoListExchanges**](CryptoApi.md#cryptoListExchanges) | **GET** /exchanges | The exchanges data structure supported by the Brainrex API
[**cryptoListMarkets**](CryptoApi.md#cryptoListMarkets) | **GET** /markets | The markets data structure supported by the Brainrex Market API
[**cryptoTickerDataDownload**](CryptoApi.md#cryptoTickerDataDownload) | **POST** /download_ticker | Download raw ticker data from major crypto markets


<a name="cryptoDownloadCandles"></a>
# **cryptoDownloadCandles**
> InlineResponse2011 cryptoDownloadCandles(request)

Downloads candle format market data

Returns a list of candle data from specified market and data range

### Example
```javascript
var BrainrexApi = require('brainrex_api');

var apiInstance = new BrainrexApi.CryptoApi();

var request = new BrainrexApi.Request1(); // Request1 | Person to create


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cryptoDownloadCandles(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request1**](Request1.md)| Person to create | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cryptoListExchanges"></a>
# **cryptoListExchanges**
> [Object] cryptoListExchanges()

The exchanges data structure supported by the Brainrex API

Read the list of supported exchanges in the Market Data API

### Example
```javascript
var BrainrexApi = require('brainrex_api');

var apiInstance = new BrainrexApi.CryptoApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cryptoListExchanges(callback);
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

<a name="cryptoListMarkets"></a>
# **cryptoListMarkets**
> [Object] cryptoListMarkets()

The markets data structure supported by the Brainrex Market API

Read the list of supported markets ( currency pairs ) in each exchange

### Example
```javascript
var BrainrexApi = require('brainrex_api');

var apiInstance = new BrainrexApi.CryptoApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cryptoListMarkets(callback);
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

<a name="cryptoTickerDataDownload"></a>
# **cryptoTickerDataDownload**
> InlineResponse201 cryptoTickerDataDownload(request)

Download raw ticker data from major crypto markets

Downloads specified asset class and market and time frame. Of our raw ticker data format

### Example
```javascript
var BrainrexApi = require('brainrex_api');

var apiInstance = new BrainrexApi.CryptoApi();

var request = new BrainrexApi.Request(); // Request | Person to create


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cryptoTickerDataDownload(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request**](Request.md)| Person to create | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

