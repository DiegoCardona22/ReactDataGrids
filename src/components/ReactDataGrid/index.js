import { Fragment, useState, useCallback, useLayoutEffect, useEffect } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import '@inovua/reactdatagrid-enterprise/index.css';

const renderRowDetails = ({ data }) => {
  return <div style={{ padding: 20}}>
    <h3>Row details:</h3>
    <table>
      <tbody>
        {Object.keys(data).map((name, i) => {
          return <tr key={i}>
            <td>{name}</td>
            <td>{data[name]}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
};

const ReactDataGridComponent = () => {
  const [expandedRows, setExpandedRows] = useState({ 1: true, 2: true });
  const [collapsedRows, setCollapsedRows] = useState(null);

  const onExpandedRowsChange = useCallback(({ expandedRows, collapsedRows }) => {
    setExpandedRows(expandedRows);
    setCollapsedRows(collapsedRows);
  }, [])

  const [sortInfo, setSortInfo] = useState({ dir: -1, id: "eventDateTime", name: "eventDateTime", type: "date" });
  const [gridRef, setGridRef] = useState(null);

  const columns = [
    { name: 'id', header: 'Id', defaultVisible: false, defaultWidth: 80 },
    { name: 'name', header: 'Name',  defaultWidth: 80  },
    { name: 'age', header: 'Age',  defaultWidth: 80  },
  ];
  
  const gridStyle = { minHeight: 550 };
  
  const dataSource = [
    { id: 1, name: 'John McQueen', age: 35 },
    { id: 2, name: 'Mary Stones', age: 25 },
    { id: 3, name: 'Robert Fil', age: 27 },
    { id: 4, name: 'Roger Robson', age: 81 },
    { id: 5, name: 'Billary Konwik', age: 18 },
    { id: 6, name: 'Bob Martin', age: 18 },
    { id: 7, name: 'Matthew Richardson', age: 54 },
    { id: 8, name: 'Ritchie Peterson', age: 54 },
    { id: 9, name: 'Bryan Martin', age: 40 },
    { id: 10, name: 'Mark Martin', age: 44 },
    { id: 11, name: 'Michelle Sebastian', age: 24 },
    { id: 12, name: 'Michelle Sullivan', age: 61 },
    { id: 13, name: 'Jordan Bike', age: 16 },
    { id: 14, name: 'Nelson Ford', age: 34 },
    { id: 15, name: 'Tim Cheap', age: 3 },
    { id: 16, name: 'Robert Carlson', age: 31 },
    { id: 17, name: 'John McQueen', age: 35 },
    { id: 18, name: 'Mary Stones', age: 25 },
    { id: 19, name: 'Robert Fil', age: 27 },
    { id: 20, name: 'Roger Robson', age: 81 },
    { id: 21, name: 'Billary Konwik', age: 18 },
    { id: 22, name: 'Bob Martin', age: 18 },
    { id: 23, name: 'Matthew Richardson', age: 54 },
    { id: 24, name: 'Ritchie Peterson', age: 54 },
    { id: 25, name: 'Bryan Martin', age: 40 },
    { id: 26, name: 'Mark Martin', age: 44 },
    { id: 27, name: 'Michelle Sebastian', age: 24 },
    { id: 28, name: 'Michelle Sullivan', age: 61 },
    { id: 29, name: 'Jordan Bike', age: 16 },
    { id: 30, name: 'Nelson Ford', age: 34 },
    { id: 31, name: 'Tim Cheap', age: 3 },
    { id: 32, name: 'Robert Carlson', age: 31 },
    { id: 33, name: 'John McQueen', age: 35 },
    { id: 34, name: 'Mary Stones', age: 25 },
    { id: 35, name: 'Robert Fil', age: 27 },
    { id: 36, name: 'Roger Robson', age: 81 },
    { id: 37, name: 'Billary Konwik', age: 18 },
    { id: 38, name: 'Bob Martin', age: 18 },
    { id: 39, name: 'Matthew Richardson', age: 54 },
    { id: 40, name: 'Ritchie Peterson', age: 54 },
    { id: 41, name: 'Bryan Martin', age: 40 },
    { id: 42, name: 'Mark Martin', age: 44 },
    { id: 43, name: 'Michelle Sebastian', age: 24 },
    { id: 44, name: 'Michelle Sullivan', age: 61 },
    { id: 45, name: 'Jordan Bike', age: 16 },
    { id: 46, name: 'Nelson Ford', age: 34 },
    { id: 47, name: 'Tim Cheap', age: 3 },
    { id: 48, name: 'Robert Carlson', age: 31 },
    { id: 49, name: 'John McQueen', age: 35 },
    { id: 50, name: 'Mary Stones', age: 25 },
    { id: 51, name: 'Robert Fil', age: 27 },
    { id: 52, name: 'Roger Robson', age: 81 },
    { id: 53, name: 'Billary Konwik', age: 18 },
    { id: 54, name: 'Bob Martin', age: 18 },
    { id: 55, name: 'Matthew Richardson', age: 54 },
    { id: 56, name: 'Ritchie Peterson', age: 54 },
    { id: 57, name: 'Bryan Martin', age: 40 },
    { id: 58, name: 'Mark Martin', age: 44 },
    { id: 59, name: 'Michelle Sebastian', age: 24 },
    { id: 60, name: 'Michelle Sullivan', age: 61 },
    { id: 61, name: 'Jordan Bike', age: 16 },
    { id: 62, name: 'Nelson Ford', age: 34 },
    { id: 63, name: 'Tim Cheap', age: 3 },
    { id: 64, name: 'Robert Carlson', age: 31 },
    { id: 65, name: 'Johny Perterson', age: 40 },
  ];

  const handleResize = useCallback(() => {
    if (gridRef) {
      gridRef.current.setColumnSizesToFit();
    }
  }, [gridRef]);

  useLayoutEffect(() => {
    setTimeout(() => {
      handleResize();
    }, 100);
  }, [gridRef, handleResize]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTimeout(() => {
        handleResize();
      }, 100);
    });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gridRef, handleResize]);

  const filterValue = [
    { name: 'name', operator: 'startsWith', type: 'string', value: '' },
    { name: 'age', operator: 'gte', type: 'number', value: 0 },
  ];

  return (
    <Fragment>
      <h1>ReactDataGrid</h1>
      <br />
      <ReactDataGrid
        collapsedRows={collapsedRows}
        columns={columns}
        dataSource={dataSource}
        enableColumnAutosize
        expandedRows={expandedRows}
        idProperty="id"
        defaultFilterValue={filterValue}
        pagination
        limit={50}
        onExpandedRowsChange={onExpandedRowsChange}
        onReady={setGridRef}
        onSortInfoChange={setSortInfo}
        renderRowDetails={renderRowDetails}
        rowExpandHeight={400}
        rowHeight={65}
        defaultLimit={50}
        sortInfo={sortInfo}
        style={gridStyle}
      />
    </Fragment>
  )
}

export default ReactDataGridComponent;