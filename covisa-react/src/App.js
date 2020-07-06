import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { Nav, Navbar } from "react-bootstrap";
import logo from './assets/logo.webp';

import AOS from 'aos';

import { BrowserRouter as Router, Route , Link} from 'react-router-dom';

import { TitlePage } from "./components/TitlePage/TitlePage";
import { Features } from "./components/Feautures/Features";
import { CurrentScenario } from "./components/CurrentScenario/CurrentScenario";
import { Symptoms } from "./components/Symptoms/Symptoms";
import { AnalysisFetch } from "./components/Analysis/AnalysisFetch";
import { About } from "./components/About/About";
import { Prevention } from "./components/Prevention/Prevention";




function App() {

  AOS.init({
    duration: 4000
  });

  const[data, setData] = useState([]);

  const url="https://api.jsonbin.io/b/5eac0c3f4c87c3359a64cf2f";
  const skey=//The secret key for our jsonbin that updates the numbers from MoHFW;

  useEffect(() =>{

    // To fetch data from our jsonbin
  /*   axios.get(url,  { 'headers': { "secret-key": skey } }).then((res) => {setData(res.data)}); */
   
  },[]);
 
  return (
    <Router>
    <div className="App">
    <Navbar className="mainnav" sticky="top" collapseOnSelect expand="lg" variant="dark">
        <Link to="/" className="logo" >
        <div>
            <div style={{height : "auto", width : "30%" , display: "inline-block", float:"left"}}>
              <img
                src={logo} 
                alt="Logo" 
                style={{height: "60px", width : "70px", verticalAlign: "middle",lineHeight:"200px",padding:2, marginRight: 5, marginLeft: 5}}
                />
            </div>
            <div style={{height : "auto", width : "60%" , verticalAlign: "middle", display: "inline-block", float: "right", paddingLeft: 4}}><span
                style={{lineHeight: "60px", fontSize: "2em", fontWeight: "600", color : "white"}}>CoviSA</span></div>
        </div>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-4 justify-content-center">
            <Nav.Link className="navlink mx-2" href="#"><Link className="links" to="/">HOME</Link></Nav.Link>
            <Nav.Link className="navlink mx-2" href="#"><Link className="links" to="/analysis">ANALYSIS</Link></Nav.Link>
            <Nav.Link className="navlink mx-2" href="#"><Link className="links" to="/about">ABOUT</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/" render={props =>(
          <React.Fragment>
             <div className="bg-1">
              <TitlePage/>
            </div>
            <div className="bg-2">
              <Features />
            </div>
            <div className="bg-2">
            {data.map((item, index)=>{
            if (item.state==="India")
            {
              return <CurrentScenario  key= {index} confirmed={item.confirmed} recovered={item.recovered} deceased={item.deceased} lastupdate={item.lastupdate}/>
            }
            else return null;
            })} 
            </div>
            <div className="bg-2">
              <Symptoms/>
            </div>
            <div className="bg-1">
              <Prevention/>
            </div>
          </React.Fragment>
      )} />
      <Route path="/analysis"render={props =>(
          <React.Fragment>
             <div className="bg-2">
              <AnalysisFetch />
            </div>
          </React.Fragment>
      )} />
      <Route path="/about" component={About}
        
        />
   
    </div>

    <div style={{background:"#025E72", width: "100%", height:"10vh", textAlign:"center"}}>
        <p style={{color: "white", paddingTop:20}}> © 2020 : CoviSA</p>
    </div>
    </Router>
  );
}

export default App;
