# Quickstarts

## Before you begin

To create and configure a Brainrex API project:

  1. [Create a Brainrex API Account](quickstart) by following the instructions on the [brainrex.com](https://brainrex.com/start.html) website.

  2. Log in to the console.brainrex.com website and create a new project.

## Install Client Library
<!-- tabs:start -->

#### ** Python **

**Requirements**

Python 2.7 and 3.4+

**Installation & Usage**
```sh
pip install pybrainrex
```

If the python package is hosted on Github, you can install directly from Github

```sh
pip install git+https://github.com/brainrexAPI/python-client-generated.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/brainrexAPI/python-client-generated.git`)

Then import the package:
```python
import swagger_client
```

**Setuptools**

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import swagger_client
```

#### ** Bash **

```shell
# Make sure the script has executable rights
$ chmod u+x

# Print the list of operations available on the service
$ ./ -h

# Print the service description
$ ./ --about

# Print detailed information about specific operation
$ ./ <operationId> -h

# Make GET request
./ --host http://<hostname>:<port> --accept xml <operationId> <queryParam1>=<value1> <header_key1>:<header_value2>

# Make GET request using arbitrary curl options (must be passed before <operationId>) to an SSL service using username:password
 -k -sS --tlsv1.2 --host https://<hostname> -u <user>:<password> --accept xml <operationId> <queryParam1>=<value1> <header_key1>:<header_value2>

# Make POST request
$ echo '<body_content>' |  --host <hostname> --content-type json <operationId> -

# Make POST request with simple JSON content, e.g.:
# {
#   "key1": "value1",
#   "key2": "value2",
#   "key3": 23
# }
$ echo '<body_content>' |  --host <hostname> --content-type json <operationId> key1==value1 key2=value2 key3:=23 -

# Preview the cURL command without actually executing it
$  --host http://<hostname>:<port> --dry-run <operationid>

```

#### ** C# **
**Dependencies**
- [RestSharp](https://www.nuget.org/packages/RestSharp) - 105.1.0 or later
- [Json.NET](https://www.nuget.org/packages/Newtonsoft.Json/) - 7.0.0 or later
- [JsonSubTypes](https://www.nuget.org/packages/JsonSubTypes/) - 1.2.0 or later

The DLLs included in the package may not be the latest version. We recommend using [NuGet](https://docs.nuget.org/consume/installing-nuget) to obtain the latest version of the packages:
```
Install-Package RestSharp
Install-Package Newtonsoft.Json
Install-Package JsonSubTypes
```

NOTE: RestSharp versions greater than 105.1.0 have a bug which causes file uploads to fail. See [RestSharp#742](https://github.com/restsharp/RestSharp/issues/742)

<a name="installation"></a>
**Installation**
Run the following command to generate the DLL
- [Mac/Linux] `/bin/sh build.sh`
- [Windows] `build.bat`

Then include the DLL (under the `bin` folder) in the C# project, and use the namespaces:
```csharp
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;
```
<a name="packaging"></a>
**Packaging**

A `.nuspec` is included with the project. You can follow the Nuget quickstart to [create](https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package#create-the-package) and [publish](https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package#publish-the-package) packages.

This `.nuspec` uses placeholders from the `.csproj`, so build the `.csproj` directly:

```
nuget pack -Build -OutputDirectory out IO.Swagger.csproj
```

Then, publish to a [local feed](https://docs.microsoft.com/en-us/nuget/hosting-packages/local-feeds) or [other host](https://docs.microsoft.com/en-us/nuget/hosting-packages/overview) and consume the new package via Nuget as usual.

#### ** Go **

Download the package from GitHub
```shell
git clone https://github.com/BrainrexAPI/go-client.git
```
Put the package under your project folder and add the following in import:
```golang
import "./swagger"
```
#### ** Haskell **

Installation follows the standard approach to installing Stack-based projects.

1. Install the [Haskell `stack` tool](http://docs.haskellstack.org/en/stable/README).
2. To build the package, and generate the documentation (recommended):
```
stack haddock
```
which will generate docs for this lib in the `docs` folder.

To generate the docs in the normal location (to enable hyperlinks to external libs), remove
```
build:
  haddock-arguments:
    haddock-args:
    - "--odir=./docs"
