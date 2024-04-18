import { configureStore } from '@reduxjs/toolkit';
import {profileReducer, subscriptionReducer, userReducer} from './reducers/userReducer';
import courseReducer from './reducers/courseReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course :courseReducer,
    subscription: subscriptionReducer,
    
  },
});





export default store;
export const server = 'https://skillcanvas-1.onrender.com/api/v1'
