import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { IoSearch } from "react-icons/io5";
import data from './data/data.json';
import { useEffect, useState } from 'react'
import UpdateModal from './modals/UpdateModal';
import AddModal from './modals/AddModal';
import { IoReload } from "react-icons/io5";
import {Card} from './component/Card';
// import {addProductCreator} from 
// interface Products {
//   id : number,
//   title : string,
//   description : string,
//   category : string,
//   price : number,
//   discountPercentage : number,
//   rating : number,  
// };

function App() {
  let [apiResult ,setApiResult] = useState(data.products) 
  let [valueSearcher, setValueSearcher] = useState<string>("");
  let [showModal, handleShow] = useState<boolean>(false);
  let [updateRecord, setUpdateRecord] = useState();
  let [addProduct, setAddProduct] = useState<boolean>(false);

  useEffect(()=>{                   
    setApiResult(apiResult);
  }, [])


  const reloadData = () => {
    setApiResult(data.products);
    setValueSearcher("")
  }

  const searchRecord = () =>  {        
    let filterResult = apiResult.filter((item) => item.title == valueSearcher)
    filterResult.length !== 0 ? setApiResult(filterResult) : valueSearcher !== "" ? alert("Record not found....") : null;    
  }

  const deleteRecord = (deleteId : number) => {
    let confirmation = confirm("Do you want to delete : ");    
    confirmation  
      ? setApiResult(apiResult.filter((item) => item.id!= deleteId))
      : null;    
  }  

  const updateSetter = (updateItem : any) => {         
    setUpdateRecord(updateItem);
  }
  return   (
    <>      
      <Container fluid className='d-flex justify-content-between align-items-center'>
        <div className="heading">
          <h1 className='m-3'>Products</h1>
        </div>              
        <div className="addProduct">
          <button className='rounded-lg p-2 bg-violet-600' onClick={() => {setAddProduct(true);}}>Add Product </button>
        </div>
      </Container>
      <Container fluid className='w-75  d-flex justify-content-between align-items-center'>
        <div className="searcher w-50 d-flex justify-content-around align-items-center w-75 ">
          <input type="text"className='form-control ' value={valueSearcher}  onChange={(event) => {setValueSearcher(event.target.value)}} placeholder='Search Products : ' />           
        </div>
        <div className="buttons w-50 h-100 ms-5 d-flex justify-content-center">
          <button className='p-2 text-white bg-sky-500 rounded-lg d-flex justify-content-center' style={{width : "100px"}} onClick={searchRecord}>
            <IoSearch />
          </button>
        </div>
        <div className="reloadData w-50 d-flex justify-content-center">
          <button onClick={reloadData} className="bg-purple-500 p-2 d-flex justify-content-center rounded-lg" style={{width : "100px"}}>
            <IoReload />
          </button>
        </div>
      </Container>
      <Container fluid className="flex-wrap justify-content-center align-items-center gap-4  d-flex mt-5">
        {
          apiResult.map((item) => (      
            // <div className="card" key={item.id} style={{width: "18rem", height : "25rem"}}>
            //     <img src={item.images[0]} className='img-fluid card-img-top' style={{height : "180px", width : "150px"}} />
            //     <div className="card-body" style={{height : "50px"}}>
            //       <h5 style={{fontSize :"15px"}}>{item.title}</h5>
            //       <p style={{fontSize : "14px"}}>{item.description}</p>
            //     </div>
            //     <div className="d-flex mb-3 justify-content-around align-items-center">
            //       <button className='bg-green-500 hover:bg-green-900  text-white p-2 rounded-lg' onClick={() => {handleShow(true); updateSetter(item)}}>Update</button>
            //       <button className='bg-red-600 hover:bg-red-900 text-white p-2 rounded-lg' style={{width : "100px"}} onClick={()=> {deleteRecord(item.id)}}>Delete</button>
            //     </div>
            // </div>
            <Card item={item} />
          ))
        }
      </Container>
      
      <Container>
        <UpdateModal showModal={showModal} handleShow={handleShow} updateRecord={updateRecord} apiResult={apiResult} setApiResult={setApiResult} />
      </Container>

      <Container>
        <AddModal setAddProductModal={setAddProduct} addProduct={addProduct} apiResult={apiResult} />
      </Container>
    </>
  )
}

export default App

/*
  1. Delete Confirmation 
  2. Search Product
*/