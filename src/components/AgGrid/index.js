// @packages
import { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

// @styles
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const AgGridComponent = () => {
  const [rowData, setRowData] = useState();
  const [columnDefs] = useState([
    { field: 'athlete', rowDrag: true },
    { field: 'country' },
    { field: 'year', width: 100 },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
  ]);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  const defaultColDef = useMemo(() => {
    return {
      width: 200,
      sortable: true,
      resizable: true,
      filter: true,
    };
  }, []);

  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: 'Group',
      minWidth: 170,
      field: 'athlete',
      valueGetter: (params) => {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        checkbox: true,
      },
    };
  }, []);

  return (
    <>
      <h1>AgDataGrid</h1>
      <br />
      <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }}>
        <AgGridReact 
          rowData={rowData}
          columnDefs={columnDefs}
          autoGroupColumnDef={autoGroupColumnDef}
          defaultColDef={defaultColDef}
          suppressRowClickSelection={true}
          groupSelectsChildren={true}
          rowSelection={'multiple'}
          rowGroupPanelShow={'always'}
          pivotPanelShow={'always'}
          enableRangeSelection={true}
          pagination={true}
          onGridReady={onGridReady}
        >
        </AgGridReact>
      </div>
    </>
  );
};

export default AgGridComponent;