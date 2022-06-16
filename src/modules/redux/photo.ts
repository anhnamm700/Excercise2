import { SET_PHOTO, EDIT_PHOTO } from '../contants';

interface initPhotos {
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

const photoReducer = (state: initPhotos, action: any) => {
    switch (action.type) {
        case SET_PHOTO:
            return {
                ...state, 
                title: action.payload
            }
        
        case EDIT_PHOTO:
            // const newPhotos = {...state};



            return {
                ...state,

            }
    }
}

export default photoReducer;