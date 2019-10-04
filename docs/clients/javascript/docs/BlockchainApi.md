# BrainrexApi.BlockchainApi

All URIs are relative to *https://0.0.0.0:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockchainGetEthereumPrice**](clients/javascript/docs/BlockchainApi.md#blockchainGetEthereumPrice) | **GET** /get_ethereum_price | Lastest price quote for Ether
[**blockchainGetEthereumSupply**](clients/javascript/docs/BlockchainApi.md#blockchainGetEthereumSupply) | **GET** /get_ethereum_supply | Total Supply of Ether
[**blockchainListBlockchains**](clients/javascript/docs/BlockchainApi.md#blockchainListBlockchains) | **GET** /list_blockchain | The blockchains data structure supported by the Brainrex API


<a name="blockchainGetEthereumPrice"></a>
# **blockchainGetEthereumPrice**
> &#39;String&#39; blockchainGetEthereumPrice()

Lastest price quote for Ether

Latest price being quoted of Ether.

### Example
```javascript
var BrainrexApi = require('brainrex_api');

var apiInstance = new BrainrexApi.BlockchainApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blockchainGetEthereumPrice(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="blockchainGetEthereumSupply"></a>
# **blockchainGetEthereumSupply**
> &#39;String&#39; blockchainGetEthereumSupply()

Total Supply of Ether

Total supply of Ethereum coins that have been mined.

### Example
```javascript
var BrainrexApi = require('brainrex_api');

var apiInstance = new BrainrexApi.BlockchainApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blockchainGetEthereumSupply(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="blockchainListBlockchains"></a>
# **blockchainListBlockchains**
> [Object] blockchainListBlockchains()

The blockchains data structure supported by the Brainrex API

List of supported blockchains networks for analysis. The full history of the networks are available.

### Example
```javascript
var BrainrexApi = require('brainrex_api');

var apiInstance = new BrainrexApi.BlockchainApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blockchainListBlockchains(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
