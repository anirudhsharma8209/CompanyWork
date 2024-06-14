import { useEffect, useState } from "react"
import { Form,Button,Modal } from "react-bootstrap"
import store from "../../store/Store";
import { updateProductAction } from "../../actionsCreators/actionCreator";

const UpdateModal = (props:any) => {      
    let [productName, setProductName ] = useState("");
    let [productDesc, setProductDesc] = useState("");
    let [productImage,setProductImage] = useState("");

    useEffect(() => {
      setProductName(props.updateRecord?.title);
      setProductDesc(props.updateRecord?.description);
      setProductImage(props.updateRecord?.images[0]);
    }, [props.updateRecord])

    const updateProductToRedux = (updateRecord : any) => {      
      store.dispatch(updateProductAction({id : updateRecord.id, title : productName, description : productDesc, images : [productImage]}))    
      props.setApiResult(store.getState().products)
      handleClose();
    }

    const handleClose = () => {
      props.handleShow(!props.showModal)
    }   
    return (        
      <Modal show={props.showModal} onHide={handleClose} className="text-dark" >
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Product Name : </Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Name : "
                autoFocus
                value={productName}
                onChange={(event) => {setProductName(event.target.value)}}
              />
            </Form.Group>    
            <Form.Group>
                <Form.Label>Product Description : </Form.Label>
                <textarea className="form-control" value={productDesc} onChange={(event) => {setProductDesc(event.target.value)}} placeholder="Product Description : "></textarea>
            </Form.Group>      
            <Form.Group>
              <Form.Label>Product Url :</Form.Label>
              <Form.Control type="text" placeholder="Image URL : " value={productImage} onChange={(event) => {setProductImage(event.target.value)}} />
            </Form.Group>         
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>       
          <Button variant="success" onClick={() => {updateProductToRedux(props.updateRecord)}}>
            Update Changes 
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default UpdateModal