```
from the stack.yaml file and run `stack haddock` again.

3. To run unit tests:
```
stack test
```

#### ** Java **

**Requirements**

Building the API client library requires:
1. Java 1.7+
2. Maven/Gradle

**Installation**

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

**Maven users**

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>io.swagger</groupId>
  <artifactId>swagger-java-client</artifactId>
  <version>1.0.0</version>
  <scope>compile</scope>
</dependency>
```

**Gradle users**

Add this dependency to your project's build file:

```groovy
compile "io.swagger:swagger-java-client:1.0.0"
```

**Others**

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

* `target/swagger-java-client-1.0.0.jar`
* `target/lib/*.jar`

#### ** JavaScript **
**Installation For [Node.js](https://nodejs.org/)**

**npm**

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install brainrex_api --save
```

**Local development**

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your brainrex_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('brainrex_api')` in javascript files from the directory you ran the last
command above from.

**git**
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/brainrex_api
then install it via:

```shell
    npm install YOUR_USERNAME/brainrex_api --save
```

**For browser**

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

**Webpack Configuration**

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```
#### ** Perl **

**A note on Moose**

This role is the only component of the library that uses Moose. See
WWW::SwaggerClient::ApiFactory for non-Moosey usage.

**SYNOPSIS**

The Perl Swagger Codegen project builds a library of Perl modules to interact with
a web service defined by a OpenAPI Specification. See below for how to build the
library.

This module provides an interface to the generated library. All the classes,
objects, and methods (well, not quite \*all\*, see below) are flattened into this
role.

        package MyApp;
        use Moose;
        with 'WWW::SwaggerClient::Role';

        package main;

        my $api = MyApp->new({ tokens => $tokens });

        my $pet = $api->get_pet_by_id(pet_id => $pet_id);


**Structure of the library**

The library consists of a set of API classes, one for each endpoint. These APIs
implement the method calls available on each endpoint.

Additionally, there is a set of "object" classes, which represent the objects
returned by and sent to the methods on the endpoints.

An API factory class is provided, which builds instances of each endpoint API.

This Moose role flattens all the methods from the endpoint APIs onto the consuming
class. It also provides methods to retrieve the endpoint API objects, and the API
factory object, should you need it.

For documentation of all these methods, see AUTOMATIC DOCUMENTATION below.

**Configuring authentication**

In the normal case, the OpenAPI Spec will describe what parameters are
required and where to put them. You just need to supply the tokens.

    my $tokens = {
        # basic
        username => $username,
        password => $password,

        # oauth
        access_token => $oauth_token,

        # keys
        $some_key => { token => $token,
                       prefix => $prefix,
                       in => $in,             # 'head||query',
                       },

        $another => { token => $token,
                      prefix => $prefix,
                      in => $in,              # 'head||query',
                      },
        ...,

        };

        my $api = MyApp->new({ tokens => $tokens });

Note these are all optional, as are `prefix` and `in`, and depend on the API
you are accessing. Usually `prefix` and `in` will be determined by the code generator from
the spec and you will not need to set them at run time. If not, `in` will
default to 'head' and `prefix` to the empty string.

The tokens will be placed in a L<WWW::SwaggerClient::Configuration> instance
as follows, but you don't need to know about this.

- `$cfg->{username}`

    String. The username for basic auth.

- `$cfg->{password}`

    String. The password for basic auth.

- `$cfg->{api_key}`

    Hashref. Keyed on the name of each key (there can be multiple tokens).

            $cfg->{api_key} = {
                    secretKey => 'aaaabbbbccccdddd',
                    anotherKey => '1111222233334444',
                    };

- `$cfg->{api_key_prefix}`

    Hashref. Keyed on the name of each key (there can be multiple tokens). Note not
    all api keys require a prefix.

            $cfg->{api_key_prefix} = {
                    secretKey => 'string',
                    anotherKey => 'same or some other string',
                    };

- `$cfg->{access_token}`

    String. The OAuth access token.

**METHODS**

**`base_url`**

The generated code has the `base_url` already set as a default value. This method
returns the current value of `base_url`.

**`api_factory`**

Returns an API factory object. You probably won't need to call this directly.

        $self->api_factory('Pet'); # returns a WWW::SwaggerClient::PetApi instance

        $self->pet_api;            # the same

**MISSING METHODS**

Most of the methods on the API are delegated to individual endpoint API objects
(e.g. Pet API, Store API, User API etc). Where different endpoint APIs use the
same method name (e.g. `new()`), these methods can't be delegated. So you need
to call `$api->pet_api->new()`.

In principle, every API is susceptible to the presence of a few, random, undelegatable
method names. In practice, because of the way method names are constructed, it's
unlikely in general that any methods will be undelegatable, except for:

        new()
        class_documentation()
        method_documentation()

To call these methods, you need to get a handle on the relevant object, either
by calling `$api->foo_api` or by retrieving an object, e.g.
`$api->get_pet_by_id(pet_id => $pet_id)`. They are class methods, so
you could also call them on class names.

**BUILDING YOUR LIBRARY**

See the homepage `https://github.com/swagger-api/swagger-codegen` for full details.
But briefly, clone the git repository, build the codegen codebase, set up your build
config file, then run the API build script. You will need git, Java 7 or 8 and Apache
maven 3.0.3 or better already installed.

The config file should specify the project name for the generated library:

        {"moduleName":"WWW::MyProjectName"}

Your library files will be built under `WWW::MyProjectName`.

          $ git clone https://github.com/swagger-api/swagger-codegen.git
          $ cd swagger-codegen
          $ mvn package
          $ java -jar modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate \
    -i [URL or file path to JSON swagger API spec] \
    -l perl \
    -c /path/to/config/file.json \
    -o /path/to/output/folder

Bang, all done. Run the `autodoc` script in the `bin` directory to see the API
you just built.

**AUTOMATIC DOCUMENTATION**

You can print out a summary of the generated API by running the included
`autodoc` script in the `bin` directory of your generated library. A few
output formats are supported:

          Usage: autodoc [OPTION]

    -w           wide format (default)
    -n           narrow format
    -p           POD format
    -H           HTML format
    -m           Markdown format
    -h           print this help message
    -c           your application class


The `-c` option allows you to load and inspect your own application. A dummy
namespace is used if you don't supply your own class.

#### ** PHP **

**Requirements**

PHP 5.5 and later

**Installation & Usage**
**Composer**

To install the bindings via [Composer](http://getcomposer.org/), add the following to `composer.json`:

```
{
  "repositories": [
    {
      "type": "git",
      "url": "https://github.com/brainrexAPI/php-client.git"
    }
  ],
  "require": {
    "brainrexAPI/php-client": "*@dev"
  }
}
```

Then run `composer install`

**Manual Installation**

Download the files and include `autoload.php`:

```php
    require_once('/path/to/SwaggerClient-php/vendor/autoload.php');
```

**Tests**

To run the unit tests:

```
composer install
./vendor/bin/phpunit
```
#### ** Ruby **
**Installation**
**Build a gem**

To build the Ruby code into a gem:

```shell
gem build swagger_client.gemspec
```

Then either install the gem locally:

```shell
gem install ./swagger_client-1.0.0.gem
```
(for development, run `gem install --dev ./swagger_client-1.0.0.gem` to install the development dependencies)

or publish the gem to a gem hosting service, e.g. [RubyGems](https://rubygems.org/).

Finally add this to the Gemfile:

    gem 'swagger_client', '~> 1.0.0
**Install from Git**

If the Ruby gem is hosted at a git repository: https://github.com/brainrexAPI/ruby-client, then add the following in the Gemfile:

    gem 'swagger_client', :git => 'https://github.com/brainrexAPI/ruby-client.git'

Include the Ruby code directly

Include the Ruby code directly using `-I` as follows:

```shell
ruby -Ilib script.rb
```
#### ** Rust **
```shell
    git clone https://github,com/brainexAPI/rust-client
```
Put the package under your project folder and add the following in import:
```
    "./swagger"
```

<!-- tabs:end -->

## Create Your First App
After following the installation instructions,
<!-- tabs:start -->

#### ** Python **

```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.BlockchainApi(swagger_client.ApiClient(configuration))

try:
    # Lastest price quote for Ether
    api_response = api_instance.blockchain_get_ethereum_price()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BlockchainApi->blockchain_get_ethereum_price: %s\n" % e)

# create an instance of the API class
api_instance = swagger_client.BlockchainApi(swagger_client.ApiClient(configuration))

try:
    # Total Supply of Ether
    api_response = api_instance.blockchain_get_ethereum_supply()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BlockchainApi->blockchain_get_ethereum_supply: %s\n" % e)

# create an instance of the API class
api_instance = swagger_client.BlockchainApi(swagger_client.ApiClient(configuration))

try:
    # The blockchains data structure supported by the Brainrex API
    api_response = api_instance.blockchain_list_blockchains()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BlockchainApi->blockchain_list_blockchains: %s\n" % e)
```


#### ** Bash **
Open Terminal an run
```bash
 blockchain.averageTx
```


#### ** C# **

```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class Example
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
#### ** Go **
```golang
// Golang
string SentimentGetPriceSentiment(ctx, text)
}
```

#### ** Haskell **

```haskell
mgr <- newManager defaultManagerSettings
config0 <- withStdoutLogging =<< newConfig
let config = config0
    `addAuthMethod` AuthOAuthFoo "secret-key"

let addFooRequest =
  addFoo
    (ContentType MimeJSON)
    (Accept MimeXML)
    (ParamBar paramBar)
    (ParamQux paramQux)
    modelBaz
  `applyOptionalParam` FooId 1
  `applyOptionalParam` FooName "name"
  `setHeader` [("qux_header","xxyy")]
addFooResult <- dispatchMime mgr config addFooRequest
```
#### ** Java **

```python
// Python
pip install brainrex
}
```
#### ** JavaScript **

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var BrainrexApi = require('brainrex_api');

var api = new BrainrexApi.BlockchainApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.blockchainGetEthereumPrice(callback);

```
#### ** Perl **

Put the Perl SDK under the 'lib' folder in your project directory, then run the following
```perl
#!/usr/bin/perl
use lib 'lib';
use strict;
use warnings;
# load the API package
use WWW::SwaggerClient::BlockchainApi;
use WWW::SwaggerClient::CryptoApi;
use WWW::SwaggerClient::SentimentAnalysisApi;

# load the models
use WWW::SwaggerClient::Object::InlineResponse200;
use WWW::SwaggerClient::Object::InlineResponse2001;
use WWW::SwaggerClient::Object::InlineResponse2002;
use WWW::SwaggerClient::Object::InlineResponse201;
use WWW::SwaggerClient::Object::InlineResponse2011;
use WWW::SwaggerClient::Object::Request;
use WWW::SwaggerClient::Object::Request1;
use WWW::SwaggerClient::Object::Request2;
use WWW::SwaggerClient::Object::Request3;
use WWW::SwaggerClient::Object::Text;
use WWW::SwaggerClient::Object::Text1;

# for displaying the API response data
use Data::Dumper;
use WWW::SwaggerClient::;

my $api_instance = WWW::SwaggerClient::->new(
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
#### ** PHP **

#### ** R **

**Installation**
You'll need the `devtools` package in order to build the API.
Make sure you have a proper CRAN repository from which you can download packages.

**Prerequisites**
Install the `devtools` package with the following command.
```R
if(!require(devtools)) { install.packages("devtools") }
```

**Installation of the API package**
Make sure you set the working directory to where the API code is located.
Then execute
```R
library(devtools)
install(".")
```
#### ** Ruby **
Please follow the [installation](#installation) procedure and then run the following code:
```ruby
# Load the gem
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
<!-- tabs:end -->



## Production
!> **Important** This API is highly experimental placeholder text used
DO NOT use in production until version 0.2.
