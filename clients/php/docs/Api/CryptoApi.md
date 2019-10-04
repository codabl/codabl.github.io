# Swagger\Client\CryptoApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cryptoDownloadCandles**](CryptoApi.md#cryptodownloadcandles) | **POST** /download_candles | Downloads candle format market data
[**cryptoListExchanges**](CryptoApi.md#cryptolistexchanges) | **GET** /exchanges | Available exchanges for the Brainrex Data
[**cryptoListMarkets**](CryptoApi.md#cryptolistmarkets) | **GET** /markets | The markets data structure supported by the Brainrex Market API
[**cryptoTickerDataDownload**](CryptoApi.md#cryptotickerdatadownload) | **POST** /download_ticker | Download raw ticker data from major crypto markets

# **cryptoDownloadCandles**
> \Swagger\Client\Model\OHCLV cryptoDownloadCandles($body)

Downloads candle format market data

Returns a list of candle data from specified market and data range

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CryptoApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\Body8(); // \Swagger\Client\Model\Body8 | Person to create

try {
    $result = $apiInstance->cryptoDownloadCandles($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoApi->cryptoDownloadCandles: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\Body8**](../Model/Body8.md)| Person to create |

### Return type

[**\Swagger\Client\Model\OHCLV**](../Model/OHCLV.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **cryptoListExchanges**
> null[] cryptoListExchanges()

Available exchanges for the Brainrex Data

Read the list of supported exchanges in the Market Data API

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CryptoApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->cryptoListExchanges();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoApi->cryptoListExchanges: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

**null[]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **cryptoListMarkets**
> null[] cryptoListMarkets()

The markets data structure supported by the Brainrex Market API

Read the list of supported markets ( currency pairs ) in each exchange

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CryptoApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->cryptoListMarkets();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoApi->cryptoListMarkets: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

**null[]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **cryptoTickerDataDownload**
> \Swagger\Client\Model\OHCLV cryptoTickerDataDownload($body)

Download raw ticker data from major crypto markets

Downloads specified asset class and market and time frame. Of our raw ticker data format

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\CryptoApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\Body7(); // \Swagger\Client\Model\Body7 | Person to create

try {
    $result = $apiInstance->cryptoTickerDataDownload($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoApi->cryptoTickerDataDownload: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\Body7**](../Model/Body7.md)| Person to create |

### Return type

[**\Swagger\Client\Model\OHCLV**](../Model/OHCLV.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

