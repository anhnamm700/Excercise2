import { SET_PHOTO, EDIT_PHOTO } from '../modules/contants';

export const setPhoto = (payload: any) => {
    return {
        type: SET_PHOTO,
        ...payload
    }
}

export const editPhoto = (payload: any) => {
    return {
        type: EDIT_PHOTO,
        ...payload
    }
}