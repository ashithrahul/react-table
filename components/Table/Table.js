import React, {useState, useEffect} from 'react';
import {useTable, useSortBy, useBlockLayout, manualSortBy} from 'react-table';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import VirtualList from 'react-tiny-virtual-list';
import * as styles from './Table.scss';
import useScroll from "./Table.Utils";


/* Table Body start */
const TableBody = ({row, style}) => (
    <div
        {...row.getRowProps({
            style,
        })}
        className={styles.tr}
    >
        <div className={styles.test}>
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


export default ({ columns,
                    data,
                    update,
                    classes,
                    page,
                    total,
                    fetchData,
                    size
                }) => {
    const [isBackendSort, updateBackedSort] = useState(true);
    const { onTableScroll } = useScroll({page,total,fetchData, size});
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: {sortBy},
    } = useTable(
        {
            columns,
            data,
            initialState: {sortBy: []},
            manualSortBy: isBackendSort,
        },
        useSortBy,
        useBlockLayout,
    );

    const RenderRow = React.useCallback(
        ({index, style}) => {
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

    useEffect(() => {
        if(data.length === total){
            updateBackedSort(false)
        }
    }, [data,total]);

    // Render the UI for your table
    return (
        <div {...getTableProps()} className={styles.table}>
            <div className={styles.thead}>
                {headerGroups.map((headerGroup) => (
                    <div {...headerGroup.getHeaderGroupProps()} className={styles.tr}>
                        {headerGroup.headers.map((column) => (
                            <div {...column.getHeaderProps(column.getSortByToggleProps())} className={styles.th}>
                                {column.render('Header')}
                                {/*{console.log(column.isSorted)}*/}
                                <span>
                    {column.isSorted
                        ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                        : ''}
                  </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div {...getTableBodyProps()} className={styles.tbody}>
                <VirtualList
                    width="100%"
                    height={180}
                    itemCount={rows.length}
                    itemSize={35}
                    onScroll={onTableScroll}
                    renderItem={RenderRow}
                />
            </div>
        </div>
    );
};
