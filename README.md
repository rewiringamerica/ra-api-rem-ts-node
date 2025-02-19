# @rewiringamerica/rem
An API for REM, the Residential Electrification Model.
        The other Rewiring America APIs and methodology for REM are [here](https://api.rewiringamerica.org/).

Rewiring America's other APIs can be found [at our main API site](https://api.rewiringamerica.org/).

Example code demonstrating how to use the APIs can be found in the [api_demos](https://github.com/rewiringamerica/api_demos) Github repo.

This Typescript package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- Generator version: 7.10.0
- Build package: org.openapitools.codegen.languages.TypeScriptNodeClientCodegen

For more information, please visit [https://www.rewiringamerica.org/](https://www.rewiringamerica.org/)

## Requirements.

Typescript ^4.0 or ^5.0

## Installation & Usage
### npm

You can install using:

```sh
npm install @rewiringamerica/rem
```

### yarn

You can install using:

```sh
yarn add @rewiringamerica/rem
```

## Getting Started

[Sign up for an API key](https://homes.rewiringamerica.org/api/developer-login) and follow the [installation procedure](#installation--usage).
Then, run the following:

```typescript

import { ResidentialElectrificationModelApi } from "@rewiringamerica/rem/api/apis";
import { SupportedUpgrade } from "@rewiringamerica/rem/model/supportedUpgrade";
import { HeatingFuel } from "@rewiringamerica/rem/model/heatingFuel";
import { HttpBearerAuth } from "@rewiringamerica/rem/model/models";

// Initialize the client and key
const key = new HttpBearerAuth()
key.accessToken = "key_example"

const rem_api = new ResidentialElectrificationModelApi();
rem_api.setDefaultAuthentication(key)

// Get savings by address
async function getRemByAddress(upgrade: SupportedUpgrade, address: string, heatingFuel: HeatingFuel) {
  try {
    const response = await rem_api.getByAddress(upgrade, address, heatingFuel);

    console.log(response.body);
  } catch (error) {
    console.error("Error:", error.response.body);
  }
}

// Call the async function
const address = "address_example"
getRemByAddress(SupportedUpgrade.Baseline, address, HeatingFuel.NaturalGas);

```


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Sign up for an API key [here](https://homes.rewiringamerica.org/api/developer-login).

Authentication schemes defined for the API:
<a id="auth"></a>
### auth

- **Type**: Bearer authentication


## Author

datascience@rewiringamerica.org
