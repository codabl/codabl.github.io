# IO.Swagger.Api.SentimentAnalysisApi

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SentimentGetPriceSentiment**](SentimentAnalysisApi.md#sentimentgetpricesentiment) | **POST** /get_buy_sentiment | Sentiment analysis score using a model trained for buy signals.
[**SentimentGetSentiment**](SentimentAnalysisApi.md#sentimentgetsentiment) | **POST** /get_sentiment | Sentiment analysis for any given blob of text


<a name="sentimentgetpricesentiment"></a>
# **SentimentGetPriceSentiment**
> string SentimentGetPriceSentiment (Text1 text)

Sentiment analysis score using a model trained for buy signals.

Gives a 0 to 1 score, depending on buy/sell sentiment

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SentimentGetPriceSentimentExample
    {
        public void main()
        {
            var apiInstance = new SentimentAnalysisApi();
            var text = new Text1(); // Text1 | String of text to be analyzed. I can be in any language.

            try
            {
                // Sentiment analysis score using a model trained for buy signals.
                string result = apiInstance.SentimentGetPriceSentiment(text);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SentimentAnalysisApi.SentimentGetPriceSentiment: " + e.Message );
            }
        }
    }
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

<a name="sentimentgetsentiment"></a>
# **SentimentGetSentiment**
> string SentimentGetSentiment (Text text)

Sentiment analysis for any given blob of text

Gives a -1 to 1 score, depending on bearish/bullish sentiment

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SentimentGetSentimentExample
    {
        public void main()
        {
            var apiInstance = new SentimentAnalysisApi();
            var text = new Text(); // Text | String of text to be analyzed. I can be in any language.

            try
            {
                // Sentiment analysis for any given blob of text
                string result = apiInstance.SentimentGetSentiment(text);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SentimentAnalysisApi.SentimentGetSentiment: " + e.Message );
            }
        }
    }
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

