import { Fragment } from 'react'
import TopHeader from './TopHeader'
import { Container } from 'react-bootstrap'
import Header from './Header'


const NavBar = (props : any) => {
  return (
    <Fragment>
        <TopHeader setAddProduct={props.setAddProduct} apiResult={props.apiResult} setGiveAccess={props.setGiveAccess} />         
        <Container fluid className='w-75  d-flex justify-content-between align-items-center'>
            <Header valueSearcher={props.valueSearcher} setValueSearcher={props.setValueSearcher} searchRecord={props.searchRecord} reloadData={props.reloadData} />      
        </Container>
    </Fragment>
  )
}

export default NavBar