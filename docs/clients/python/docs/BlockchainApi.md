# swagger_client.BlockchainApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockchain_get_ethereum_price**](BlockchainApi.md#blockchain_get_ethereum_price) | **GET** /get_price_ | Lastest price quote for Ether
[**blockchain_get_ethereum_supply**](BlockchainApi.md#blockchain_get_ethereum_supply) | **GET** /get_ethereum_supply | Total Supply of Ether
[**blockchain_list_blockchains**](BlockchainApi.md#blockchain_list_blockchains) | **GET** /list_blockchain | The blockchains data structure supported by the Brainrex API

# **blockchain_get_ethereum_price**
> str blockchain_get_ethereum_price()

Lastest price quote for Ether

Latest price being quoted of Ether.

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
    # Lastest price quote for Ether
    api_response = api_instance.blockchain_get_ethereum_price()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BlockchainApi->blockchain_get_ethereum_price: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blockchain_get_ethereum_supply**
> str blockchain_get_ethereum_supply()

Total Supply of Ether

Total supply of Ethereum coins that have been mined.

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
    # Total Supply of Ether
    api_response = api_instance.blockchain_get_ethereum_supply()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BlockchainApi->blockchain_get_ethereum_supply: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blockchain_list_blockchains**
> list[Object] blockchain_list_blockchains()

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
    api_response = api_instance.blockchain_list_blockchains()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BlockchainApi->blockchain_list_blockchains: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[Object]**](Object.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

