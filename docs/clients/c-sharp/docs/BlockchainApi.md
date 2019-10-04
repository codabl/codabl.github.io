# IO.Swagger.Api.BlockchainApi

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BlockchainAverageTx**](BlockchainApi.md#blockchainaveragetx) | **POST** /average_tx_fee | Calculate average transccion fee of a given blockchain
[**BlockchainList**](BlockchainApi.md#blockchainlist) | **GET** /list_blockchain | The blockchains data structure supported by the Brainrex API


<a name="blockchainaveragetx"></a>
# **BlockchainAverageTx**
> InlineResponse201 BlockchainAverageTx (Request request)

Calculate average transccion fee of a given blockchain

Calculates the average trasnsaction fee of a given 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class BlockchainAverageTxExample
    {
        public void main()
        {
            var apiInstance = new BlockchainApi();
            var request = new Request(); // Request | Name of the blockchain and date range.

            try
            {
                // Calculate average transccion fee of a given blockchain
                InlineResponse201 result = apiInstance.BlockchainAverageTx(request);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling BlockchainApi.BlockchainAverageTx: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="blockchainlist"></a>
# **BlockchainList**
> List<Object> BlockchainList ()

The blockchains data structure supported by the Brainrex API

List of supported blockchains networks for analysis. The full history of the networks are available.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class BlockchainListExample
    {
        public void main()
        {
            var apiInstance = new BlockchainApi();

            try
            {
                // The blockchains data structure supported by the Brainrex API
                List&lt;Object&gt; result = apiInstance.BlockchainList();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling BlockchainApi.BlockchainList: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List<Object>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

