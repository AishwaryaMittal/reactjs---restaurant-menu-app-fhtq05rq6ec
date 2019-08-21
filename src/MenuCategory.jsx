import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class MenuCategory extends React.Component{
  constructor(){
    super();
    this.state={
      categories:[]
    }
  }
  componentDidMount(){
    axios.get('http://stream-restaurant-menu-svc.herokuapp.com/category').then((res)=>{
      this.setState({categories:res.data});
    });

  }
  render(){
    
    return( 
      <div>
        {this.state.categories.map((category)=><div><Link to="/category">{category.name}</Link></div>)}
      </div>

    );

  }
  
}

export default MenuCategory;
