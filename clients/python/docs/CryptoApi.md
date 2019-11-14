# brainrex_api.CryptoApi

All URIs are relative to *http://0.0.0.0:5000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**crypto_read**](CryptoApi.md#crypto_read) | **GET** /crypto/exchanges | The exchanges data structure supported by the Brainrex API


# **crypto_read**
> list[InlineResponse200] crypto_read()

The exchanges data structure supported by the Brainrex API

Read the list of supported exchanges in the Market Data API

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.CryptoApi()

try:
    # The exchanges data structure supported by the Brainrex API
    api_response = api_instance.crypto_read()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoApi->crypto_read: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[InlineResponse200]**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

