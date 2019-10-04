# swagger_client.FaceIDApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**faceid_extract_face**](FaceIDApi.md#faceid_extract_face) | **POST** /extract_face | Extracts and validates photo id for passports
[**faceid_extract_mrz**](FaceIDApi.md#faceid_extract_mrz) | **POST** /extract_mrz | Extracts and validates Machine Readable Zones for passports
[**faceid_face_matching**](FaceIDApi.md#faceid_face_matching) | **POST** /verify_face | Matches the Face extracted from passport to a selfie uploaded by client

# **faceid_extract_face**
> MRZ faceid_extract_face(filename=filename)

Extracts and validates photo id for passports

Read the list of supported exchanges in the Market Data API

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FaceIDApi()
filename = ['filename_example'] # list[str] |  (optional)

try:
    # Extracts and validates photo id for passports
    api_response = api_instance.faceid_extract_face(filename=filename)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FaceIDApi->faceid_extract_face: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | [**list[str]**](str.md)|  | [optional] 

### Return type

[**MRZ**](MRZ.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **faceid_extract_mrz**
> MRZ faceid_extract_mrz(filename=filename)

Extracts and validates Machine Readable Zones for passports

Extracts and validates Machine Readable Zones for passports

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FaceIDApi()
filename = ['filename_example'] # list[str] |  (optional)

try:
    # Extracts and validates Machine Readable Zones for passports
    api_response = api_instance.faceid_extract_mrz(filename=filename)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FaceIDApi->faceid_extract_mrz: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | [**list[str]**](str.md)|  | [optional] 

### Return type

[**MRZ**](MRZ.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **faceid_face_matching**
> str faceid_face_matching(filename=filename)

Matches the Face extracted from passport to a selfie uploaded by client

Read the list of supported exchanges in the Market Data API

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.FaceIDApi()
filename = ['filename_example'] # list[str] |  (optional)

try:
    # Matches the Face extracted from passport to a selfie uploaded by client
    api_response = api_instance.faceid_face_matching(filename=filename)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling FaceIDApi->faceid_face_matching: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | [**list[str]**](str.md)|  | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

