import React from 'react';
import spinner from '../../../assets/spinner.gif'

export const Spinner = () => {
    return (
        <div className='spinner'>
            <img
                src={spinner}
                style={{width: "200px", margin: "auto", display: "block"}}
                alt="Loading..."
            />
        </div>
    )
}