import '@babel/polyfill';
import React from 'react';
import {columns, initialData} from './Table.constants';
import Table from '../components/Table/Table';

export const GlobalContext = React.createContext({});

const App = () => (
    <GlobalContext.Provider>
        <Table
            columns={columns}
            data={initialData} />
    </GlobalContext.Provider>
);
export default App;
