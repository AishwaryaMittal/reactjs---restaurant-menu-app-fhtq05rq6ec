import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom' 

class Category extends React.Component{
  constructor(props){
    super(props);
    this.state={
      categories:[]
    }
  }
  componentDidMount(){
    console.log(this.props.match.params.categoryName);
    axios.get(' https://stream-restaurant-menu-svc.herokuapp.com/item?category='+this.props.match.params.categoryName).then((res)=>{
      this.setState({categories:res.data});
    });     
  }
  render(){
    return( 
      <div>
        {this.state.categories.map((category)=><div>{category.name}</div>)}
      </div>
      );
  }
  
}

export default Category;
