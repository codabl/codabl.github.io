# Swagger\Client\LibraApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLibraStats**](LibraApi.md#getlibrastats) | **GET** /get_libraStats/{byDays} | Info for a specific pet

# **getLibraStats**
> \Swagger\Client\Model\LibraStats getLibraStats($by_days)

Info for a specific pet

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\LibraApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$by_days = "by_days_example"; // string | The date

try {
    $result = $apiInstance->getLibraStats($by_days);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LibraApi->getLibraStats: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **by_days** | **string**| The date |

### Return type

[**\Swagger\Client\Model\LibraStats**](../Model/LibraStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

