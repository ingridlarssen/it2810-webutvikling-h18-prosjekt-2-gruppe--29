import React, { Component } from 'react';
import { LargeMenuComponent } from './largeMenuComponent.js';
import { ExContainer } from './exContainer.js';
import { Menu } from '../components/menu.js';


export class ContentContainer extends Component {
    render () {
        return (
            <div className='contentContainer'>
                <ExContainer/>
                <LargeMenuComponent/>
                <Menu/>
            </div>
        )
    }
}
