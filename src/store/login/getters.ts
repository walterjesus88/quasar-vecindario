import { GetterTree } from 'vuex';
import { LoginState } from './types';
import { RootState } from './../types';
export const getters: GetterTree<LoginState, RootState> = {
  //log: (state, getters, rootState) => state.isLoggedIn
}