import React, {useState , useEffect } from 'react';
import Container from '@material-ui/core/Container';
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import { setLinks } from '../../redux/links/link.action'
import{ connect } from 'react-redux'
import './navbar-style.scss';

import{ getLinksFromAPI } from '../../utils/apiRequests/apiHandler.js'

const Navbar = (props) => {
  const[links, setLinks] = useState(props.linksAPI.links);

  const initialize = async () =>{

    let response = await getLinksFromAPI(); 
    props.addLinks(response);  
    console.log(); 

  }

  useEffect(() => { 
    initialize();
  },[]);

  return (
    <Container  maxWidth="false" className="Nav">                
     <GridContainer  style={{
        margin: "0",
        height: "100%",
        display: "flex",
        alignItems: "center",       
     }}>      
    
        <GridItem xs={12} sm={12} md={6} >
          <div className="LeftItems">
            <span className="Link">{links[0].name}</span>
            <span className="Link">{links[1].name}</span>
          </div>          
        </GridItem>
       
        <GridItem xs={12} sm={12} md={6}>
          <div className="RightItems">
            <span className="Link">{links[2].name}</span>
            <span className="Link">{links[3].name}</span>
            <span className="Link">{links[4].name}</span>
          </div>          
        </GridItem>      
                
     </GridContainer>
    </Container>
  );
}

const mapDispatchToProps = dispatch =>({
  addLinks: a => dispatch(setLinks(a))
})

const mapStateToProps = state =>({
  linksAPI: state.links, 
})

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);
