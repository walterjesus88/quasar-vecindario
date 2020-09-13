import { injectable } from 'inversify';
import 'reflect-metadata';
import { AxiosInstance } from 'axios';
import router from '../router/routes';
import axios from 'axios';


export interface Params {
	[key: string]: any;

}

export interface Data {
	[key: string]: any;
}

@injectable()
export class ApiService  {

	private axiosClient: AxiosInstance;
	private domain: string;
	private subDomain: string;
	private subDirectory: string;
	private accessToken: string;
	private tokenType: string;

	constructor() {
		this.axiosClient = axios.create({

		});
		this.domain = 'vecindario.com/';
		this.subDomain = 'nosirve';
		this.subDirectory = '';
		this.accessToken = '';
		this.tokenType = '';
	};

	get(url: string, params?: Params) {
		return this.axiosClient({
			method: 'get',
			url: url,
			params: params,
		});
	};


	post(url: string, data: Data) {

		let response = this.axiosClient({
			method: 'post',
			url: url,
			data: data,
		})
		.then(response => ({response: response, error: null}),
			error => ({response: null, error: error})
		);

		return response;
	};

	put(url: string, data: Data) {
		return this.axiosClient({
			method: 'put',
			url: url,
			data: data,
		});
	};

	patch(url: string, data: Data) {
		return this.axiosClient({
			method: 'patch',
			url: url,
			data: data,
		});
	};

	delete(url: string) {
		return this.axiosClient({
			method: 'delete',
			url: url,
		});
	};

	request(method: string, url: string, params: Params, data: Data) {
		let response = this.axiosClient({
			method: method,
			url: url,
			params: params,
			data: data,
		})
		.then(response => ({response: response, error: null}),
			error => ({response: null, error: error})
		);

		return response;
	};


	setBaseURL() {
		let subDomain = this.subDomain;
		let domain = this.domain;
		let subDirectory = this.subDirectory;
        this.axiosClient.defaults.baseURL = `http://${subDomain}${domain}${subDirectory}`;
	};

	setSubDomain(subDomain: string) {
		this.subDomain = `${subDomain}.`;
	}

	setSubDirectory(subDirectory: string) {
		this.subDirectory = `${subDirectory}/`;
	}

	setAuth() {
		//console.log('setAuth')
		this.setAccessToken();
		this.setTokenType();
        this.axiosClient.defaults.headers.common['Authorization'] = `${this.tokenType} ${this.accessToken}`;

        this.axiosClient.interceptors.request.use((config) => {
	    	//console.log('request',config);
	    	return config;
	    },(error) => {
               //	console.log('error habilitando interceptors') 
                return Promise.reject(error)
        });

	    this.axiosClient.interceptors.response.use((response) => {
	    	//console.log('response',response);

	    	return response;
	    },(error) => {
	    	    	
	    	if (error.response.status == 401 || error.response.status == 500) {
	    	
	    	 	localStorage.removeItem('user');
	    	 	localStorage.removeItem('datos');
		        //router.push({ name: 'login' });
				return Promise.reject(error)	
		    }
	

	    });

	}

	setTokenType() {
		let userStorage = localStorage.getItem('user');
		if (userStorage) {
			let token = JSON.parse(userStorage);
			this.tokenType = token.token_type;
		}
	}

	setAccessToken() {
		let userStorage = localStorage.getItem('user');
		if (userStorage) {
			let token = JSON.parse(userStorage);
			this.accessToken = token.access_token;
		}
	}
}
