# brainrex_api.LibraApi

All URIs are relative to *http://0.0.0.0:5000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**libra_get_state**](LibraApi.md#libra_get_state) | **GET** /libra/account/get_state | Get account state
[**libra_stats**](LibraApi.md#libra_stats) | **GET** /libra/statistics | Useful stats about libra testnet


# **libra_get_state**
> list[LibraStats] libra_get_state(account_hash)

Get account state

The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.LibraApi()
account_hash = 'account_hash_example' # str | Account .

try:
    # Get account state
    api_response = api_instance.libra_get_state(account_hash)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LibraApi->libra_get_state: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_hash** | **str**| Account . | 

### Return type

[**list[LibraStats]**](LibraStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **libra_stats**
> list[LibraStats] libra_stats(start_date, end_date=end_date)

Useful stats about libra testnet

The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.LibraApi()
start_date = '2013-10-20T19:20:30+01:00' # datetime | Longitude component of start location.
end_date = '2013-10-20T19:20:30+01:00' # datetime | Unique customer identifier to be used for experience customization. (optional)

try:
    # Useful stats about libra testnet
    api_response = api_instance.libra_stats(start_date, end_date=end_date)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LibraApi->libra_stats: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **datetime**| Longitude component of start location. | 
 **end_date** | **datetime**| Unique customer identifier to be used for experience customization. | [optional] 

### Return type

[**list[LibraStats]**](LibraStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

