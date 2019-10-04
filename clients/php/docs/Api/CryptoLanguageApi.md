# Swagger\Client\CryptoLanguageApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sentimentGetCryptoSentiment**](CryptoLanguageApi.md#sentimentgetcryptosentiment) | **POST** /crypto_sentiment | Sentiment that reacts to crypto price changes and blockchain events e.g hard forks, chain splits.
[**sentimentGetEntities**](CryptoLanguageApi.md#sentimentgetentities) | **POST** /get_entities | General Sentiment Analysis scoring
[**sentimentGetEntitiesSentiment**](CryptoLanguageApi.md#sentimentgetentitiessentiment) | **POST** /get_entities_sentiment | Gets entities and the sentiment for each entity, as well as the importance they have towards the sentiment of the general sentiment
[**sentimentGetSentimentScore**](CryptoLanguageApi.md#sentimentgetsentimentscore) | **POST** /general_sentiment | General Sentiment Analysis scoring

# **sentimentGetCryptoSentiment**
> \Swagger\Client\Model\Sentiment sentimentGetCryptoSentiment($body)

Sentiment that reacts to crypto price changes and blockchain events e.g hard forks, chain splits.

Gives a 0 to 1 score, depending on bullish/negative sentiment. Our neural network has been trained on

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CryptoLanguageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\Body4(); // \Swagger\Client\Model\Body4 | String of text to be analyzed.It can be a any language supported by the Google Translate API.  Automatically translated.

try {
    $result = $apiInstance->sentimentGetCryptoSentiment($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoLanguageApi->sentimentGetCryptoSentiment: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\Body4**](../Model/Body4.md)| String of text to be analyzed.It can be a any language supported by the Google Translate API.  Automatically translated. |

### Return type

[**\Swagger\Client\Model\Sentiment**](../Model/Sentiment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **sentimentGetEntities**
> \Swagger\Client\Model\Entity sentimentGetEntities($body)

General Sentiment Analysis scoring

Gives a 0 to 1 score, depending on positive/negative sentiment

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CryptoLanguageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\Body5(); // \Swagger\Client\Model\Body5 | Sentence to be analyzed. It can be any string of text. We support translation

try {
    $result = $apiInstance->sentimentGetEntities($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoLanguageApi->sentimentGetEntities: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\Body5**](../Model/Body5.md)| Sentence to be analyzed. It can be any string of text. We support translation |

### Return type

[**\Swagger\Client\Model\Entity**](../Model/Entity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **sentimentGetEntitiesSentiment**
> \Swagger\Client\Model\Entities sentimentGetEntitiesSentiment($body)

Gets entities and the sentiment for each entity, as well as the importance they have towards the sentiment of the general sentiment

Gives a 0 to 1 score, depending on positive/negative sentiment for each entity, as well as the importance they have towards the sentiment of the general sentiment.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CryptoLanguageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\Body6(); // \Swagger\Client\Model\Body6 | Sentence to be analyzed. It can be any string of text. We support translation

try {
    $result = $apiInstance->sentimentGetEntitiesSentiment($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoLanguageApi->sentimentGetEntitiesSentiment: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\Body6**](../Model/Body6.md)| Sentence to be analyzed. It can be any string of text. We support translation |

### Return type

[**\Swagger\Client\Model\Entities**](../Model/Entities.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **sentimentGetSentimentScore**
> \Swagger\Client\Model\Sentiment sentimentGetSentimentScore($body)

General Sentiment Analysis scoring

Gives a 0 to 1 score, depending on positive/negative sentiment. Giving more importance to some words

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CryptoLanguageApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\Body3(); // \Swagger\Client\Model\Body3 | String of text to be analyzed.It can be a any language supported by the Google Translate API.  Automatically translated.

try {
    $result = $apiInstance->sentimentGetSentimentScore($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoLanguageApi->sentimentGetSentimentScore: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\Body3**](../Model/Body3.md)| String of text to be analyzed.It can be a any language supported by the Google Translate API.  Automatically translated. |

### Return type

[**\Swagger\Client\Model\Sentiment**](../Model/Sentiment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

