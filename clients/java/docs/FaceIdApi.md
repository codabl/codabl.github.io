# FaceIdApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**faceidExtractFace**](clients/java/docsFaceIdApi.md#faceidExtractFace) | **POST** /extract_face | Extracts and validates photo id for passports
[**faceidExtractMrz**](clients/java/docsFaceIdApi.md#faceidExtractMrz) | **POST** /extract_mrz | Extracts and validates Machine Readable Zones for passports
[**faceidFaceMatching**]clients/java/docs(FaceIdApi.md#faceidFaceMatching) | **POST** /verify_face | Matches the Face extracted from passport to a selfie uploaded by client

<a name="faceidExtractFace"></a>
# **faceidExtractFace**
> MRZ faceidExtractFace(filename)

Extracts and validates photo id for passports

Read the list of supported exchanges in the Market Data API

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.FaceIdApi;


FaceIdApi apiInstance = new FaceIdApi();
List<File> filename = Arrays.asList(new File("/path/to/file")); // List<File> |
try {
    MRZ result = apiInstance.faceidExtractFace(filename);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FaceIdApi#faceidExtractFace");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | [**List&lt;File&gt;**](File.md)|  | [optional]

### Return type

[**MRZ**](MRZ.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="faceidExtractMrz"></a>
# **faceidExtractMrz**
> MRZ faceidExtractMrz(filename)

Extracts and validates Machine Readable Zones for passports

Extracts and validates Machine Readable Zones for passports

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.FaceIdApi;


FaceIdApi apiInstance = new FaceIdApi();
List<File> filename = Arrays.asList(new File("/path/to/file")); // List<File> |
try {
    MRZ result = apiInstance.faceidExtractMrz(filename);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FaceIdApi#faceidExtractMrz");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | [**List&lt;File&gt;**](File.md)|  | [optional]

### Return type

[**MRZ**](MRZ.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="faceidFaceMatching"></a>
# **faceidFaceMatching**
> String faceidFaceMatching(filename)

Matches the Face extracted from passport to a selfie uploaded by client

Read the list of supported exchanges in the Market Data API

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.FaceIdApi;


FaceIdApi apiInstance = new FaceIdApi();
List<File> filename = Arrays.asList(new File("/path/to/file")); // List<File> |
try {
    String result = apiInstance.faceidFaceMatching(filename);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling FaceIdApi#faceidFaceMatching");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | [**List&lt;File&gt;**](File.md)|  | [optional]

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json
