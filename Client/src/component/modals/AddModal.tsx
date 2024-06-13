import { FormEvent, useState } from "react"
import { Container, Modal, Form } from "react-bootstrap"
import { addProductAction } from "../../actionsCreators/actionCreator";
import store from "../../store/Store";
const AddModal = (props: any) => {
    let [productName, setProductName] = useState<string>("");
    let [productDesc, setProductDesc] = useState<string>("");
    let [productImage, setProductImage] = useState("");



    const addProductToRedux = (product : any) => {
        store.dispatch(addProductAction({ id: props.apiResult.length + 1, title: product.name, description: product.description, images: [product.image] }))
        props.setApiResult(store.getState().products);
        setProductAddModal(!productAddModal)
    }

    const addProductToArray = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.apiResult.push({
            "id": props.apiResult.length + 1,
            "title": productName,
            "description": productDesc,
            "images": [
                productImage
            ]
        });
        handleCloseModal();
        setProductName("");
        setProductDesc("");
        setProductImage("");
    }
    const handleCloseModal = () => {
        props.setAddProductModal(!props.addProduct)
    }
    return (
        <Modal show={props.addProduct} onHide={handleCloseModal} className="text-dark">
            <Modal.Header>
                <Modal.Title>Add Products : </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={addProductToArray}>
                    <Form.Group>
                        <Form.Label>Product Name : </Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name :" value={productName} onChange={(event) => { setProductName(event.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mt-4">
                        <Form.Label>
                            Product Description :
                        </Form.Label>
                        <textarea className="form-control" rows={4} placeholder="Enter Product Description : " value={productDesc} onChange={(event) => { setProductDesc(event.target.value) }} > </textarea>
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Form.Label>Product Images : </Form.Label>
                        <Form.Control type="text" placeholder="Enter Image URL : " value={productImage} onChange={(event) => { setProductImage(event.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <button className="bg-indigo-700 p-2 text-white rounded-lg">Add Product </button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default AddModal