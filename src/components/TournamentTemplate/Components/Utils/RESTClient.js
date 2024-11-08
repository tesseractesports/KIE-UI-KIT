import Toast from '../Services/ToastService';

import AuthService from '../Services/AuthService';
let API_ENDPOINT = import.meta.env.VITE_API_URL;  // Import the API endpoint from the environment variables   

import { loader } from "../Stores/LoaderStore" // Import the loader store

import CryptoJS from 'crypto-js';


class RESTClient {

    constructor(slug = null) {
        this.slug = API_ENDPOINT + slug;
    }

    isdebugger = false;

    getUserTimeZone() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    timeZone = this.getUserTimeZone();


    async get(url, showLoader = true) {

        if (showLoader) loader.set(true); // Show the loader

        let result = await fetch(this.slug + url, {
            method: 'GET',
            headers: {
                 
                'Accept': 'text/encrypted, text/json',
                'User-Time-Zone': this.timeZone,
                ...this.auth()
            }
        });
        return this.processResponse(result);
    }

    

    async post(url, data, showLoader = true) {
        if (showLoader) loader.set(true); // Show the loader
        let edata;
        if(!this.isdebugger){
            await this.encrypt(JSON.stringify(data)).then((res) => {
             edata = res
            })
        } else {
            edata = JSON.stringify(data);
        }

        let result = await fetch(this.slug + url, {
            method: 'POST',
            headers: {
                
                'Accept': 'text/encrypted, text/json',
                'User-Time-Zone': this.timeZone,
                ...this.auth()
            },
            body: edata

        });
        return this.processResponse(result);
    }

    async put(url, data, showLoader = true) {
        if (showLoader) loader.set(true); // Show the loader
        let edata;
        if(!this.isdebugger){
            await this.encrypt(JSON.stringify(data)).then((res) => {
             edata = res
            })
        } else {
            edata = JSON.stringify(data);
        }

        let result = await fetch(this.slug + url, {
            method: 'PUT',
            headers: {
                 
                'Accept': 'text/encrypted, text/json',
                'User-Time-Zone': this.timeZone,
                ...this.auth()
            },
            body: edata
        });
        return this.processResponse(result);
    }
    async patch(url, data, showLoader = true) {

        // patch the values 
        if (showLoader) loader.set(true); // Show the loader
        let edata;

        if(!this.isdebugger){
            await this.encrypt(JSON.stringify(data)).then((res) => {
             edata = res
            })
        } else {
            edata = JSON.stringify(data);
        }


        let result = await fetch(this.slug + url, {
            method: 'PATCH',
            headers: {
                 
                'Accept': 'text/encrypted, text/json',
                'User-Time-Zone': this.timeZone,
                ...this.auth()
            },
            body: edata
        });
        return this.processResponse(result);
    }


    async delete(url, showLoader = true) {
        if (showLoader) loader.set(true); // Show the loader
        let result = await fetch(this.slug + url, {
            method: 'DELETE',
            headers: {
                
                'Accept': 'text/encrypted, text/json',
                'User-Time-Zone': this.timeZone,
                ...this.auth()
            }
        });
        return this.processResponse(result);
    }

    auth(type) {
        const tokens = AuthService.getTokens();
        if(type === 'file'){
            return tokens && tokens.access ? {
                'Authorization': 'Bearer ' + tokens.access.token,
                 'fileupload': 'fileupload',
            } : {  
                'fileupload': 'fileupload', 
            };
        }else if (this.isdebugger) {
            return tokens && tokens.access ? {
                'Authorization': 'Bearer ' + tokens.access.token,
                'Content-Type': 'application/json',
                'ixgdebugger': 'ixgdebuggerenabled'
            } : {
                'Content-Type': 'application/json',
                'ixgdebugger': 'ixgdebuggerenabled'
            };
        } else {
            return tokens && tokens.access ? {
                'Content-Type': 'text/encrypted',
                'Authorization': 'Bearer ' + tokens.access.token,
            } : {'Content-Type': 'text/encrypted'};
        }
    }

