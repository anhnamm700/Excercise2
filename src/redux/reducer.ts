import { createSlice } from  '@reduxjs/toolkit';

import { SET_PHOTO, EDIT_PHOTO } from '../modules/contants';

interface initPhoto {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

const initPhoto = {
    photo: {},
    photos: []
}

const photoSlice = createSlice({
    name: 'photo',
    initialState: initPhoto,
    reducers: {
        setPhoto: (state: any, action: any) => {
            state.title = action.payload
        },
        editPhoto: (state: any, action: any) => {
            state.photos.splice(action.payload.id - 1, 1, { ...action.payload, title: action.payload.title });
        },
        addPhoto: (state: any, action: any) => {
            state.photos = [...state.photos, ...action.payload];
        },
        getState: (state: any) => {
            state.photos = [...state.photos];
        },
    }
});

const { actions, reducer } = photoSlice;

export const { setPhoto, editPhoto, addPhoto, getState } = actions;

export const create = (state: any) => {
    return state.photo;
  };

export default reducer;

