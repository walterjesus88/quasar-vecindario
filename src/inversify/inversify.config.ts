import "reflect-metadata";
import { Container } from 'inversify';
import { ApiService } from '../services/ApiService';
import Service from '../services/Service';
import { LoginService } from '../services/LoginService';

let container = new Container();

container.bind<ApiService>(ApiService).toSelf();
container.bind<LoginService>(LoginService).to(LoginService);

export default container;		