    // encrypt the data
    encrypt(data) {
        const token = AuthService.getTokens()?.access.token;
        let authToken;

        if (token) {
            authToken = token;
        } else {
            authToken = 'bXljcnlwdG9rZXlzZWNyZXRrZXlzZWNyZXRrZXkzMXN0b2tlbjM=';
        }

        return this.encryptRequest(data, authToken)
    }   
       


    async processResponse(result) {
        // Hide the loader regardless of the outcome
        
        loader.set(false);
        let data;
        const token = AuthService.getTokens()?.access.token;
        let authToken;

        if (token) {
            authToken = token;
        } else {
            authToken = 'bXljcnlwdG9rZXlzZWNyZXRrZXlzZWNyZXRrZXkzMXN0b2tlbjM=';
        }

        if (result.headers.get('Content-Type').includes('text/encrypted')) {
            let resultEnc = await result.text()
            data = await this.decrypt(resultEnc, authToken);
            //console.log(data)
            data = JSON.parse(data);
        } else {
            data = await result.json();
        }


        try {
            // First, check if the response is okay (status code 200-299)
            
            if (result.status < 200 || result.status >= 300) {
                // status 429 is for rate limit exceeded
                if (result.status === 429) {
                    Toast.error(data);
                    return { message: data, code: result.status };
                }else if (data.message) {
                    Toast.error(data.message);
                    return data;
                } else {
                    throw new Error(`HTTP error! status: ${result.status}`);
                }

            }

           return data;
           
        } catch (error) {
            // General error handling, such as network issues or parsing errors
            console.error('Error processing response:', error.message);
            Toast.error(`An unexpected error occurred: ${error.message}`);
            // Optionally, rethrow the error if you want calling functions to handle it as well
            throw error;
        }
    }


    // Example CRUD and utility methods that use the RESTClient methods
    async find(query, fields, limit, skip) {
        // your implementation...
    }

    async create(data) {
        return this.post(this.slug, data);
    }

    async update(id, data) {
        return this.put(`${this.slug}/${id}`, data);
    }

    async findOne(query, fields) {
        // your implementation...
    }

    async count(query) {
        // your implementation...
    }

    async findById(id) {
        return this.get(`${this.slug}/${id}`);
    }

    async search(q) {
        return this.get(`${this.slug}?_q=${q}`);
    }

    async updateById(id, data) {
        return this.put(`${this.slug}/${id}`, data);
    }

    // sendign uplaod file request change content tyupe to multipart/form-data

    async uploadFile(url, file) {
        const formData = new FormData();
        formData.append("file", file);

        const response = await  fetch(this.slug + url, {
          method: "POST",
          headers: {
            ...this.auth('file')
          },
          body: formData,
        });

        return await response.json();
      };

    async decrypt(encryptedText, authToken) {
        const secretKey = CryptoJS.SHA256(authToken).toString(CryptoJS.enc.Base64).substr(0, 32);
        const parts = encryptedText.split(':');
        const iv = CryptoJS.enc.Base64.parse(parts[0]);
        const encryptedData = CryptoJS.enc.Base64.parse(parts[1]);
        const decrypted = CryptoJS.AES.decrypt({ ciphertext: encryptedData }, CryptoJS.enc.Utf8.parse(secretKey), { iv: iv });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

    async encryptRequest(data, authToken) {
        const secretKey = CryptoJS.SHA256(authToken).toString(CryptoJS.enc.Base64).substring(0, 32);
        const iv = CryptoJS.lib.WordArray.random(16);
        const encryptedData = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(secretKey), {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).ciphertext.toString(CryptoJS.enc.Base64);
        
        const encryptedRequest = iv.toString(CryptoJS.enc.Base64) + ':' + encryptedData;
        return encryptedRequest;
    }

}

export default RESTClient;
 