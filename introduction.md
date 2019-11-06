## What is Brainrex?
Brainrex is a single platform that collects, stores, and analyzes your blockchain data from hundreds of sources and finds anomalies automatically, no matter whether you are sending financial data or news articles.

We take care of training machine learning models for you, so you can spend more time analyzing your data and less time tracking it down.

## Why Do I Need Brainrex?
With Brainrex you don't need a team of PhD data scientists to become a data driven blockchain company.

Brainrex saves engineers months spent downloading and cleaning data, extracting features and training your own AI models. Giving teams the possibility to focus on solving business problems.

## How Does it Work?
Algorithmic trading, fraud detection, AML/KYC, blockchain debugging, error reporting, and marketing in blockchain all require the same data: blockchain networks data, cryptocurrency exchanges, news feed and documents.

Without Brainrex, you have to hire a PhD data scientist team, collect terabytes of data, train and finetune your own machine learning model. Brainrex eliminates the time consuming and expensive proccess of assambling an ML team, giving your software developers the possibility to perform advanced analytics without prior ML knowledge.

You just send your data to us, then we translate and find problems.

Use the Brainrex API to connect your data sources from third party providers or your own data warehouses, and send it to us. Then Brainrex:

Cleans and transforms raw data, to a format our AI can understand
Then it selects the best fitting model depending on your risk sensitivy and data sources
Then we find anomalies and corralate them, and report abnormalities in real time

<!-- ## What’s an example?
A crypto exchange needs to track an users for fraudulent activity, so the company can comply with regulators.

Previously, they needed to code programs that checked the trading history and withdrawal history. Now, they use Brainrex for all their tracking needs. They track these events once with the Brainex API, and then we translate and analyze the data streams to whatever analytics tools they turn on in our control panel.

Voilà! Their customer data populates in tools like Amplitude and Google Analytics. Their marketing team can reach out to people that play songs daily but haven’t upgraded their accounts, and the product team can see how new features are faring to optimize accordingly. -->

## **What is the Brainrex API?**
### Detect anomalies in real time with machine learning.<br>
<!-- easily embed anomaly detection capabilities into your app -->
We provide anomaly detection capable of identifying common anomalies in blockchain networks and digital asset exchanges.

![](assets/img/anomaly_demo-1.png)

| API Features        | Description  |
| ------------- |:-------------:|
| Real-Time Monitoring | Takes streaming data and detects anomalies by using only the most recent data points to determine whether your lastest data point is an anomaly. This method uses pre-trained.|
| Historical data anomalies. | This method generates a new model using the data stream you send and determines whether your target data is an anomaly. The base model has been trained with a mix of data from popular blockchain networks and digital assets exchanges      |
| Detect anomalies in news feed | This models have been trained to monitor to anomalies found in capital markets, orderbooks, .       |
| Train a custom anomaly detectors | This API saves the data you send a experimentation enviroment. It uses labeled data you provide to run a series of A/B tests to check for yo      |

### Natural Language API<br>
![](assets/img/language.png)

  We provide natural language understanding software capable of identifying crypto entities, categories, and sentiment as well as reacting to price movements and blockchain network activity.

  | Features        | Description  |
  | -----------------|:-------------:|
  | [Sentiment Analysis](language)    | Understand the overall opinion, feeling, or attitude sentiment expressed in a blockf of text. |
  | [Price Sentiment](language)    | Understand the overall opinion, feeling, or attitude sentiment expressed in a blockf of text. |

  | Entity Analysis   | Identify entities within documents — including receipts, invoices, and contracts — and label them by types such as date, person, contact information, organization, location, events, products, and media      |
  | Entity Sentiment  | This endpoint is similar to an entity but calculates the sentiment score for each known entity in the sentence, and the importance

## **Pricing**


| Anomaly API | Free | 39$   | 200$ | 800$ |
|----------|:--------:|:--------:|:--------:|:--------:|
| General  | 20k units     | 1M units   | 1M units     | 100M units   |
| Blockchain  | x     | x    | 1M  units   | 100M units  |
| Crypto  | x     | x    | 1M units     | 100M units    |
| Custom Models  | x     | x     | x     | 50M units   |


| Language API | Free | 39$   | 200$ | 800$ |
|----------|:--------:|:--------:|:--------:|:--------:|
| Sentiment  | 5k units     | 100k units   | 1M units     | 100M units   |
| Entity  | x     | 100k units    | 1M  units   | 100M units  |
| Investor Sentiment  | x     | 1M units    | 50M units     | 100M units    |
| Text Anomalies  | x     | x     | 1M units     | 50M units   |


Units are represented by the following method: Each request is considdered 1 unit regardless of the payload
```
<!-- Language API -->
1 unit = 1 API request with payload of 1000 unicode characters.
<!-- Anomaly Detection API  -->
1 unit = 1 API request with payload of 1000 timestamps- value  pairs.
```

Only Bitcoin and Bitcoin Cash payments available through Bitpay.
Stripe payments coming soon.

## **Data Integrations**
All your crypto related data in one place, we are constantly building

| Data Sources        | Description  | Supported  |
| ---------------- |:-------------:| -----:|
| Blockchain Networks    | Data from blockchain networks through third parties . |
| Cryptocurrency exchanges   | Query historical candle data(OCHLV), orderbooks and statistics    |
| Cloud warehouses  | Connect your own data from S3, Redshift, BigQuery and More. |
| News Feeds  | Stream data from popular social media channels and news feeds .    |  


## **More Features**
### API Explorer<br>
Brainrex API Explorer allows anyone — be it your development team or your end consumers — to visualize and interact with the API’s resources without having any of the implementation logic in place. It's accessible inside the Admin Console.
  ![](https://s3-eu-west-1.amazonaws.com/brainrex.com/assets/img/explorer.png)

### Admin Console<br>
You can manage your teams settings  ![](https://s3-eu-west-1.amazonaws.com/brainrex.com/assets/img/admin-console.png)
- Create
### Open Source Client libraries<br>
We maintain versioned libraries for every popular programming language, including SDK for Android and IOS developers. Embedding
- Python
- JavaScript
- Java
- R

## **What's are you next steps?**

  - **[Create Account and API keys](create-account)**


  - **[Install Client Libraries](quickstart)**


  - **[Build your first App](quickstart#first-app)**


## Ask us questions
- Join telegram group [Telegram](https://t.me/brainrex) .
- Follow [@BrainrexxAI](https://twitter.com/brainrexAI) for announcements
- Add a ⭐️ [star on GitHub](https://github.com/brainrexAPI)
