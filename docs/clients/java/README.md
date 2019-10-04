# Java Client Library for the Brainrex API

Brainrex API
- API version: 0.1.6
  - Build date: 2019-10-03T15:40:59.957Z[GMT]

Welcome to the Brainrex API. We offered pre-trained ML models tackling problems such as Sentiment Analysis, Face ID recognition making, blockchain monitoring and real-tie face-id verification. This AI models can be consumed from this API. You can integrate with your programming language of choice through our [Client Libraries](clients.md) .We also offer integrations to open data and propietary data providers. There is a collection of data transformation tools. Join our Telegram group to get the latest news and ask us questions directly (https://t.me/brainrex). More about Brainrex at [https://brainrex.com](http://brainrex.com). Full Documentation can be found at [https://developers.brainrex.com](https://brainrexapi.github.io/docs)




## Requirements

Building the API client library requires:
1. Java 1.7+
2. Maven/Gradle

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>io.swagger</groupId>
  <artifactId>swagger-java-client</artifactId>
  <version>1.0.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "io.swagger:swagger-java-client:1.0.0"
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

* `target/swagger-java-client-1.0.0.jar`
* `target/lib/*.jar`

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.BlockchainApi;

import java.io.File;
import java.util.*;

public class BlockchainApiExample {

    public static void main(String[] args) {

        BlockchainApi apiInstance = new BlockchainApi();
        try {
            String result = apiInstance.blockchainGetEthereumPrice();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling BlockchainApi#blockchainGetEthereumPrice");
            e.printStackTrace();
        }
    }
}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.BlockchainApi;

import java.io.File;
import java.util.*;

public class BlockchainApiExample {

    public static void main(String[] args) {

        BlockchainApi apiInstance = new BlockchainApi();
        try {
            String result = apiInstance.blockchainGetEthereumSupply();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling BlockchainApi#blockchainGetEthereumSupply");
            e.printStackTrace();
        }
    }
}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.BlockchainApi;

import java.io.File;
import java.util.*;

public class BlockchainApiExample {

    public static void main(String[] args) {

        BlockchainApi apiInstance = new BlockchainApi();
        try {
            List<Object> result = apiInstance.blockchainListBlockchains();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling BlockchainApi#blockchainListBlockchains");
            e.printStackTrace();
        }
    }
}
```

## Documentation for API Endpoints

All URIs are relative to *https://brainrexapi.appspot.com/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BlockchainApi* | [**blockchainGetEthereumPrice**](clients/clients/java/docsBlockchainApi.md#blockchainGetEthereumPrice) | **GET** /get_price_ | Lastest price quote for Ether
*BlockchainApi* | [**blockchainGetEthereumSupply**](clients/java/docsBlockchainApi.md#blockchainGetEthereumSupply) | **GET** /get_ethereum_supply | Total Supply of Ether
*BlockchainApi* | [**blockchainListBlockchains**](clients/java/docsBlockchainApi.md#blockchainListBlockchains) | **GET** /list_blockchain | The blockchains data structure supported by the Brainrex API
*CryptoApi* | [**cryptoDownloadCandles**](clients/java/docsCryptoApi.md#cryptoDownloadCandles) | **POST** /download_candles | Downloads candle format market data
*CryptoApi* | [**cryptoListExchanges**](clients/java/docsCryptoApi.md#cryptoListExchanges) | **GET** /exchanges | Available exchanges for the Brainrex Data
*CryptoApi* | [**cryptoListMarkets**](clients/java/docsCryptoApi.md#cryptoListMarkets) | **GET** /markets | The markets data structure supported by the Brainrex Market API
*CryptoApi* | [**cryptoTickerDataDownload**](clients/java/docsCryptoApi.md#cryptoTickerDataDownload) | **POST** /download_ticker | Download raw ticker data from major crypto markets
*CryptoLanguageApi* | [**sentimentGetCryptoSentiment**](clients/java/docsCryptoLanguageApi.md#sentimentGetCryptoSentiment) | **POST** /crypto_sentiment | Sentiment that reacts to crypto price changes and blockchain events e.g hard forks, chain splits.
*CryptoLanguageApi* | [**sentimentGetEntities**](clients/java/docsCryptoLanguageApi.md#sentimentGetEntities) | **POST** /get_entities | General Sentiment Analysis scoring
*CryptoLanguageApi* | [**sentimentGetEntitiesSentiment**](clients/java/docsCryptoLanguageApi.md#sentimentGetEntitiesSentiment) | **POST** /get_entities_sentiment | Gets entities and the sentiment for each entity, as well as the importance they have towards the sentiment of the general sentiment
*CryptoLanguageApi* | [**sentimentGetSentimentScore**](clients/java/docsCryptoLanguageApi.md#sentimentGetSentimentScore) | **POST** /general_sentiment | General Sentiment Analysis scoring
*FaceIdApi* | [**faceidExtractFace**](clients/java/docsFaceIdApi.md#faceidExtractFace) | **POST** /extract_face | Extracts and validates photo id for passports
*FaceIdApi* | [**faceidExtractMrz**](clients/java/docsFaceIdApi.md#faceidExtractMrz) | **POST** /extract_mrz | Extracts and validates Machine Readable Zones for passports
*FaceIdApi* | [**faceidFaceMatching**](clients/java/docsFaceIdApi.md#faceidFaceMatching) | **POST** /verify_face | Matches the Face extracted from passport to a selfie uploaded by client
*LibraApi* | [**getLibraStats**](clients/java/docsLibraApi.md#getLibraStats) | **GET** /get_libraStats/{byDays} | Info for a specific pet

## Documentation for Models

 - [Body](java/clients/java/docsBody.md)
 - [Body1](clients/java/docsBody1.md)
 - [Body2](clients/java/docsBody2.md)
 - [Body3](clients/java/docsBody3.md)
 - [Body4](clients/java/docsBody4.md)
 - [Body5](clients/java/docsBody5.md)
 - [Body6](clients/java/docsBody6.md)
 - [Body7](clients/java/docsBody7.md)
 - [Body8](clients/java/docsBody8.md)
 - [Entities](clients/java/docsEntities.md)
 - [Entity](clients/java/docsEntity.md)
 - [Error](clients/java/docsError.md)
 - [LibraStats](clients/java/docsLibraStats.md)
 - [MRZ](clients/java/docsMRZ.md)
 - [OHCLV](clients/java/docsOHCLV.md)
 - [Sentiment](clients/java/docsSentiment.md)

## Documentation for Authorization

All endpoints do not require authorization.
Authentication schemes defined for the API:

## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author

hello@brainrex.com
