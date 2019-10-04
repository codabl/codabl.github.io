# WWW::SwaggerClient::CryptoApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::CryptoApi;
```

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exchanges_download_candles**](CryptoApi.md#exchanges_download_candles) | **POST** /download_candles | Downloads candle format market data
[**exchanges_list**](CryptoApi.md#exchanges_list) | **GET** /markets | The markets data structure supported by the Brainrex Market API
[**exchanges_marketmaker**](CryptoApi.md#exchanges_marketmaker) | **POST** /market_making | Market Making as a Service API.
[**exchanges_read**](CryptoApi.md#exchanges_read) | **GET** /exchanges | The exchanges data structure supported by the Brainrex API
[**exchanges_ticker_data_download**](CryptoApi.md#exchanges_ticker_data_download) | **POST** /download_ticker | Download raw ticker data from major crypto markets


# **exchanges_download_candles**
> InlineResponse201 exchanges_download_candles(request => $request)

Downloads candle format market data

Returns a list of candle data from specified market and data range

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::CryptoApi;
my $api_instance = WWW::SwaggerClient::CryptoApi->new(
);

my $request = WWW::SwaggerClient::Object::Request2->new(); # Request2 | Person to create

eval { 
    my $result = $api_instance->exchanges_download_candles(request => $request);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CryptoApi->exchanges_download_candles: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request2**](Request2.md)| Person to create | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchanges_list**
> ARRAY[object] exchanges_list()

The markets data structure supported by the Brainrex Market API

Read the list of supported markets ( currency pairs ) in each exchange

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::CryptoApi;
my $api_instance = WWW::SwaggerClient::CryptoApi->new(
);


eval { 
    my $result = $api_instance->exchanges_list();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CryptoApi->exchanges_list: $@\n";
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

# **exchanges_marketmaker**
> InlineResponse2011 exchanges_marketmaker(request => $request)

Market Making as a Service API.

Our AI will trade at the risk level you want, you need to provide your credential to the exchange you are trading at.

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::CryptoApi;
my $api_instance = WWW::SwaggerClient::CryptoApi->new(
);

my $request = WWW::SwaggerClient::Object::Request3->new(); # Request3 | Name of exchange and currency pair you want to provide liquidity

eval { 
    my $result = $api_instance->exchanges_marketmaker(request => $request);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CryptoApi->exchanges_marketmaker: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request3**](Request3.md)| Name of exchange and currency pair you want to provide liquidity | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchanges_read**
> ARRAY[object] exchanges_read()

The exchanges data structure supported by the Brainrex API

Read the list of supported exchanges in the Market Data API

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::CryptoApi;
my $api_instance = WWW::SwaggerClient::CryptoApi->new(
);


eval { 
    my $result = $api_instance->exchanges_read();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CryptoApi->exchanges_read: $@\n";
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

# **exchanges_ticker_data_download**
> InlineResponse201 exchanges_ticker_data_download(request => $request)

Download raw ticker data from major crypto markets

Downloads specified asset class and market and time frame. Of our raw ticker data format

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::CryptoApi;
my $api_instance = WWW::SwaggerClient::CryptoApi->new(
);

my $request = WWW::SwaggerClient::Object::Request1->new(); # Request1 | Person to create

eval { 
    my $result = $api_instance->exchanges_ticker_data_download(request => $request);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CryptoApi->exchanges_ticker_data_download: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request1**](Request1.md)| Person to create | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

