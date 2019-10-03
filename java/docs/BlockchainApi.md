# BlockchainApi

All URIs are relative to *https://brainrexapi.appspot.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockchainGetEthereumPrice**](java/docs/BlockchainApi.md#blockchainGetEthereumPrice) | **GET** /get_price_ | Lastest price quote for Ether
[**blockchainGetEthereumSupply**](java/docs/BlockchainApi.md#blockchainGetEthereumSupply) | **GET** /get_ethereum_supply | Total Supply of Ether
[**blockchainListBlockchains**](BlockchainApi.md#blockchainListBlockchains) | **GET** /list_blockchain | The blockchains data structure supported by the Brainrex API

<a name="blockchainGetEthereumPrice"></a>
# **blockchainGetEthereumPrice**
> String blockchainGetEthereumPrice()

Lastest price quote for Ether

Latest price being quoted of Ether.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.BlockchainApi;


BlockchainApi apiInstance = new BlockchainApi();
try {
    String result = apiInstance.blockchainGetEthereumPrice();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BlockchainApi#blockchainGetEthereumPrice");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="blockchainGetEthereumSupply"></a>
# **blockchainGetEthereumSupply**
> String blockchainGetEthereumSupply()

Total Supply of Ether

Total supply of Ethereum coins that have been mined.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.BlockchainApi;


BlockchainApi apiInstance = new BlockchainApi();
try {
    String result = apiInstance.blockchainGetEthereumSupply();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BlockchainApi#blockchainGetEthereumSupply");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="blockchainListBlockchains"></a>
# **blockchainListBlockchains**
> List&lt;Object&gt; blockchainListBlockchains()

The blockchains data structure supported by the Brainrex API

List of supported blockchains networks for analysis. The full history of the networks are available.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.BlockchainApi;


BlockchainApi apiInstance = new BlockchainApi();
try {
    List<Object> result = apiInstance.blockchainListBlockchains();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BlockchainApi#blockchainListBlockchains");
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

 - **Content-Type**: Not defined
 - **Accept**: application/json
