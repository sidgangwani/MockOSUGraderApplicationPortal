import { combineReducers } from 'redux';

import courses from './courses';
import auth from './auth';
import application from './application'
import loader from './loader'

export const reducers = combineReducers({ courses, auth, application,loader});