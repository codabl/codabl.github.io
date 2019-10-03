# LibraApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLibraStats**](LibraApi.md#getLibraStats) | **GET** /get_libraStats/{byDays} | Info for a specific pet

<a name="getLibraStats"></a>
# **getLibraStats**
> LibraStats getLibraStats(byDays)

Info for a specific pet

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.LibraApi;


LibraApi apiInstance = new LibraApi();
String byDays = "byDays_example"; // String | The date
try {
    LibraStats result = apiInstance.getLibraStats(byDays);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling LibraApi#getLibraStats");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **byDays** | **String**| The date |

### Return type

[**LibraStats**](LibraStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

