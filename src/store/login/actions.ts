import { ActionTree } from 'vuex';
import { LoginState } from './types';
import { RootState } from '../types';
import { loginService } from '../../inversify/dependencies'; 
import  route  from '../../router' 

export const actions: ActionTree<LoginState,RootState> = {
  	async loguearse({commit, dispatch}, credentials) {
  		console.log(credentials)
      	const data = { 
        	username:credentials['username'], password:credentials['password'] 
      	}
 
      const logindata = await loginService.client(data);
      let {response,error} = await logindata;
      let respuesta1= response
      if(respuesta1){
        let clientData = respuesta1.data['client'];
        let id = clientData.id;
        let secret = clientData.secret;
        let username = data['username'];
        let password = data['password'];
        const params = { username:username, password:password,
          grant_type:'password', client_id: id, client_secret:secret 
        }
        

        const logintoken = await loginService.token(params);   
        let {response,error} = await logindata;
        let respuesta2 = response

        if(respuesta2){
          console.log(respuesta2['data'])
          let userToken= respuesta2['data'];
          localStorage.setItem('user',JSON.stringify(userToken));
        }
        console.log(this);
        this.$router.push({path: '/dashboard'})
        commit('LOGIN_SUCCESS', credentials['username']);

      }
  }

}