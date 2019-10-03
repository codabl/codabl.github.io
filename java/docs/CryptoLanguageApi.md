# CryptoLanguageApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sentimentGetCryptoSentiment**](CryptoLanguageApi.md#sentimentGetCryptoSentiment) | **POST** /crypto_sentiment | Sentiment that reacts to crypto price changes and blockchain events e.g hard forks, chain splits.
[**sentimentGetEntities**](CryptoLanguageApi.md#sentimentGetEntities) | **POST** /get_entities | General Sentiment Analysis scoring
[**sentimentGetEntitiesSentiment**](CryptoLanguageApi.md#sentimentGetEntitiesSentiment) | **POST** /get_entities_sentiment | Gets entities and the sentiment for each entity, as well as the importance they have towards the sentiment of the general sentiment
[**sentimentGetSentimentScore**](CryptoLanguageApi.md#sentimentGetSentimentScore) | **POST** /general_sentiment | General Sentiment Analysis scoring

<a name="sentimentGetCryptoSentiment"></a>
# **sentimentGetCryptoSentiment**
> Sentiment sentimentGetCryptoSentiment(body)

Sentiment that reacts to crypto price changes and blockchain events e.g hard forks, chain splits.

Gives a 0 to 1 score, depending on bullish/negative sentiment. Our neural network has been trained on

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.CryptoLanguageApi;


CryptoLanguageApi apiInstance = new CryptoLanguageApi();
Body4 body = new Body4(); // Body4 | String of text to be analyzed.It can be a any language supported by the Google Translate API.  Automatically translated.
try {
    Sentiment result = apiInstance.sentimentGetCryptoSentiment(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CryptoLanguageApi#sentimentGetCryptoSentiment");
    e.printStackTrace();
}
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

<a name="sentimentGetEntities"></a>
# **sentimentGetEntities**
> Entity sentimentGetEntities(body)

General Sentiment Analysis scoring

Gives a 0 to 1 score, depending on positive/negative sentiment

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.CryptoLanguageApi;


CryptoLanguageApi apiInstance = new CryptoLanguageApi();
Body5 body = new Body5(); // Body5 | Sentence to be analyzed. It can be any string of text. We support translation
try {
    Entity result = apiInstance.sentimentGetEntities(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CryptoLanguageApi#sentimentGetEntities");
    e.printStackTrace();
}
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

<a name="sentimentGetEntitiesSentiment"></a>
# **sentimentGetEntitiesSentiment**
> Entities sentimentGetEntitiesSentiment(body)

Gets entities and the sentiment for each entity, as well as the importance they have towards the sentiment of the general sentiment

Gives a 0 to 1 score, depending on positive/negative sentiment for each entity, as well as the importance they have towards the sentiment of the general sentiment.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.CryptoLanguageApi;


CryptoLanguageApi apiInstance = new CryptoLanguageApi();
Body6 body = new Body6(); // Body6 | Sentence to be analyzed. It can be any string of text. We support translation
try {
    Entities result = apiInstance.sentimentGetEntitiesSentiment(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CryptoLanguageApi#sentimentGetEntitiesSentiment");
    e.printStackTrace();
}
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

<a name="sentimentGetSentimentScore"></a>
# **sentimentGetSentimentScore**
> Sentiment sentimentGetSentimentScore(body)

General Sentiment Analysis scoring

Gives a 0 to 1 score, depending on positive/negative sentiment. Giving more importance to some words

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.CryptoLanguageApi;


CryptoLanguageApi apiInstance = new CryptoLanguageApi();
Body3 body = new Body3(); // Body3 | String of text to be analyzed.It can be a any language supported by the Google Translate API.  Automatically translated.
try {
    Sentiment result = apiInstance.sentimentGetSentimentScore(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CryptoLanguageApi#sentimentGetSentimentScore");
    e.printStackTrace();
}
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

