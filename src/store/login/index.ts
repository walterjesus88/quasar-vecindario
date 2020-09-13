import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { LoginState } from './types';
import { RootState } from './../types';

// export const state: ServiceState = {
	
// }

const namespaced: boolean = true;

export const login: Module<LoginState,RootState> = {
	namespaced,
	getters,
	actions,
	mutations
}