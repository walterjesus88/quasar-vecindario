import { ApiService, Params, Data } from './ApiService';
import Service from './Service';

export class LoginService extends Service{
	constructor(apiService: ApiService) {
		super(apiService );
	}

	client(data: Data) {
		return this.http.post('api/auth/client', data);
	}

	token(params: Params) {
		return this.http.post('oauth/token', params);
	}
}