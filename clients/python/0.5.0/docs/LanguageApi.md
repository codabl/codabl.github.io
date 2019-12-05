# brainrex_api.LanguageApi

All URIs are relative to *http://0.0.0.0:5000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**language_get_entities**](LanguageApi.md#language_get_entities) | **POST** /language/entities | Entity Analysis
[**language_get_general_sentiment**](LanguageApi.md#language_get_general_sentiment) | **POST** /language/sentiment | Scores blob of text from (-1 to +1)
[**language_get_price_sentiment**](LanguageApi.md#language_get_price_sentiment) | **POST** /language/get_buy_sentiment | Sentiment analysis score using a model trained for buy signals.


# **language_get_entities**
> list[Entities] language_get_entities(text)

Entity Analysis

The Entities Sentiment endpoint identifies known entities within a given text/document — including receipts, invoices, and contracts — and label them by types such as date, person, contact information, organization, location, events, products, and media. <br><br> This neural net can extract known entities in blockchain such as chain splits, hard forks, halvings. Cryptocurrency names e.g bitcoin cash, ethereum classic. And known crypto personalities and companies

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.LanguageApi()
text = brainrex_api.Text5() # Text5 | String of text in unicode format , documents need to parsed into string..

try:
    # Entity Analysis
    api_response = api_instance.language_get_entities(text)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LanguageApi->language_get_entities: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text5**](Text5.md)| String of text in unicode format , documents need to parsed into string.. | 

### Return type

[**list[Entities]**](Entities.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **language_get_general_sentiment**
> list[Sentiment] language_get_general_sentiment(text)

Scores blob of text from (-1 to +1)

The sentiment endpoint undestands general feeling or attiude of a given text. It scores a given text or document from -1 to +1.  And it is capable to understand domain speficig brainrex_language about the blockchain industry.<br><br> This neural net has been trained with billions of data points from popular social media sites, blogs,message boards and wiki pages. Addionatal data from blockchain networks and cryptocurrency markets is also fed into the neural net, making it capable to give an overal sentiment of the blockchain industry.

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.LanguageApi()
text = brainrex_api.Text7() # Text7 | String of text in unicode format , documents need to parsed into string..

try:
    # Scores blob of text from (-1 to +1)
    api_response = api_instance.language_get_general_sentiment(text)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LanguageApi->language_get_general_sentiment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text7**](Text7.md)| String of text in unicode format , documents need to parsed into string.. | 

### Return type

[**list[Sentiment]**](Sentiment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **language_get_price_sentiment**
> str language_get_price_sentiment(text)

Sentiment analysis score using a model trained for buy signals.

Gives a 0 to 1 score, depending on buy/sell sentiment

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.LanguageApi()
text = brainrex_api.Text6() # Text6 | String of text to be analyze for investor sentiment.

try:
    # Sentiment analysis score using a model trained for buy signals.
    api_response = api_instance.language_get_price_sentiment(text)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LanguageApi->language_get_price_sentiment: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text6**](Text6.md)| String of text to be analyze for investor sentiment. | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

