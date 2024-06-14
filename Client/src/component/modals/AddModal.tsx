import { Modal, Form } from "react-bootstrap"
import { addProductAction } from "../../actionsCreators/actionCreator";
import store from "../../store/Store";
import { useForm } from 'react-hook-form'

const AddModal = (props: any) => {
    const { register, handleSubmit } = useForm();
    const addProductToRedux = (product: any) => {
        store.dispatch(addProductAction({ id: props.apiResult.length + 1, title: product.addProduct, description: product.adddescription, images: [product.addImage] }))
        props.setApiResult(store.getState().products);
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
                        <button className="bg-indigo-700 p-2 text-white rounded-lg" >Add Product </button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddModal