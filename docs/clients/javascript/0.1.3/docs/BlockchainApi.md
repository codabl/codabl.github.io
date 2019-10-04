# BrainrexApi.BlockchainApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockchainAverageTx**](BlockchainApi.md#blockchainAverageTx) | **POST** /average_tx_fee | Calculate average transccion fee of a given blockchain
[**blockchainList**](BlockchainApi.md#blockchainList) | **GET** /list_blockchain | The blockchains data structure supported by the Brainrex API


<a name="blockchainAverageTx"></a>
# **blockchainAverageTx**
> InlineResponse201 blockchainAverageTx(request)

Calculate average transccion fee of a given blockchain

Calculates the average trasnsaction fee of a given 

### Example
```javascript
var BrainrexApi = require('brainrex_api');

var apiInstance = new BrainrexApi.BlockchainApi();

var request = new BrainrexApi.Request(); // Request | Name of the blockchain and date range.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blockchainAverageTx(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request**](Request.md)| Name of the blockchain and date range. | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="blockchainList"></a>
# **blockchainList**
> [Object] blockchainList()

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
apiInstance.blockchainList(callback);
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

