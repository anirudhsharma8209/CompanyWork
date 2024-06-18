import { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';

const TopHeader = (props: any) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Container fluid className='d-flex mb-3 justify-content-between align-items-center'>
        <div className="heading">
          <h1 className='m-3'>Products</h1>
        </div>
        <div className="logOut w-25 d-flex justify-content-center">
          <button className='bg-blue-600 hover:bd-red-800 p-3 rounded-xl'>
            Total Products : {props?.apiResult?.length}
          </button>
        </div>
        <div className="logOut w-50 d-flex justify-content-center">
          <button className='bg-red-500 p-3 rounded-circle' onClick={() => { navigate("/login"); Cookie.remove('token'); props.setGiveAccess(false) }}>
            <IoMdLogOut style={{ fontSize: "20px" }} />
          </button>
        </div>
        <div className="addProduct">
          <button className='rounded-lg p-2 bg-violet-600' onClick={() => { props.setAddProduct(true); }}>Add Product </button>
        </div>
      </Container >
    </Fragment>
  )
}

export default TopHeader