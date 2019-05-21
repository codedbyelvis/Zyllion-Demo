import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './CompanyInfo.css';
import FormContainer from './CompanyInfo-FC';
// import W9 from '../../../W9/index.html'
// var myw9form = {__html:'foo'}

export default class CompanyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          step : '3',
          progress : 66,
          isLoaded: false,
          page:{__html:'foobar '}
        };
      }

    componentDidMount() {
        window.scrollTo(0, 0);
        fetch('../../../W9/index.html')
        .then(res=>{
          console.log("Help me",(res))
          this.state.page = {__html:res.data}
          
        }).then (
          (result)=>{this.setState({isLoaded:true})}
        )
       
    
    }

    render() {
      const {step,progress,isLoaded,page} = this.state
      console.log(page)
        return (
            <div dangerouslySetInnerHTML={page}/>

    )
  }
}