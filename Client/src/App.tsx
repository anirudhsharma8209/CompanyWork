import 'bootstrap/dist/css/bootstrap.min.css'
import data from './data/data.json';
import { useEffect, useState } from 'react'
import UpdateModal from './component/modals/UpdateModal';
import AddModal from './component/modals/AddModal';
import Navbar from './component/Navbar';
import { Fragment } from 'react';
import Register from './auth/Register';
import Login from './auth/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Main from './component/Main';

function App() {
  let [apiResult, setApiResult] = useState(data.products)
  let [valueSearcher, setValueSearcher] = useState<string>("");
  let [showModal, handleShow] = useState<boolean>(false);
  let [updateRecord, setUpdateRecord] = useState();
  let [addProduct, setAddProduct] = useState<boolean>(false);    

  let [giveAccess, setGiveAccess] = useState(false);

  useEffect(() => {
    setApiResult(apiResult);
  }, [])

  const reloadData = () => {
    setApiResult(data.products);
    setValueSearcher("")
  }

  const searchRecord = () => {
    let filterResult = apiResult.filter((item) => item.title == valueSearcher)
    filterResult.length !== 0 ? setApiResult(filterResult) : valueSearcher !== "" ? alert("Record not found....") : null;
  }

  const deleteRecord = (deleteId: number) => {    
    let confirmation = confirm("Do you want to delete : ");
    confirmation
      ? setApiResult(apiResult.filter((item) => item.id != deleteId))
      : null;
  }

  const updateSetter = (updateItem: any) => {
    setUpdateRecord(updateItem);  
  }

  return (
    <Fragment>  
      <BrowserRouter>
      { giveAccess ?  <Navbar setAddProduct={setAddProduct} setGiveAccess={setGiveAccess}  valueSearcher={valueSearcher} setValueSearcher={setValueSearcher} searchRecord={searchRecord} reloadData={reloadData} apiResult={apiResult} />   : null   }
        <Routes>                    
          <Route path='/' index element={!giveAccess ? <Register /> :  <Main apiResult={apiResult} handleShow={handleShow} updateSetter={updateSetter} deleteRecord={deleteRecord} /> } />
          <Route path='/loginuser' element={!giveAccess && <Login setGiveAccess={setGiveAccess} />} />            
        </Routes>        
        <UpdateModal showModal={showModal} handleShow={handleShow} updateRecord={updateRecord} apiResult={apiResult} setApiResult={setApiResult} />                
        <AddModal setAddProductModal={setAddProduct} addProduct={addProduct} apiResult={apiResult} setApiResult={setApiResult} />        
      </BrowserRouter>
    </Fragment>
  )
}

export default App;