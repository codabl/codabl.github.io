# Swagger\Client\BlockchainApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockchainGetEthereumPrice**](BlockchainApi.md#blockchaingetethereumprice) | **GET** /get_price_ | Lastest price quote for Ether
[**blockchainGetEthereumSupply**](BlockchainApi.md#blockchaingetethereumsupply) | **GET** /get_ethereum_supply | Total Supply of Ether
[**blockchainListBlockchains**](BlockchainApi.md#blockchainlistblockchains) | **GET** /list_blockchain | The blockchains data structure supported by the Brainrex API

# **blockchainGetEthereumPrice**
> string blockchainGetEthereumPrice()

Lastest price quote for Ether

Latest price being quoted of Ether.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\BlockchainApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->blockchainGetEthereumPrice();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BlockchainApi->blockchainGetEthereumPrice: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **blockchainGetEthereumSupply**
> string blockchainGetEthereumSupply()

Total Supply of Ether

Total supply of Ethereum coins that have been mined.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\BlockchainApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->blockchainGetEthereumSupply();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BlockchainApi->blockchainGetEthereumSupply: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **blockchainListBlockchains**
> null[] blockchainListBlockchains()

The blockchains data structure supported by the Brainrex API

List of supported blockchains networks for analysis. The full history of the networks are available.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\BlockchainApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->blockchainListBlockchains();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling BlockchainApi->blockchainListBlockchains: ', $e->getMessage(), PHP_EOL;
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

