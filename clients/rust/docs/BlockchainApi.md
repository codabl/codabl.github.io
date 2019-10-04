# \BlockchainApi

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockchain_average_tx**](BlockchainApi.md#blockchain_average_tx) | **Post** /average_tx_fee | Calculate average transccion fee of a given blockchain
[**blockchain_list**](BlockchainApi.md#blockchain_list) | **Get** /list_blockchain | The blockchains data structure supported by the Brainrex API


# **blockchain_average_tx**
> ::models::InlineResponse201 blockchain_average_tx(request)
Calculate average transccion fee of a given blockchain

Calculates the average trasnsaction fee of a given 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **request** | [**Request**](Request.md)| Name of the blockchain and date range. | 

### Return type

[**::models::InlineResponse201**](inline_response_201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blockchain_list**
> Vec<Value> blockchain_list()
The blockchains data structure supported by the Brainrex API

List of supported blockchains networks for analysis. The full history of the networks are available.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**Vec<Value>**](Value.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

