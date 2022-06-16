import React from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { setPhoto, editPhoto, addPhoto, getState } from '../../redux/reducer';

import List from "../home/List";
import store from "../../store";

const Home = () => {
    const dispatch = useDispatch();
    const selector: any = useSelector(state => state);
    const [change, setChange] = React.useState<any>([]);
    // const [newData, setNewData] = React.useState<any>({});
    const [check, setCheck] = React.useState(false);

    React.useEffect(() => {
       getAPI();
    }, []);


    const getAPI = React.useCallback(() => {
        axios('https://jsonplaceholder.typicode.com/photos?_start=0&_end=6')
            .then(res => dispatch(addPhoto(res.data)))
            .catch(err => console.log(err))
    }, []);

    const handleReset = () => {
        // setNewData(store.getState());
        setCheck(!check);
        setChange([]);
        dispatch(getState());
    }


    
    const handleUpdate = () => {
        change?.map((photo: any, index: number) => {
            if (selector?.photos[photo.id - 1]) {
                dispatch(editPhoto({
                    id: photo.id,
                    title: photo.title,
                    albumId: selector?.photos[photo.id - 1].albumId,
                    url: selector?.photos[photo.id - 1].url,
                    thumbnailUrl: selector?.photos[photo.id - 1].thumbnailUrl,
                }));
            }
            
        })
    }
    
    
    
    const handleChange = (value: any) => {
        setChange((prev: any): any => {
            return [...prev, value];
        });
    }

    return (
        <div>
            <div>
                <button onClick={handleUpdate}>Cập nhật</button>
                <button onClick={handleReset}>Đặt lại</button>
            </div>

            <List 
                data={selector}
                check={check}
                setChange={(value) => handleChange(value)}
            />
        </div>
    );
}

export default Home;