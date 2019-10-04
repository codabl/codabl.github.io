# Swagger\Client\FaceIDApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**faceidExtractFace**](FaceIDApi.md#faceidextractface) | **POST** /extract_face | Extracts and validates photo id for passports
[**faceidExtractMrz**](FaceIDApi.md#faceidextractmrz) | **POST** /extract_mrz | Extracts and validates Machine Readable Zones for passports
[**faceidFaceMatching**](FaceIDApi.md#faceidfacematching) | **POST** /verify_face | Matches the Face extracted from passport to a selfie uploaded by client

# **faceidExtractFace**
> \Swagger\Client\Model\MRZ faceidExtractFace($filename)

Extracts and validates photo id for passports

Read the list of supported exchanges in the Market Data API

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\FaceIDApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filename = array("filename_example"); // string[] | 

try {
    $result = $apiInstance->faceidExtractFace($filename);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FaceIDApi->faceidExtractFace: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | [**string[]**](../Model/string.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\MRZ**](../Model/MRZ.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **faceidExtractMrz**
> \Swagger\Client\Model\MRZ faceidExtractMrz($filename)

Extracts and validates Machine Readable Zones for passports

Extracts and validates Machine Readable Zones for passports

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\FaceIDApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filename = array("filename_example"); // string[] | 

try {
    $result = $apiInstance->faceidExtractMrz($filename);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FaceIDApi->faceidExtractMrz: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | [**string[]**](../Model/string.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\MRZ**](../Model/MRZ.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **faceidFaceMatching**
> string faceidFaceMatching($filename)

Matches the Face extracted from passport to a selfie uploaded by client

Read the list of supported exchanges in the Market Data API

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\FaceIDApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$filename = array("filename_example"); // string[] | 

try {
    $result = $apiInstance->faceidFaceMatching($filename);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling FaceIDApi->faceidFaceMatching: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | [**string[]**](../Model/string.md)|  | [optional]

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

