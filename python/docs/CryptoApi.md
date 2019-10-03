# swagger_client.CryptoApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**crypto_download_candles**](CryptoApi.md#crypto_download_candles) | **POST** /download_candles | Downloads candle format market data
[**crypto_list_exchanges**](CryptoApi.md#crypto_list_exchanges) | **GET** /exchanges | Available exchanges for the Brainrex Data
[**crypto_list_markets**](CryptoApi.md#crypto_list_markets) | **GET** /markets | The markets data structure supported by the Brainrex Market API
[**crypto_ticker_data_download**](CryptoApi.md#crypto_ticker_data_download) | **POST** /download_ticker | Download raw ticker data from major crypto markets

# **crypto_download_candles**
> OHCLV crypto_download_candles(body)

Downloads candle format market data

Returns a list of candle data from specified market and data range

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CryptoApi()
body = swagger_client.Body8() # Body8 | Person to create

try:
    # Downloads candle format market data
    api_response = api_instance.crypto_download_candles(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoApi->crypto_download_candles: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body8**](Body8.md)| Person to create | 

### Return type

[**OHCLV**](OHCLV.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crypto_list_exchanges**
> list[Object] crypto_list_exchanges()

Available exchanges for the Brainrex Data

Read the list of supported exchanges in the Market Data API

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CryptoApi()

try:
    # Available exchanges for the Brainrex Data
    api_response = api_instance.crypto_list_exchanges()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoApi->crypto_list_exchanges: %s\n" % e)
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

# **crypto_list_markets**
> list[Object] crypto_list_markets()

The markets data structure supported by the Brainrex Market API

Read the list of supported markets ( currency pairs ) in each exchange

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CryptoApi()

try:
    # The markets data structure supported by the Brainrex Market API
    api_response = api_instance.crypto_list_markets()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoApi->crypto_list_markets: %s\n" % e)
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

# **crypto_ticker_data_download**
> OHCLV crypto_ticker_data_download(body)

Download raw ticker data from major crypto markets

Downloads specified asset class and market and time frame. Of our raw ticker data format

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CryptoApi()
body = swagger_client.Body7() # Body7 | Person to create

try:
    # Download raw ticker data from major crypto markets
    api_response = api_instance.crypto_ticker_data_download(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoApi->crypto_ticker_data_download: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body7**](Body7.md)| Person to create | 

### Return type

[**OHCLV**](OHCLV.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

