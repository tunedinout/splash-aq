import React from 'react';
import logo from './logo.jpeg';
import {HeaderBar,SideBar,Cards,SearchBar} from 'react-dark-elixir'
import cardItems from './data/cardItems.json'
import headerItems from './data/headerItems.json'
import sidebarItems from './data/sidebarItems.json'
import './App.css';
import {createHashHistory} from 'history'
var history = createHashHistory()

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      active: '',
      showSidebar: true,
      filteredItems: cardItems
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){
    const value = e.target.value;
    const filteredItems = value!==undefined || value!==null || value!=='' ? cardItems.filter(function(cardItem){
      return (cardItem.itemName.toLowerCase().includes(value.toLowerCase()))
    }) : cardItems

    this.setState({filteredItems: filteredItems})
  }

  componentDidMount(){
    history.push('/')
  }
  render(){
    const showSidebar = this.state.showSidebar
    return (
    <div className="content-item-container">
      <div className="main-container">
            <HeaderBar
                      // items={items}
                      // toggleSidebar={() => this.setState({showSidebar: !showSidebar})}
                      logo={logo}
                      active={this.state.active}
                      onChange={(item) => {history.push(item.uri);this.setState({active: item.name})}}
                      user={"Kunal"}/>
          <div className="content-container">
            <SideBar items={sidebarItems}
                      showSidebar={this.state.showSidebar}
                      active={this.state.active}
                      onChange={(item) => {history.push(item.uri);this.setState({active: item.name})}}/>
            {/* <Cards  itemName = {"Fish"}
                    itemPrice = {"10"} 
                    itemDetails = {"Detailed Description is here. Please provide more details bla bla bla bla"} /> */}
            <div className={"view-container"}>
            <div className={"searchbar-container"}>
              <SearchBar 
                  toggleSidebar={() => this.setState({showSidebar: !showSidebar})}
                  inputItems={cardItems} handleInputChange={this.handleInputChange} />
            </div>
            <div className={"cards-container"}>
              {this.state.filteredItems.map(function(filteredItem){
                return (<Cards itemName={filteredItem.itemName} itemPrice={filteredItem.itemPrice} itemDetails={filteredItem.itemDetails} />)
              })}
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
