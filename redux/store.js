import { configureStore } from "@reduxjs/toolkit";
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsSlice } from '../features/comments/commentsSlice';
import { partnersSlice } from '../features/partners/partnersSlice';
import { promotionsSlice } from '../features/promotions/promotionsSlice';

export const store = configureStore( {
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer
    }

}); 