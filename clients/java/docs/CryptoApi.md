# CryptoApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cryptoDownloadCandles**](clients/java/docsCryptoApi.md#cryptoDownloadCandles) | **POST** /download_candles | Downloads candle format market data
[**cryptoListExchanges**](clients/java/docsCryptoApi.md#cryptoListExchanges) | **GET** /exchanges | Available exchanges for the Brainrex Data
[**cryptoListMarkets**](clients/java/docsCryptoApi.md#cryptoListMarkets) | **GET** /markets | The markets data structure supported by the Brainrex Market API
[**cryptoTickerDataDownload**](clients/java/docsCryptoApi.md#cryptoTickerDataDownload) | **POST** /download_ticker | Download raw ticker data from major crypto markets

<a name="cryptoDownloadCandles"></a>
# **cryptoDownloadCandles**
> OHCLV cryptoDownloadCandles(body)

Downloads candle format market data

Returns a list of candle data from specified market and data range

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.CryptoApi;


CryptoApi apiInstance = new CryptoApi();
Body8 body = new Body8(); // Body8 | Person to create
try {
    OHCLV result = apiInstance.cryptoDownloadCandles(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CryptoApi#cryptoDownloadCandles");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body8**](Body8.md)| Person to create |

### Return type

[**OHCLV**](OHCLV.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cryptoListExchanges"></a>
# **cryptoListExchanges**
> List&lt;Object&gt; cryptoListExchanges()

Available exchanges for the Brainrex Data

Read the list of supported exchanges in the Market Data API

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.CryptoApi;


CryptoApi apiInstance = new CryptoApi();
try {
    List<Object> result = apiInstance.cryptoListExchanges();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CryptoApi#cryptoListExchanges");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List&lt;Object&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cryptoListMarkets"></a>
# **cryptoListMarkets**
> List&lt;Object&gt; cryptoListMarkets()

The markets data structure supported by the Brainrex Market API

Read the list of supported markets ( currency pairs ) in each exchange

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.CryptoApi;


CryptoApi apiInstance = new CryptoApi();
try {
    List<Object> result = apiInstance.cryptoListMarkets();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CryptoApi#cryptoListMarkets");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List&lt;Object&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cryptoTickerDataDownload"></a>
# **cryptoTickerDataDownload**
> OHCLV cryptoTickerDataDownload(body)

Download raw ticker data from major crypto markets

Downloads specified asset class and market and time frame. Of our raw ticker data format

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.CryptoApi;


CryptoApi apiInstance = new CryptoApi();
Body7 body = new Body7(); // Body7 | Person to create
try {
    OHCLV result = apiInstance.cryptoTickerDataDownload(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling CryptoApi#cryptoTickerDataDownload");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body7**](clients/java/docsBody7.md)| Person to create |

### Return type

[**OHCLV**](clients/java/docsOHCLV.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
