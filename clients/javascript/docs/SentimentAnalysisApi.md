# BrainrexApi.SentimentAnalysisApi

All URIs are relative to *https://0.0.0.0:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sentimentGetSentimentScore**](SentimentAnalysisApi.md#sentimentGetSentimentScore) | **POST** /get_sentiment_score | General Sentiment Analysis scoring


<a name="sentimentGetSentimentScore"></a>
# **sentimentGetSentimentScore**
> &#39;String&#39; sentimentGetSentimentScore(text)

General Sentiment Analysis scoring

Gives a 0 to 1 score, depending on positive/negative sentiment

### Example
```javascript
var BrainrexApi = require('brainrex_api');

var apiInstance = new BrainrexApi.SentimentAnalysisApi();

var text = new BrainrexApi.Text(); // Text | String of text to be analyzed.It can be a any language supported by the Google Translate API.  Automatically translated.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sentimentGetSentimentScore(text, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text**](Text.md)| String of text to be analyzed.It can be a any language supported by the Google Translate API.  Automatically translated. |

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
