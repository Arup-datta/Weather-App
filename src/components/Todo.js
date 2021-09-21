import React from 'react'

export const Todo = ({data}) => {
    return (
        <div className = "form-data">
            {data}
            <button> Delete </button>
        </div>
    )
}
