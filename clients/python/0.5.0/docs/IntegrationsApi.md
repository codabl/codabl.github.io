# brainrex_api.IntegrationsApi

All URIs are relative to *http://0.0.0.0:5000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockchain_average_transactions**](IntegrationsApi.md#blockchain_average_transactions) | **GET** /blockchain/statistics | Programmable statistics about popular blockchain
[**crypto_get_candle_data**](IntegrationsApi.md#crypto_get_candle_data) | **POST** /crypto/get_candles | Downloads candle format market data
[**crypto_get_exchange_assets**](IntegrationsApi.md#crypto_get_exchange_assets) | **POST** /crypto/get_exchange_assets | Gets all currency pairs traded in selected exchange
[**crypto_get_orderbooks**](IntegrationsApi.md#crypto_get_orderbooks) | **POST** /crypto/get_orderbooks | Downloads candle format market data
[**crypto_get_supported_exchanges**](IntegrationsApi.md#crypto_get_supported_exchanges) | **GET** /crypto/get_supported_exchanges | Gets all cryptocurrency exchanges supported by the Brainrex API
[**crypto_get_ticker**](IntegrationsApi.md#crypto_get_ticker) | **POST** /crypto/get_ticker | Downloads candle format market data


# **blockchain_average_transactions**
> list[BlockchainStats] blockchain_average_transactions(blockchain_name, start_date, end_date=end_date, granularity=granularity)

Programmable statistics about popular blockchain

You can obtain statistics programatically, giving you the choice of time frame and granularity. 8 blockchains supported.

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.IntegrationsApi()
blockchain_name = 1.2 # float | Name of the blockchain.
start_date = '2013-10-20T19:20:30+01:00' # datetime | Start date of the query.
end_date = '2013-10-20T19:20:30+01:00' # datetime | . (optional)
granularity = 'granularity_example' # str | Unique identifier representing a specific product for a given latitude & longitude. (optional)

try:
    # Programmable statistics about popular blockchain
    api_response = api_instance.blockchain_average_transactions(blockchain_name, start_date, end_date=end_date, granularity=granularity)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling IntegrationsApi->blockchain_average_transactions: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain_name** | **float**| Name of the blockchain. | 
 **start_date** | **datetime**| Start date of the query. | 
 **end_date** | **datetime**| . | [optional] 
 **granularity** | **str**| Unique identifier representing a specific product for a given latitude &amp; longitude. | [optional] 

### Return type

[**list[BlockchainStats]**](BlockchainStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crypto_get_candle_data**
> OHCLV crypto_get_candle_data(text)

Downloads candle format market data

Returns a list of candle data from specified market and data range

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.IntegrationsApi()
text = brainrex_api.Text() # Text | Exchange, trading pair and date rage for data

try:
    # Downloads candle format market data
    api_response = api_instance.crypto_get_candle_data(text)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling IntegrationsApi->crypto_get_candle_data: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text**](Text.md)| Exchange, trading pair and date rage for data | 

### Return type

[**OHCLV**](OHCLV.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crypto_get_exchange_assets**
> OHCLV crypto_get_exchange_assets(text)

Gets all currency pairs traded in selected exchange

Returns a list of candle data from specified market and data range

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.IntegrationsApi()
text = brainrex_api.Text1() # Text1 | Name of the cryptocurrency exchange

try:
    # Gets all currency pairs traded in selected exchange
    api_response = api_instance.crypto_get_exchange_assets(text)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling IntegrationsApi->crypto_get_exchange_assets: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text1**](Text1.md)| Name of the cryptocurrency exchange | 

### Return type

[**OHCLV**](OHCLV.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crypto_get_orderbooks**
> OHCLV crypto_get_orderbooks(text)

Downloads candle format market data

Returns a list of candle data from specified market and data range

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.IntegrationsApi()
text = brainrex_api.Text2() # Text2 | Exchange, trading pair and date rage for data

try:
    # Downloads candle format market data
    api_response = api_instance.crypto_get_orderbooks(text)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling IntegrationsApi->crypto_get_orderbooks: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text2**](Text2.md)| Exchange, trading pair and date rage for data | 

### Return type

[**OHCLV**](OHCLV.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crypto_get_supported_exchanges**
> OHCLV crypto_get_supported_exchanges(text)

Gets all cryptocurrency exchanges supported by the Brainrex API

Returns a list of candle data from specified market and data range

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.IntegrationsApi()
text = brainrex_api.Text3() # Text3 | Name of the cryptocurrency exchange

try:
    # Gets all cryptocurrency exchanges supported by the Brainrex API
    api_response = api_instance.crypto_get_supported_exchanges(text)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling IntegrationsApi->crypto_get_supported_exchanges: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text3**](Text3.md)| Name of the cryptocurrency exchange | 

### Return type

[**OHCLV**](OHCLV.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crypto_get_ticker**
> OHCLV crypto_get_ticker(text)

Downloads candle format market data

Returns a list of candle data from specified market and data range

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.IntegrationsApi()
text = brainrex_api.Text4() # Text4 | Get ticker data from specified crypto exchange

try:
    # Downloads candle format market data
    api_response = api_instance.crypto_get_ticker(text)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling IntegrationsApi->crypto_get_ticker: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | [**Text4**](Text4.md)| Get ticker data from specified crypto exchange | 

### Return type

[**OHCLV**](OHCLV.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

