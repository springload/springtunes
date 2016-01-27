import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return (
            <div className='logo'>
                <img src={ '../img/springtunes.svg' } alt='Springtunes Logo' width='250' height='41' />
            </div>
        );
    }
}
