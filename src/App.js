import React from 'react';
import './App.css';
import Navbar from './components/navbar.js'
import Bisection from './components/Root of Equations/bisection.js'
import FalsePosition from './components/Root of Equations/false-position'
import Onepoint from './components/Root of Equations/one-point-iteration'
import Newton from './components/Root of Equations/newton-raphson'
import Cramer from './components/System of Linear Equations/cramer-rule'
import Secant from './components/Root of Equations/secant'
import {Layout, Menu } from 'antd';


class NumerApp extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      pagecontent: "bisection"
    }
    this.callback = this.callback.bind(this);
  }
  callback = (v) => {
    this.setState({
      pagecontent : v
    });
    console.log(this.state.pagecontent)
  }
  render() {
    console.log(this.state.pagecontent)
    const { Header } = Layout;
    const pagecontent = this.state.pagecontent;
    return (
      <div>
      <Header  style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item className='text-light bg-info' key="1">Numerical Method</Menu.Item>
        </Menu>
      </Header>
      <Layout>
      <Header/>
      <Layout style={{minHeight: '100vh'}}>
        <Navbar parentCallback={this.callback} />{/*ส่วนที่ไปเรียก callback*/}
        
      {
        pagecontent === "bisection" ?
         <Bisection/>
        : 
        pagecontent === "false" ?
        <FalsePosition/>
        :
        pagecontent === "onepoint" ?
        <Onepoint/>
        :
        pagecontent === "newton" ?
        <Newton/>
        :
        pagecontent === "secant" ?
        <Secant/>
        :
        pagecontent === "cramer" ?
        <Cramer/>
        :''
      }
      
      </Layout>
      </Layout>
     </div>     
    );
  }
}
export default NumerApp;