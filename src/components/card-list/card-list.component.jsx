import React from 'react';

// Component
    import { Card } from '../card/card.component';

// Style
    import './card-list.styles.css';

export const CardList = ( props ) => {

    return (
        <div className="card-list">
            {
                props.monsters.map((monster) => {
                    return ( 
                        <Card key = { monster.id } monster={ monster } />
                    );
                })
            } 
        </div>
    );
};
