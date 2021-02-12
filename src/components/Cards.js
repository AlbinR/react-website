import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1>Previous work</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem
                            src="/src/components/images/codethingy.jpg"
                            text='i like to make websites'
                            label='programming'
                            path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
