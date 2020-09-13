import { injectable} from 'inversify';
import { ApiService } from './ApiService';

@injectable()
export default class Service {

	protected http: ApiService;
	
	constructor(apiService: ApiService) {
		this.http = apiService;
		this.http.setSubDomain('comunidad4');
		this.http.setBaseURL();
		this.http.setAuth();
	}
} 