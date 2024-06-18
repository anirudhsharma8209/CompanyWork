import { Modal, Form } from "react-bootstrap"
import { useForm } from 'react-hook-form'
// import { PRODUCT } from "../../constant/constant";
import store from "../../redux/store/Store";
import { addProductAction } from "../../redux/actionsCreators/actionCreator";

const AddModal = (props: any) => {
    const { register, handleSubmit, reset } = useForm();
    const addProductToRedux = async (product: any) => {        
        let newProduct = {title : product.addproduct, description : product.adddescription, images : [product.addimage]}                
        store.dispatch(addProductAction(newProduct));        
        props.setApiResult(props.apiResult)
        handleCloseModal();
    }

    const handleCloseModal = () => {
        props.setAddProductModal(!props.addProduct)
    }
    const addSubmit = (data: any) => {
        addProductToRedux(data);
    }
    return (
        <Modal show={props.addProduct} onHide={handleCloseModal} className="text-dark">
            <Modal.Header closeButton>
                <Modal.Title>Add Products : </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(addSubmit)}>
                    <Form.Group>
                        <Form.Label>Product Name : </Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name :"  {...register("addproduct")} />
                    </Form.Group>
                    <Form.Group className="mt-4">
                        <Form.Label>
                            Product Description :
                        </Form.Label>
                        <textarea className="form-control" rows={4} placeholder="Enter Product Description : " {...register("adddescription")} />
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label>Product Images : </Form.Label>
                        <Form.Control type="text" placeholder="Enter Image URL : " {...register("addimage")} />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <button className="bg-indigo-700 p-2 text-white rounded-lg" onClick={() => {reset({addproduct : "", adddescription : "", addimage : ""})}}>Add Product </button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddModal