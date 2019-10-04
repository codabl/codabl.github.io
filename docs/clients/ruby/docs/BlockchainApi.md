# SwaggerClient::BlockchainApi

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockchain_average_tx**](BlockchainApi.md#blockchain_average_tx) | **POST** /average_tx_fee | Calculate average transccion fee of a given blockchain
[**blockchain_list**](BlockchainApi.md#blockchain_list) | **GET** /list_blockchain | The blockchains data structure supported by the Brainrex API


# **blockchain_average_tx**
> InlineResponse201 blockchain_average_tx(request)

Calculate average transccion fee of a given blockchain

Calculates the average trasnsaction fee of a given

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::BlockchainApi.new

request = SwaggerClient::Request.new # Request | Name of the blockchain and date range.


begin
  #Calculate average transccion fee of a given blockchain
  result = api_instance.blockchain_average_tx(request)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling BlockchainApi->blockchain_average_tx: #{e}"
end
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



# **blockchain_list**
> Array&lt;Object&gt; blockchain_list

The blockchains data structure supported by the Brainrex API

List of supported blockchains networks for analysis. The full history of the networks are available.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::BlockchainApi.new

begin
  #The blockchains data structure supported by the Brainrex API
  result = api_instance.blockchain_list
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling BlockchainApi->blockchain_list: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Array&lt;Object&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
