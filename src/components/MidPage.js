import React from 'react'

import { Time } from './Time';
import { Quote } from './Quote';
import { FormComp } from './FormComp';
import { FooterComp } from './FooterComp';

export const MidPage = () => {
    /// Time and Quotes will be in this component
    /// Form component jaabe Arekta modal er vitore, jaar naam hobe
    return (
        <div>
            <Time/>
            <Quote/>
            {/* <FormComp/>    */}
            <FooterComp/>

        </div>
    )
}
