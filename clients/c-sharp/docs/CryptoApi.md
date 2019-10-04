# IO.Swagger.Api.CryptoApi

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExchangesDownloadCandles**](CryptoApi.md#exchangesdownloadcandles) | **POST** /download_candles | Downloads candle format market data
[**ExchangesList**](CryptoApi.md#exchangeslist) | **GET** /markets | The markets data structure supported by the Brainrex Market API
[**ExchangesMarketmaker**](CryptoApi.md#exchangesmarketmaker) | **POST** /market_making | Market Making as a Service API.
[**ExchangesRead**](CryptoApi.md#exchangesread) | **GET** /exchanges | The exchanges data structure supported by the Brainrex API
[**ExchangesTickerDataDownload**](CryptoApi.md#exchangestickerdatadownload) | **POST** /download_ticker | Download raw ticker data from major crypto markets


<a name="exchangesdownloadcandles"></a>
# **ExchangesDownloadCandles**
> InlineResponse201 ExchangesDownloadCandles (Request2 request)

Downloads candle format market data

Returns a list of candle data from specified market and data range

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ExchangesDownloadCandlesExample
    {
        public void main()
        {
            var apiInstance = new CryptoApi();
            var request = new Request2(); // Request2 | Person to create

            try
            {
                // Downloads candle format market data
                InlineResponse201 result = apiInstance.ExchangesDownloadCandles(request);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CryptoApi.ExchangesDownloadCandles: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request2**](Request2.md)| Person to create | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="exchangeslist"></a>
# **ExchangesList**
> List<Object> ExchangesList ()

The markets data structure supported by the Brainrex Market API

Read the list of supported markets ( currency pairs ) in each exchange

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ExchangesListExample
    {
        public void main()
        {
            var apiInstance = new CryptoApi();

            try
            {
                // The markets data structure supported by the Brainrex Market API
                List&lt;Object&gt; result = apiInstance.ExchangesList();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CryptoApi.ExchangesList: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List<Object>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="exchangesmarketmaker"></a>
# **ExchangesMarketmaker**
> InlineResponse2011 ExchangesMarketmaker (Request3 request)

Market Making as a Service API.

Our AI will trade at the risk level you want, you need to provide your credential to the exchange you are trading at.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ExchangesMarketmakerExample
    {
        public void main()
        {
            var apiInstance = new CryptoApi();
            var request = new Request3(); // Request3 | Name of exchange and currency pair you want to provide liquidity

            try
            {
                // Market Making as a Service API.
                InlineResponse2011 result = apiInstance.ExchangesMarketmaker(request);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CryptoApi.ExchangesMarketmaker: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request3**](Request3.md)| Name of exchange and currency pair you want to provide liquidity | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="exchangesread"></a>
# **ExchangesRead**
> List<Object> ExchangesRead ()

The exchanges data structure supported by the Brainrex API

Read the list of supported exchanges in the Market Data API

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ExchangesReadExample
    {
        public void main()
        {
            var apiInstance = new CryptoApi();

            try
            {
                // The exchanges data structure supported by the Brainrex API
                List&lt;Object&gt; result = apiInstance.ExchangesRead();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CryptoApi.ExchangesRead: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List<Object>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="exchangestickerdatadownload"></a>
# **ExchangesTickerDataDownload**
> InlineResponse201 ExchangesTickerDataDownload (Request1 request)

Download raw ticker data from major crypto markets

Downloads specified asset class and market and time frame. Of our raw ticker data format

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ExchangesTickerDataDownloadExample
    {
        public void main()
        {
            var apiInstance = new CryptoApi();
            var request = new Request1(); // Request1 | Person to create

            try
            {
                // Download raw ticker data from major crypto markets
                InlineResponse201 result = apiInstance.ExchangesTickerDataDownload(request);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CryptoApi.ExchangesTickerDataDownload: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request1**](Request1.md)| Person to create | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

