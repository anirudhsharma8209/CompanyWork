import  { Fragment, useEffect, useState } from 'react'
import { IoSearch, IoReload } from 'react-icons/io5';
import {getProductAction, searchProductAction} from '../../redux/actionsCreators/actionCreator';
import store from '../../redux/store/Store';
import {getProductFromStore} from '../../redux/reducers/reducers';

const Header = (props : any) => {
    const [valueSearcher, setValueSearcher] = useState("");
    const searchProductFromRedux = (product : any) => {      
        props.setApiResult(props.apiResult.filter((item : any) => item.title === product));         
    }    
    return (
        <Fragment>
            <div className="searcher w-50 d-flex justify-content-around align-items-center w-75 ">                
                <input type="text" className='form-control ' value={valueSearcher} onChange={(event) => { setValueSearcher(event.target.value) }} placeholder='Search Products : ' />
            </div>
            <div className="buttons w-50 h-100 ms-5 d-flex justify-content-center">                
                <button className='p-2 text-white bg-sky-500 rounded-lg d-flex justify-content-center' style={{ width: "100px" }} onClick={() => {searchProductFromRedux(valueSearcher)}}>
                    <IoSearch />
                </button>
            </div>
            <div className="trigger">
                {/* <button className='btn btn-primary' onClick={() => {store.dispatch(getProductFromStore())}}>Data</button> */}
            </div>
            <div className="reloadData w-50 d-flex justify-content-center">
                <button onClick={props.reloadData} className="bg-purple-500 p-2 d-flex justify-content-center rounded-lg" style={{ width: "100px" }}>
                    <IoReload />
                </button>
            </div>
        </Fragment>
    )
}

export default Header