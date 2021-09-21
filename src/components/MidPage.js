import React from 'react'

import { Time } from './Time';
import { Quote } from './Quote';
import { FormComp } from './FormComp';

export const MidPage = () => {
    /// Time and Quotes will be in this component
    return (
        <div>
            <Time/>
            <Quote/>
            <FormComp/>
        </div>
    )
}
