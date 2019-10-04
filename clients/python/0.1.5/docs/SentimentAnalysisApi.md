# swagger_client.SentimentAnalysisApi

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sentiment_get_price_sentiment**](SentimentAnalysisApi.md#sentiment_get_price_sentiment) | **POST** /get_buy_sentiment | Sentiment analysis score using a model trained for buy signals.
[**sentiment_get_sentiment**](SentimentAnalysisApi.md#sentiment_get_sentiment) | **POST** /get_sentiment | Sentiment analysis for any given blob of text


# **sentiment_get_price_sentiment**
> str sentiment_get_price_sentiment(text)

Sentiment analysis score using a model trained for buy signals.

Gives a 0 to 1 score, depending on buy/sell sentiment

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SentimentAnalysisApi()
text = swagger_client.Text1() # Text1 | String of text to be analyzed. I can be in any language.

try:
    # Sentiment analysis score using a model trained for buy signals.
    api_response = api_instance.sentiment_get_price_sentiment(text)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SentimentAnalysisApi->sentiment_get_price_sentiment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text1**](Text1.md)| String of text to be analyzed. I can be in any language. | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sentiment_get_sentiment**
> str sentiment_get_sentiment(text)

Sentiment analysis for any given blob of text

Gives a -1 to 1 score, depending on bearish/bullish sentiment

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.SentimentAnalysisApi()
text = swagger_client.Text() # Text | String of text to be analyzed. I can be in any language.

try:
    # Sentiment analysis for any given blob of text
    api_response = api_instance.sentiment_get_sentiment(text)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SentimentAnalysisApi->sentiment_get_sentiment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text**](Text.md)| String of text to be analyzed. I can be in any language. | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

