import 'bootstrap/dist/css/bootstrap.min.css'
import data from './constant/data/data.json';
import { useEffect, useState } from 'react'
import UpdateModal from './component/modals/UpdateModal';
import AddModal from './component/modals/AddModal';
import Navbar from './component/layout/Navbar';
import { Fragment } from 'react';
import Cookie from 'js-cookie';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import store from './redux/store/Store';
import { getProductAction,renderProducts } from './redux/actionsCreators/actionCreator';
import { PRODUCT } from './constant/constant';

function App() {
  let [apiResult, setApiResult] = useState()  
  let [showModal, handleShow] = useState<boolean>(false);
  let [updateRecord, setUpdateRecord] = useState();
  let [addProduct, setAddProduct] = useState<boolean>(false);
  let [giveAccess, setGiveAccess] = useState(false);

  useEffect(() => {
    (Cookie.get("token") && setGiveAccess(true));;
    getProductAction(PRODUCT.ALLPRODUCTS).then(() => {
      store.dispatch(renderProducts());
      store.getState().then((data: any) => setApiResult(data.data?.products?.map((item: any) => ({ id: item.id, title: item.title, description: item.description, images: [item.images] }))))
    })
  }, []);

  const reloadData = () => {
    // setApiResult(data.products);
    // setValueSearcher("")
  }

  const updateSetter = (updateItem: any) => {
    setUpdateRecord(updateItem);
  }
  return (
    <Fragment>
      <BrowserRouter>        
        {giveAccess && <Navbar setAddProduct={setAddProduct} setApiResult={setApiResult} setGiveAccess={setGiveAccess} reloadData={reloadData} apiResult={apiResult} />}
        <Routes>
          <Route path='/' element={<Home apiResult={apiResult} setApiResult={setApiResult} handleShow={handleShow} setGiveAccess={setGiveAccess} updateSetter={updateSetter} />} />
          <Route path='/login' element={<Login setGiveAccess={setGiveAccess} />} />
          <Route path='register' element={<Register />} />
        </Routes>
        <UpdateModal showModal={showModal} handleShow={handleShow} updateRecord={updateRecord} setApiResult={setApiResult} />
        <AddModal setAddProductModal={setAddProduct} addProduct={addProduct} setApiResult={setApiResult} apiResult={apiResult} />
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
