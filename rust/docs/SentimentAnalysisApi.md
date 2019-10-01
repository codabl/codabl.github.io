# \SentimentAnalysisApi

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sentiment_get_price_sentiment**](SentimentAnalysisApi.md#sentiment_get_price_sentiment) | **Post** /get_buy_sentiment | Sentiment analysis score using a model trained for buy signals.
[**sentiment_get_sentiment**](SentimentAnalysisApi.md#sentiment_get_sentiment) | **Post** /get_sentiment | Sentiment analysis for any given blob of text


# **sentiment_get_price_sentiment**
> String sentiment_get_price_sentiment(text)
Sentiment analysis score using a model trained for buy signals.

Gives a 0 to 1 score, depending on buy/sell sentiment

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **text** | [**Text1**](Text1.md)| String of text to be analyzed. I can be in any language. | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sentiment_get_sentiment**
> String sentiment_get_sentiment(text)
Sentiment analysis for any given blob of text

Gives a -1 to 1 score, depending on bearish/bullish sentiment

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **text** | [**Text**](Text.md)| String of text to be analyzed. I can be in any language. | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

