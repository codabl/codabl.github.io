# \BlockchainApi

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BlockchainAverageTx**](BlockchainApi.md#BlockchainAverageTx) | **Post** /average_tx_fee | Calculate average transccion fee of a given blockchain
[**BlockchainList**](BlockchainApi.md#BlockchainList) | **Get** /list_blockchain | The blockchains data structure supported by the Brainrex API


# **BlockchainAverageTx**
> InlineResponse201 BlockchainAverageTx(ctx, request)
Calculate average transccion fee of a given blockchain

Calculates the average trasnsaction fee of a given 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **request** | [**Request**](Request.md)| Name of the blockchain and date range. | 

### Return type

[**InlineResponse201**](inline_response_201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BlockchainList**
> []interface{} BlockchainList(ctx, )
The blockchains data structure supported by the Brainrex API

List of supported blockchains networks for analysis. The full history of the networks are available.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**[]interface{}**](interface{}.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

