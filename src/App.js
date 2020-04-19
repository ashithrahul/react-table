import '@babel/polyfill';
import React, {useState, useEffect} from 'react';
import {columns, initialData} from './Table.constants';
import Table from '../components/Table/Table';
import {fetchData} from "../components/Table/Table.helper";

export const GlobalContext = React.createContext({});

const App = () => {
    const [response , updateData ] = useState([]);
    const [page , updatePage ] = useState(1);
    const [size , updateSize ] = useState(6);
    const [total , updateTotal ] = useState(null);
    useEffect(async ()=>{
        const responseGot = await fetchData(1);
        updateData(responseGot.data);
        updatePage(responseGot.page);
        updateTotal(responseGot.total);
        updateSize(responseGot.per_page);
        console.log(responseGot);
    },[]);
    const fetchingData = async ({page}) =>{
        const responseGot = await fetchData(page);
        updateData(response.concat(responseGot.data));
        updatePage(responseGot.page);
        updateTotal(responseGot.total);
        updateSize(responseGot.per_page);
        console.log(responseGot);
    };
    return(
    <GlobalContext.Provider>
        <Table
            columns={columns}
            data={response}
            page={page}
            total={total}
            size={size}
            fetchData={fetchingData}
        />
    </GlobalContext.Provider>
)};
export default App;
