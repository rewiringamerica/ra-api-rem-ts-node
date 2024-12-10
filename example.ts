import { ResidentialElectrificationModelApi, BuildingProfilerApi } from "@rewiringamerica/rem/api/apis";
import { ValidUpgrade } from "@rewiringamerica/rem/model/validUpgrade";
import { HeatingFuel } from "@rewiringamerica/rem/model/heatingFuel";
import { HttpBearerAuth } from "@rewiringamerica/rem/model/models";

// Initialize the clients
const baseUrl = "YOUR_URL_HERE"
const key = new HttpBearerAuth()
key.accessToken = "YOUR_API_KEY_HERE"

const rem_api = new ResidentialElectrificationModelApi(baseUrl);
rem_api.setDefaultAuthentication(key)

const bp_api = new BuildingProfilerApi(baseUrl);
bp_api.setDefaultAuthentication(key)

// Get savings by address
async function getRemByAddress(upgrade: ValidUpgrade, address: string, heatingFuel: HeatingFuel) {
  try {
    const response = await rem_api.remGetByAddress(upgrade, address, heatingFuel);

    console.log(response.body);
  } catch (error) {
    console.error("Error:", error.response.body);
  }
}

// Get building profile
async function getBuildingProfile(address: string) {
    try {
      const response = await bp_api.buildingProfilerGetHomeProfile(address)
  
      console.log(response.body);
    } catch (error) {
      console.error("Error:", error.response.body);
    }
  }

// Call the async functions
const address = "YOUR_ADDRESS_HERE"
getRemByAddress(ValidUpgrade.BasicEnclosure, address, HeatingFuel.NaturalGas);
getBuildingProfile(address);