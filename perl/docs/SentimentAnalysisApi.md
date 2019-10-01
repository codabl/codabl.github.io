# WWW::SwaggerClient::SentimentAnalysisApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::SentimentAnalysisApi;
```

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sentiment_get_price_sentiment**](SentimentAnalysisApi.md#sentiment_get_price_sentiment) | **POST** /get_buy_sentiment | Sentiment analysis score using a model trained for buy signals.
[**sentiment_get_sentiment**](SentimentAnalysisApi.md#sentiment_get_sentiment) | **POST** /get_sentiment | Sentiment analysis for any given blob of text


# **sentiment_get_price_sentiment**
> string sentiment_get_price_sentiment(text => $text)

Sentiment analysis score using a model trained for buy signals.

Gives a 0 to 1 score, depending on buy/sell sentiment

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::SentimentAnalysisApi;
my $api_instance = WWW::SwaggerClient::SentimentAnalysisApi->new(
);

my $text = WWW::SwaggerClient::Object::Text1->new(); # Text1 | String of text to be analyzed. I can be in any language.

eval { 
    my $result = $api_instance->sentiment_get_price_sentiment(text => $text);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SentimentAnalysisApi->sentiment_get_price_sentiment: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text1**](Text1.md)| String of text to be analyzed. I can be in any language. | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sentiment_get_sentiment**
> string sentiment_get_sentiment(text => $text)

Sentiment analysis for any given blob of text

Gives a -1 to 1 score, depending on bearish/bullish sentiment

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::SentimentAnalysisApi;
my $api_instance = WWW::SwaggerClient::SentimentAnalysisApi->new(
);

my $text = WWW::SwaggerClient::Object::Text->new(); # Text | String of text to be analyzed. I can be in any language.

eval { 
    my $result = $api_instance->sentiment_get_sentiment(text => $text);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SentimentAnalysisApi->sentiment_get_sentiment: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text**](Text.md)| String of text to be analyzed. I can be in any language. | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

