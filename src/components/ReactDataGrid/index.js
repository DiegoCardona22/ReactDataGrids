import { Fragment, useState, useCallback, useLayoutEffect, useEffect } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import '@inovua/reactdatagrid-enterprise/index.css';

const renderRowDetails = ({ data }) => <div>Hola</div>;

const ReactDataGridComponent = () => {
  const [collapsedRows, setCollapsedRows] = useState(null);
  const [expandedRows, setExpandedRows] = useState({ 1: true, 2: true });
  const [sortInfo, setSortInfo] = useState({ dir: -1, id: "eventDateTime", name: "eventDateTime", type: "date" });
  const [gridRef, setGridRef] = useState(null);

  const columns = [
    { name: 'name', header: 'Name', minWidth: 50, defaultFlex: 2 },
    { name: 'age', header: 'Age', maxWidth: 1000, defaultFlex: 1 },
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
    { id: 17, name: 'Johny Perterson', age: 40 },
  ];

  const onExpandedRowsChange = useCallback(({ expandedRows, collapsedRows }) => {
    setExpandedRows(expandedRows);
    setCollapsedRows(collapsedRows);
  }, [])

  const handleResize = () => {
    if (gridRef) {
      gridRef.current.setColumnSizesToFit();
    }
  };

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
        idProperty="_id"
        limit={50}
        showPivotSummaryColumns={true}
        livePagination
        onExpandedRowsChange={onExpandedRowsChange}
        onReady={setGridRef}
        onSortInfoChange={setSortInfo}
        pagination
        renderRowDetails={renderRowDetails}
        resizable={true}
        rowExpandHeight={400}
        rowHeight={65}
        sortInfo={sortInfo}
        showColumnMenuTool={true}
        style={gridStyle}
        licenseKey='AppName=TeamClassApp,Company=TeamClass,ExpiryDate=2023-01-27,LicenseDeveloperCount=1,LicenseType=single_app,Ref=TeamClassLicenseRef,Z=-328866592631084255-1143394258-209424138521009584341397906949'
      />
    </Fragment>
  )
}

export default ReactDataGridComponent;