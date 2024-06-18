import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'
import TopHeader from './TopHeader'


const NavBar = (props : any) => {
  return (
    <Fragment>
        <TopHeader setAddProduct={props.setAddProduct} apiResult={props.apiResult} setGiveAccess={props.setGiveAccess} />         
        <Container fluid className='w-75  d-flex justify-content-between align-items-center'>
            <Header setApiResult={props.setApiResult} apiResult={props.apiResult}  searchRecord={props.searchRecord} reloadData={props.reloadData} />      
        </Container>
    </Fragment>
  )
}

export default NavBar