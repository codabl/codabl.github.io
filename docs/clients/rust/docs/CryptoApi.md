# \CryptoApi

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exchanges_download_candles**](CryptoApi.md#exchanges_download_candles) | **Post** /download_candles | Downloads candle format market data
[**exchanges_list**](CryptoApi.md#exchanges_list) | **Get** /markets | The markets data structure supported by the Brainrex Market API
[**exchanges_marketmaker**](CryptoApi.md#exchanges_marketmaker) | **Post** /market_making | Market Making as a Service API.
[**exchanges_read**](CryptoApi.md#exchanges_read) | **Get** /exchanges | The exchanges data structure supported by the Brainrex API
[**exchanges_ticker_data_download**](CryptoApi.md#exchanges_ticker_data_download) | **Post** /download_ticker | Download raw ticker data from major crypto markets


# **exchanges_download_candles**
> ::models::InlineResponse201 exchanges_download_candles(request)
Downloads candle format market data

Returns a list of candle data from specified market and data range

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **request** | [**Request2**](Request2.md)| Person to create | 

### Return type

[**::models::InlineResponse201**](inline_response_201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchanges_list**
> Vec<Value> exchanges_list()
The markets data structure supported by the Brainrex Market API

Read the list of supported markets ( currency pairs ) in each exchange

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**Vec<Value>**](Value.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchanges_marketmaker**
> ::models::InlineResponse2011 exchanges_marketmaker(request)
Market Making as a Service API.

Our AI will trade at the risk level you want, you need to provide your credential to the exchange you are trading at.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **request** | [**Request3**](Request3.md)| Name of exchange and currency pair you want to provide liquidity | 

### Return type

[**::models::InlineResponse2011**](inline_response_201_1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchanges_read**
> Vec<Value> exchanges_read()
The exchanges data structure supported by the Brainrex API

Read the list of supported exchanges in the Market Data API

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**Vec<Value>**](Value.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchanges_ticker_data_download**
> ::models::InlineResponse201 exchanges_ticker_data_download(request)
Download raw ticker data from major crypto markets

Downloads specified asset class and market and time frame. Of our raw ticker data format

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **request** | [**Request1**](Request1.md)| Person to create | 

### Return type

[**::models::InlineResponse201**](inline_response_201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

