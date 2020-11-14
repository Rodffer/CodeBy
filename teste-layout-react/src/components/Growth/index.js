import React from 'react';

import * as G from './styled';

import Item1 from '../GrowthItem1';
import Item2 from '../GrowthItem2';
import Item3 from '../GrowthItem3';
import Item4 from '../GrowthItem4';
import Item5 from '../GrowthItem5';
import Item6 from '../GrowthItem6';

export default function Growth() {
    return (
        <>
            <G.Growth>
                <G.GrowthHeader>
                    <h2>growth plans</h2>
                    <p>
                        <b>take your business to the next level</b>
                    </p>
                </G.GrowthHeader>

                <Item1 />
                <Item2 />
                <Item3 />
                <Item4 />
                <Item5 />
                <Item6 />
            </G.Growth>
        </>
    );
}
