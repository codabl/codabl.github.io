# BlockchainApi

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockchainAverageTx**](BlockchainApi.md#blockchainAverageTx) | **POST** /average_tx_fee | Calculate average transccion fee of a given blockchain
[**blockchainList**](BlockchainApi.md#blockchainList) | **GET** /list_blockchain | The blockchains data structure supported by the Brainrex API


<a name="blockchainAverageTx"></a>
# **blockchainAverageTx**
> InlineResponse201 blockchainAverageTx(request)

Calculate average transccion fee of a given blockchain

Calculates the average trasnsaction fee of a given 

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.BlockchainApi;


BlockchainApi apiInstance = new BlockchainApi();
Request request = new Request(); // Request | Name of the blockchain and date range.
try {
    InlineResponse201 result = apiInstance.blockchainAverageTx(request);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BlockchainApi#blockchainAverageTx");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request**](Request.md)| Name of the blockchain and date range. |

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="blockchainList"></a>
# **blockchainList**
> List&lt;Object&gt; blockchainList()

The blockchains data structure supported by the Brainrex API

List of supported blockchains networks for analysis. The full history of the networks are available.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.BlockchainApi;


BlockchainApi apiInstance = new BlockchainApi();
try {
    List<Object> result = apiInstance.blockchainList();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BlockchainApi#blockchainList");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List&lt;Object&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

