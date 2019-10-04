# swagger_client.LibraApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_libra_stats**](LibraApi.md#get_libra_stats) | **GET** /get_libraStats/{byDays} | Info for a specific pet

# **get_libra_stats**
> LibraStats get_libra_stats(by_days)

Info for a specific pet

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.LibraApi()
by_days = 'by_days_example' # str | The date

try:
    # Info for a specific pet
    api_response = api_instance.get_libra_stats(by_days)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LibraApi->get_libra_stats: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **by_days** | **str**| The date | 

### Return type

[**LibraStats**](LibraStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

