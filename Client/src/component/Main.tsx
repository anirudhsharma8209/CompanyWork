import {Fragment} from 'react'
import Card from './Card';
import { Container } from 'react-bootstrap';


const Main = (props : any) => {
  return (
    <Fragment>
        <Container fluid className="flex-wrap justify-content-center align-items-center gap-4  d-flex mt-5">
         {
          props.apiResult.map((item : any) =>
            <div key={item.id}>
              <Card item={item} handleShow={props.handleShow} updateSetter={props.updateSetter} deleteRecord={props.deleteRecord} />
            </div>
          )
        }
        </Container>
    </Fragment>
  )
}

export default Main