/**
 * Residential Electrification Model API
 * An API for REM, the Residential Electrification Model.
 * The other Rewiring America APIs and methodology for REM are [here](https://api.rewiringamerica.org/).
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: datascience@rewiringamerica.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { BuildingProfile } from '../model/buildingProfile';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBearerAuth } from '../model/models';

import { HttpError } from './apis';

let defaultBasePath = 'https://api.rewiringamerica.org';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum BuildingProfilerApiApiKeys {
}

export class BuildingProfilerApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'auth': new HttpBearerAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: BuildingProfilerApiApiKeys, value: string) {
        (this.authentications as any)[BuildingProfilerApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.auth.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Geocode an address and match against ATTOM data to find building features for a given residence.
     * This implementation takes in an address as a required query parameter and returns geographic characteristics
     * and building features about the home if the input address is valid.
     * @summary Get Home Profile
     * @param address The location of a home.
     */
    public async getHomeProfile (address: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BuildingProfile;  }> {
        const localVarPath = this.basePath + '/api/v1/building_profiler/home';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'address' is not null or undefined
        if (address === null || address === undefined) {
            throw new Error('Required parameter address was null or undefined when calling getHomeProfile.');
        }

        if (address !== undefined) {
            localVarQueryParameters['address'] = ObjectSerializer.serialize(address, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.auth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.auth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: BuildingProfile;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BuildingProfile");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
