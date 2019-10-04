# swagger_client.BlockchainApi

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockchain_average_tx**](BlockchainApi.md#blockchain_average_tx) | **POST** /average_tx_fee | Calculate average transccion fee of a given blockchain
[**blockchain_list**](BlockchainApi.md#blockchain_list) | **GET** /list_blockchain | The blockchains data structure supported by the Brainrex API


# **blockchain_average_tx**
> InlineResponse201 blockchain_average_tx(request)

Calculate average transccion fee of a given blockchain

Calculates the average trasnsaction fee of a given 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.BlockchainApi()
request = swagger_client.Request() # Request | Name of the blockchain and date range.

try:
    # Calculate average transccion fee of a given blockchain
    api_response = api_instance.blockchain_average_tx(request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BlockchainApi->blockchain_average_tx: %s\n" % e)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blockchain_list**
> list[object] blockchain_list()

The blockchains data structure supported by the Brainrex API

List of supported blockchains networks for analysis. The full history of the networks are available.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.BlockchainApi()

try:
    # The blockchains data structure supported by the Brainrex API
    api_response = api_instance.blockchain_list()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BlockchainApi->blockchain_list: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**list[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

