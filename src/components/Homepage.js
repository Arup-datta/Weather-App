import React from 'react'

import { Weather } from './Weather';
import { MidPage } from './MidPage';

export const Homepage = () => {
    return (
        <div>
            {/* <Image>
               

            </Image> */}
            <Weather/>
            <MidPage/>
        </div>
    )
}
