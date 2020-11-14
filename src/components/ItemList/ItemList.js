import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const  ItemList = (props) => {

const items = props.items;
    const list = items.map(item => {
        return (
            <Item key={item.id} item={item} delete={props.delete} edit={props.edit} />
        ) 
    })
    return (
        <div className="list-container">
            {list}
        </div>
    );
}

export default ItemList;
