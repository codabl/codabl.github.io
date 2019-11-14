# brainrex_api.AnomalyApi

All URIs are relative to *http://0.0.0.0:5000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**anomaly_batch**](AnomalyApi.md#anomaly_batch) | **POST** /anomaly/json/detect | Detects anomaly in historical data
[**anomaly_file_upload**](AnomalyApi.md#anomaly_file_upload) | **POST** /anomaly/file/detect | Detects anomaly in historical data


# **anomaly_batch**
> list[SeriesResponse] anomaly_batch(series_request=series_request)

Detects anomaly in historical data

The Anomaly Detect endpoint ingests time series data of all types, then monitors and detects abnormalities historical time series data. <br><br> Our AI selects from several models, choosing the one that fits the given data best, and we give you the avality to customize the sensitivy of the model. Our model has been trained to recognize anomalies in popular blockchain networks e.g. Bitcoin, Ethereum, learning from past events.

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.AnomalyApi()
series_request = brainrex_api.TimeSeries() # TimeSeries | Time Series to be analyzed, with the following format. (optional)

try:
    # Detects anomaly in historical data
    api_response = api_instance.anomaly_batch(series_request=series_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AnomalyApi->anomaly_batch: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **series_request** | [**TimeSeries**](TimeSeries.md)| Time Series to be analyzed, with the following format. | [optional] 

### Return type

[**list[SeriesResponse]**](SeriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **anomaly_file_upload**
> list[SeriesResponse] anomaly_file_upload(series)

Detects anomaly in historical data

The Anomaly Detect endpoint ingests time series data of all types, then monitors and detects abnormalities historical time series data. <br><br> Our AI selects from several models, choosing the one that fits the given data best, and we give you the avality to customize the sensitivy of the model. Our model has been trained to recognize anomalies in popular blockchain networks e.g. Bitcoin, Ethereum, learning from past events.

### Example
```python
from __future__ import print_function
import time
import brainrex_api
from brainrex_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = brainrex_api.AnomalyApi()
series = brainrex_api.TimeSeries() # TimeSeries | Latitude component of start location.

try:
    # Detects anomaly in historical data
    api_response = api_instance.anomaly_file_upload(series)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AnomalyApi->anomaly_file_upload: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **series** | [**TimeSeries**](TimeSeries.md)| Latitude component of start location. | 

### Return type

[**list[SeriesResponse]**](SeriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

