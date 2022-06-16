import React, { memo } from "react";
import { useDispatch, useSelector } from 'react-redux';

import style from './style.module.scss';
// import { setPhoto, editPhoto } from '../../../redux/reducer';

interface Props {
    check: boolean,
    id: number,
    src: string,
    alt: string,
    name: string,
    onTitle: (id: number, editTitle: string) => void,
}

const ListItem = (props: Props) => {
    const { check, id, src, alt, name, onTitle } = props;

    const selector: any = useSelector(state => state);

    const [edit, setEdit] = React.useState(false);
    const [editTitle, setEditTitle] = React.useState<any>(name);
    // const dispatch = useDispatch();

    // console.log(selector?.photos[id - 1].title);
    // console.log(editTitle);
    
    

    // console.log(selector?.photos[id - 1].title === name);
    
    const onClick = (e: any) => {
        setEdit(true);
    }
    
    // console.log(editTitle2);
    

    const onBlur = () => {
        setEdit(false);
        onTitle(id, editTitle);
    }

    const onChange = (e: any) => {
        setEditTitle(e.target.value);
    }

    React.useEffect(() => {
        if (editTitle !== name) {
            setEditTitle(name);
        }
    }, [check]);

    

    return (
        <li className={style.item}>
            <img 
                src={src} 
                alt={alt}
                className={style.image}
            />

            <div className={style.content}>
                <input 
                    className={edit ? style.noneInput : style.input} 
                    value={editTitle}
                    onClick={onClick}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                <p>{id}</p>
                <p>{Date.now()}</p>
            </div>
        </li>
    );
}

export default memo(ListItem);