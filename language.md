### Natural Language API
#### Investor Sentiment

We provide natural language understanding software capable of identifying crypto entities, categories, and sentiment as well as reacting to price movements and blockchain network activity.

| Features        | Description  |
| ------------- |:-------------:|
| [Sentiment Analysis](language/entities)    | Understand the overall opinion, feeling, or attitude sentiment expressed in a block of text. |
| [Entity Analysis](language/entities)   | Identify entities within documents — including receipts, invoices, and contracts — and label them by types such as date, person, contact information, organization, location, events, products, and media      |


# Crypto Sentiment - Quickstart
## We will learn how to install and use the sentiment API library. For python
<img src="https://s3-eu-west-1.amazonaws.com/brainrex.com/img/products/sentiment-analysis-quickstart-brainrex-api.png">
Investor Sentiment Analysis
Audience
This tutorial is designed to let you quickly start exploring and developing applications with the BrainrexNatural Language API. It is designed

This tutorial steps through a Natural Language API application using Python code. The purpose here is not to explain the Python client libraries, but to explain how to make calls to the Natural Language API. Applications in Java and Node.js are essentially similar. Consult the Natural Language API Samples for samples in other languages (including this sample within the tutorial).

## Prerequisites
In order to run this tutorial you need to do the following:
- You've installed the Brainrex Language Client for Python
- You have signed up for the Brainrex Free tier.
- You have created API keys
- Store API keys as enviroment variables.
- Basic familiarity with Python programming.
- Set up your Python development environment. It is recommended that you have the latest version of Python 3.8.0, pip, and -virtualenv installed on your system.

Tip: You can set your client credentials as environmental variables in Linux bash terminal and Mac OS X terminal using export BRAINREX_API_KEY=your_client_id (similarly for GOOGLE_CLIENT_SECRET).

If you’re on Windows, you can use set GOOGLE_CLIENT_ID=your_client_id in Command Prompt.
## Part 1 - Making first API call and authentication
### Importing libraries we need for this tutorial.

```python
%matplotlib inline
import matplotlib.pyplot as plt
from __future__ import print_function
from pprint import pprint
import time
import pandas as pd

```
```python

```
### Let's import the Brainrex API library called crypto_sentiment.
If you haven't installed yet.
Run the cell bellow. Skip if you have already installed installed
```bash
pip install brainrex-language

```

### Let's initilize the SentimentAPIApi client.

This object calls our API and authentificates.

# create an instance of the API class
```python
api_instance = crypto_sentiment.SentimentAPIApi()

```

### Introducing the Text object.
```python
text = crypto_sentiment.Text("Bitcoin is not the boring, but incredibly Binance coin is way better") # Text | String of text to be analyze for investor sentiment.


```

### Make your first API call.
#### A score from -1 to 1 will output. To see the explanation behind this scores visit brainrex.com/language
```python
try:
    # Sentiment analysis score using a model trained for buy signals.
    api_response = api_instance.language_get_price_sentiment(text)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling  SentimentAPIApi->language_get_price_sentiment: %s\n" % e)

```

### Find code in github

- Find full code here [github.com/brainrexapi/examples](https://github.com/BrainrexAPI/examples/blob/master/crypto-language-quickstart.ipynb)
