import React from 'react'
import { FormComp } from './FormComp';
import { MainFocus } from './MainFocus';
import { TodoButton } from './TodoButton';

import { IoAddCircleSharp } from "react-icons/io5";
///IoCheckmarkDoneSharp

export const FooterComp = () => {
    /// Includes a button to change background,
    /// Includes a modal to change todos (current FormComp)
    /// Includes main focus form
    return (
        <div>
            <MainFocus/>
            {/* <FormComp/>  */}
            <TodoButton/>
           {/* <FormComp/> */}
        </div>
    )
}


/// whole form component should be placed under a modal 