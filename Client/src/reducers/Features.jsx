import data from '../data/data.json';

const createdReducers = (state = data.products, action)  => {
    switch(action.type){
        case 'ADDPRODUCT' : return {
            id : "1",
            title : "XYZ",
            description : "ABC",
            images : [
                ""
            ]

        }
    }
}

export default createdReducers;