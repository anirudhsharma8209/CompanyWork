import {Fragment, useEffect} from 'react'
import Card from './card/Card';
import { Container } from 'react-bootstrap';
import Cookie from 'js-cookie';

import { useNavigate } from 'react-router-dom';

const Home = (props : any) => {  
  const navigate = useNavigate();

  useEffect(() => {                 
    if(!Cookie.get("token")){
      navigate("/login");
    }else{
      navigate("/");     
    }    
  },[Cookie])

  return (
    <Fragment>      
        {           
            <Container fluid className="flex-wrap justify-content-center align-items-center gap-4  d-flex mt-5">        
            {
              props?.apiResult?.map((item : any) =>
                <div key={item.id}>
                  <Card item={item} apiResult={props.apiResult} handleShow={props.handleShow} setApiResult={props.setApiResult} updateSetter={props.updateSetter} deleteRecord={props.deleteRecord} />
                </div>
              )
            }
            </Container>
        }
    </Fragment>
  )
}

export default Home;