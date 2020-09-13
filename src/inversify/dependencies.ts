
import { LoginService } from '../services/LoginService';

import container from './inversify.config';


export const loginService: LoginService = container.resolve<LoginService>(LoginService);

