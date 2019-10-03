# swagger_client.CryptoLanguageApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sentiment_get_crypto_sentiment**](CryptoLanguageApi.md#sentiment_get_crypto_sentiment) | **POST** /crypto_sentiment | Sentiment that reacts to crypto price changes and blockchain events e.g hard forks, chain splits.
[**sentiment_get_entities**](CryptoLanguageApi.md#sentiment_get_entities) | **POST** /get_entities | General Sentiment Analysis scoring
[**sentiment_get_entities_sentiment**](CryptoLanguageApi.md#sentiment_get_entities_sentiment) | **POST** /get_entities_sentiment | Gets entities and the sentiment for each entity, as well as the importance they have towards the sentiment of the general sentiment
[**sentiment_get_sentiment_score**](CryptoLanguageApi.md#sentiment_get_sentiment_score) | **POST** /general_sentiment | General Sentiment Analysis scoring

# **sentiment_get_crypto_sentiment**
> Sentiment sentiment_get_crypto_sentiment(body)

Sentiment that reacts to crypto price changes and blockchain events e.g hard forks, chain splits.

Gives a 0 to 1 score, depending on bullish/negative sentiment. Our neural network has been trained on

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CryptoLanguageApi()
body = swagger_client.Body4() # Body4 | String of text to be analyzed.It can be a any language supported by the Google Translate API.  Automatically translated.

try:
    # Sentiment that reacts to crypto price changes and blockchain events e.g hard forks, chain splits.
    api_response = api_instance.sentiment_get_crypto_sentiment(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoLanguageApi->sentiment_get_crypto_sentiment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body4**](Body4.md)| String of text to be analyzed.It can be a any language supported by the Google Translate API.  Automatically translated. | 

### Return type

[**Sentiment**](Sentiment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sentiment_get_entities**
> Entity sentiment_get_entities(body)

General Sentiment Analysis scoring

Gives a 0 to 1 score, depending on positive/negative sentiment

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CryptoLanguageApi()
body = swagger_client.Body5() # Body5 | Sentence to be analyzed. It can be any string of text. We support translation

try:
    # General Sentiment Analysis scoring
    api_response = api_instance.sentiment_get_entities(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoLanguageApi->sentiment_get_entities: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body5**](Body5.md)| Sentence to be analyzed. It can be any string of text. We support translation | 

### Return type

[**Entity**](Entity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sentiment_get_entities_sentiment**
> Entities sentiment_get_entities_sentiment(body)

Gets entities and the sentiment for each entity, as well as the importance they have towards the sentiment of the general sentiment

Gives a 0 to 1 score, depending on positive/negative sentiment for each entity, as well as the importance they have towards the sentiment of the general sentiment.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CryptoLanguageApi()
body = swagger_client.Body6() # Body6 | Sentence to be analyzed. It can be any string of text. We support translation

try:
    # Gets entities and the sentiment for each entity, as well as the importance they have towards the sentiment of the general sentiment
    api_response = api_instance.sentiment_get_entities_sentiment(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoLanguageApi->sentiment_get_entities_sentiment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body6**](Body6.md)| Sentence to be analyzed. It can be any string of text. We support translation | 

### Return type

[**Entities**](Entities.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sentiment_get_sentiment_score**
> Sentiment sentiment_get_sentiment_score(body)

General Sentiment Analysis scoring

Gives a 0 to 1 score, depending on positive/negative sentiment. Giving more importance to some words

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CryptoLanguageApi()
body = swagger_client.Body3() # Body3 | String of text to be analyzed.It can be a any language supported by the Google Translate API.  Automatically translated.

try:
    # General Sentiment Analysis scoring
    api_response = api_instance.sentiment_get_sentiment_score(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoLanguageApi->sentiment_get_sentiment_score: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body3**](Body3.md)| String of text to be analyzed.It can be a any language supported by the Google Translate API.  Automatically translated. | 

### Return type

[**Sentiment**](Sentiment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

