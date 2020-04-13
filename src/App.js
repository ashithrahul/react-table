import '@babel/polyfill';
import React from 'react';
import { columns, initialData } from './Table.constants';
import Table from '../components/Table/Table';
import styled from "styled-components";


const Styles = styled.div`
  padding: 1rem;

  .table {
    display: inline-block;
    border-spacing: 0;
    border: 1px solid black;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const GlobalContext = React.createContext({});

const App = () => (
  <GlobalContext.Provider>
      <Styles>
          <Table columns={columns} data={initialData}/>
      </Styles>
  </GlobalContext.Provider>
);
export default App;
