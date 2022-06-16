import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '../ListItem';
import { setPhoto, editPhoto } from '../../../redux/reducer';
import style from './style.module.scss';

interface Props {
    data: any,
    check: boolean,
    setChange: (value: any) => void
}

const List = (props: Props) => {
    const { data, check, setChange } = props;
    const newArr: any[] = [];


    const handleTitle = React.useCallback((id: number, title: string) => {
        newArr.push({
            id: id,
            title: title
        });
        
        setChange({
            id: id,
            title: title
        });
    }, []);

    
    

    
    return (
        <div className={style.wrapper}>
            <ul>
                {
                    data?.photos?.map((item : any) => {
                        // console.log(item);
                        
                        return (
                            <ListItem
                                key={item.id}
                                check={check}
                                id={item.id}
                                src={item.url}
                                alt={item.title}
                                name={item.title}
                                onTitle={handleTitle}
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default List;