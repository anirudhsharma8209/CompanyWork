import { Fragment } from 'react'
import { PRODUCT } from '../../constant/constant';
import axios from 'axios';

const Card = (props : any) => {   
    const deleteProductFromRedux = async (product : any) => {     
        console.log(PRODUCT.REMOVEPRODUCT);           
        if(confirm("Do You Want To Delete : ")){            
            await axios.delete(`${PRODUCT.REMOVEPRODUCT}/id=${product.id}`);
        }
    }
    return (
        <Fragment>
            <div className="card" key={props.item.id} style={{ width: "18rem", height: "25rem" }}>
                <img src={props.item.images[0]} className='img-fluid card-img-top' style={{ height: "180px", width: "150px" }} />
                <div className="card-body" style={{ height: "50px" }}>
                    <h5 style={{ fontSize: "15px" }}>{props.item.title}</h5>
                    <p style={{ fontSize: "14px" }}>{props.item.description}</p>
                </div>
                <div className="d-flex mb-3 justify-content-around align-items-center">
                    <button className='bg-green-500 hover:bg-green-900  text-white p-2 rounded-lg' onClick={() => { props.handleShow(true); props.updateSetter(props.item) }}>Update</button>
                    <button className='bg-red-600 hover:bg-red-900 text-white p-2 rounded-lg' style={{ width: "100px" }} onClick={() => { deleteProductFromRedux(props.item);}}>Delete</button>                    
                </div>
            </div>
        </Fragment>
    )
}

export default Card
