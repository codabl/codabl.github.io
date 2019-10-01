# WWW::SwaggerClient::BlockchainApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::BlockchainApi;
```

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockchain_average_tx**](BlockchainApi.md#blockchain_average_tx) | **POST** /average_tx_fee | Calculate average transccion fee of a given blockchain
[**blockchain_list**](BlockchainApi.md#blockchain_list) | **GET** /list_blockchain | The blockchains data structure supported by the Brainrex API


# **blockchain_average_tx**
> InlineResponse201 blockchain_average_tx(request => $request)

Calculate average transccion fee of a given blockchain

Calculates the average trasnsaction fee of a given 

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::BlockchainApi;
my $api_instance = WWW::SwaggerClient::BlockchainApi->new(
);

my $request = WWW::SwaggerClient::Object::Request->new(); # Request | Name of the blockchain and date range.

eval { 
    my $result = $api_instance->blockchain_average_tx(request => $request);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling BlockchainApi->blockchain_average_tx: $@\n";
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

# **blockchain_list**
> ARRAY[object] blockchain_list()

The blockchains data structure supported by the Brainrex API

List of supported blockchains networks for analysis. The full history of the networks are available.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::BlockchainApi;
my $api_instance = WWW::SwaggerClient::BlockchainApi->new(
);


eval { 
    my $result = $api_instance->blockchain_list();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling BlockchainApi->blockchain_list: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**ARRAY[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

