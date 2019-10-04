# \clients/go/docs/CryptoApi

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExchangesDownloadCandles**](clients/go/docs/clients/go/docs/CryptoApi.md#ExchangesDownloadCandles) | **Post** /download_candles | Downloads candle format market data
[**ExchangesList**](clients/go/docs/CryptoApi.md#ExchangesList) | **Get** /markets | The markets data structure supported by the Brainrex Market API
[**ExchangesMarketmaker**](clients/go/docs/CryptoApi.md#ExchangesMarketmaker) | **Post** /market_making | Market Making as a Service API.
[**ExchangesRead**](clients/go/docs/CryptoApi.md#ExchangesRead) | **Get** /exchanges | The exchanges data structure supported by the Brainrex API
[**ExchangesTickerDataDownload**](clients/go/docs/CryptoApi.md#ExchangesTickerDataDownload) | **Post** /download_ticker | Download raw ticker data from major crypto markets


# **ExchangesDownloadCandles**
> InlineResponse201 ExchangesDownloadCandles(ctx, request)
Downloads candle format market data

Returns a list of candle data from specified market and data range

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **request** | [**Request2**](clients/go/docs/Request2.md)| Person to create |

### Return type

[**InlineResponse201**](clients/go/docs/inline_response_201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ExchangesList**
> []interface{} ExchangesList(ctx, )
The markets data structure supported by the Brainrex Market API

Read the list of supported markets ( currency pairs ) in each exchange

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**[]interface{}**](interface{}.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ExchangesMarketmaker**
> InlineResponse2011 ExchangesMarketmaker(ctx, request)
Market Making as a Service API.

Our AI will trade at the risk level you want, you need to provide your credential to the exchange you are trading at.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **request** | [**Request3**](Request3.md)| Name of exchange and currency pair you want to provide liquidity |

### Return type

[**InlineResponse2011**](inline_response_201_1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ExchangesRead**
> []interface{} ExchangesRead(ctx, )
The exchanges data structure supported by the Brainrex API

Read the list of supported exchanges in the Market Data API

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**[]interface{}**](interface{}.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ExchangesTickerDataDownload**
> InlineResponse201 ExchangesTickerDataDownload(ctx, request)
Download raw ticker data from major crypto markets

Downloads specified asset class and market and time frame. Of our raw ticker data format

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **request** | [**Request1**](Request1.md)| Person to create |

### Return type

[**InlineResponse201**](inline_response_201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
