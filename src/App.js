import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HeaderBar,SideBar,Cards} from 'react-dark-elixir'
import {createHashHistory} from 'history'
var history = createHashHistory()

var items = [{
  name: "Home",
  uri: "/home"
},{
  name: "Items",
  uri: "/items"
}]

var sideItems = [{
  name: "Home1",
  uri: "/home2"
},{
  name: "Items",
  list: [{
    name: "Item1",
    uri: "/item1"
  },{
    name: "Item2",
    uri: "/item2"
  },{
    name: "Item3",
    uri: "/item3"
  }]
},{
  name: "Pages",
  list: [{
    name: "Page1",
    uri: "page1"
  },{
    name: "Page2",
    uri: "page2"
  }]
}]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      active: '',
      showSidebar: true
    }
  }

  componentDidMount(){
    history.push('/')
  }
  render(){
    const showSidebar = this.state.showSidebar
    return (
    <div className="rde-main-container">
          <HeaderBar items={items}
                    toggleSidebar={() => this.setState({showSidebar: !showSidebar})}
                    active={this.state.active}
                    onChange={(item) => {history.push(item.uri);this.setState({active: item.name})}}
                    user={"Kunal"}/>
        <div className="rde-content-container">
          <SideBar items={sideItems}
                    showSidebar={this.state.showSidebar}
                    active={this.state.active}
                    onChange={(item) => {history.push(item.uri);this.setState({active: item.name})}}/>
          <Cards  itemName = {"Fish"}
                  itemPrice = {"10"} 
                  itemDetails = {"Detailed Description is here. Please provide more details bla bla bla bla"} />
        </div>
      </div>
    );
  }
}

export default App;
