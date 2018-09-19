import React, { Component } from 'react';
import { LargeMenuComponent } from './largeMenuComponent.js';
import { ExContainer } from './exContainer.js';
import { Menu } from './menu.js';

export class ContentContainer extends Component {

  constructor(props) {
    super(props);
    this.updateSelectedTab = this.updateSelectedTab.bind(this);
    this.state = {
      selectedPic: "Instruments",
      selectedText: "Instruments",
      selectedAudio: "Instruments",
      selectedTab: 1,
    }
  }

  updateSelectedTab = (tabNumber) => {
    this.setState({selectedTab : tabNumber}, function () {
        console.log(this.state.selectedTab);
    });
  };

  updateRadioButtonAttr = (e, type) => {
    //contentcontainer

    if(type === "selectedPic"){
      this.setState({
        selectedPic: e.target.value
      })
    }
    if(type === "selectedText"){
      this.setState({
        selectedText: e.target.value
      })
    }
    if(type === "selectedAudio"){
      this.setState({
        selectedAudio: e.target.value
      })
    }
  }

  render () {
      return (
          <div className='contentContainer'>
              <ExContainer updateSelectedTab={this.updateSelectedTab} theText={this.state.selectedText+this.state.selectedTab} imgName={this.state.selectedPic+this.state.selectedTab}/>
              <Menu updateRadioButtonAttr={this.updateRadioButtonAttr}/>
              <LargeMenuComponent updateRadioButtonAttr={this.updateRadioButtonAttr}/>
          </div>
      )
  }
}
