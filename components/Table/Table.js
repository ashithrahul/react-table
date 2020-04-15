import React, { useState } from 'react';
import { useTable, useSortBy, useBlockLayout } from 'react-table';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import VirtualList from 'react-tiny-virtual-list';
import * as styles from './Table.scss';
import Checkbox from '../Checkbox/Checkbox';
import FirstHorizontal from '../HorizontalLine/FirstHorizontal';
import SecondHorizontal from '../HorizontalLine/SecondHorizontal';
import ThirdHorizontal from '../HorizontalLine/ThirdHorizontal';
import FourthHorizontal from '../HorizontalLine/FourthHorizontal';

/* Table Body start */
const TableBody = ({ row, style }) => (
  <div
    {...row.getRowProps({
      style, 
    })}
    className={styles.tr}>
       <div className={styles.test}>
         <div className={styles.checkboxWrapper}>
            <Checkbox />
          </div>
       {row.cells.map((cell) => (
        <div {...cell.getCellProps()} className={styles.td}>
          {cell.render('Cell')}
        </div>
      ))}
    </div>
  </div>
);

TableBody.propTypes = {
  row: PropTypes.shape({
    cells: [],
  }),
  style: PropTypes.shape({}),
};

TableBody.defaultProps = {
  row: {
    cells: [],
  },
  style: {},
};

/* Table Body end */
export default ({
  columns, data, update, classes,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useBlockLayout,
  );

  const RenderRow = React.useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <TableBody
          row={row}
          style={style}
        />
      );
    },
    [prepareRow, rows],
  );

  // Render the UI for your table
  return (
    <div {...getTableProps()} className={styles.table}>
      <div className={styles.thead}>
        {headerGroups.map((headerGroup) => (
          <div {...headerGroup.getHeaderGroupProps()} className={styles.tr}>
          <Checkbox />
             <div><FirstHorizontal /></div>
            {headerGroup.headers.map((column,index) => (
              <div {...column.getHeaderProps()} className={styles.th}>
                {column.render('Header')}
                <SecondHorizontal />
                <ThirdHorizontal />
                <FourthHorizontal />
           <span>{console.log(index)}</span>
           </div>
            ))}
          </div>
        ))}
      </div>

      <div {...getTableBodyProps()} className={styles.tbody}>
        <VirtualList
          width="100%"
          height={400}
          itemCount={rows.length}
          itemSize={35}
          onScroll={(e) => console.log(e)}
          renderItem={RenderRow}
        />
      </div>
    </div>
  );
};