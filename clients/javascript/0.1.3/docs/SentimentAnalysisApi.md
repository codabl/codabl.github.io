# BrainrexApi.SentimentAnalysisApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sentimentGetPriceSentiment**](SentimentAnalysisApi.md#sentimentGetPriceSentiment) | **POST** /get_buy_sentiment | Sentiment analysis score using a model trained for buy signals.
[**sentimentGetSentiment**](SentimentAnalysisApi.md#sentimentGetSentiment) | **POST** /get_sentiment | General positive 


<a name="sentimentGetPriceSentiment"></a>
# **sentimentGetPriceSentiment**
> &#39;String&#39; sentimentGetPriceSentiment(text)

Sentiment analysis score using a model trained for buy signals.

Gives a 0 to 1 score, depending on buy/sell sentiment

### Example
```javascript
var BrainrexApi = require('brainrex_api');

var apiInstance = new BrainrexApi.SentimentAnalysisApi();

var text = new BrainrexApi.Text1(); // Text1 | String of text to be analyzed. I can be in any language.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sentimentGetPriceSentiment(text, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text1**](Text1.md)| String of text to be analyzed. I can be in any language. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sentimentGetSentiment"></a>
# **sentimentGetSentiment**
> &#39;String&#39; sentimentGetSentiment(text)

General positive 

Gives a -1 to 1 score, depending on bearish/bullish sentiment

### Example
```javascript
var BrainrexApi = require('brainrex_api');

var apiInstance = new BrainrexApi.SentimentAnalysisApi();

var text = new BrainrexApi.Text(); // Text | String of text to be analyzed. I can be in any language.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sentimentGetSentiment(text, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text**](Text.md)| String of text to be analyzed. I can be in any language. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

