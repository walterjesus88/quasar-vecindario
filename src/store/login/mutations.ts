import { MutationTree } from 'vuex';
import { RootState } from './../types';
import { LoginState } from './types';

export const mutations: MutationTree<LoginState> = {
  LOGIN_SUCCESS(state, payload) {
  	state.isLoggedIn = true;
  	state.username = payload;
  }
}