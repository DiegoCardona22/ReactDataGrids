// @packages
import { useCallback, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

// @scripts
import FullWidthCellRenderer from './fullWidthCellRenderer.jsx';

// @styles
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const AgGridComponent = () => {
  const [rowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ]);

  const isFullWidth = (data) => {
    return ['Peru', 'France', 'Italy'].indexOf(data.name) >= 0;
  };

  const defaultColDef = useMemo(() => {
    return {
      width: 150,
      sortable: true,
      resizable: true,
      filter: true,
    };
  }, []);

  const getRowHeight = useCallback((params) => {
    return params.data.rowHeight;
  }, []);

  const isFullWidthRow = useCallback((params) => {
    return isFullWidth(params.rowNode.data);
  }, []);

  const fullWidthCellRenderer = useMemo(() => {
    return FullWidthCellRenderer;
  }, []);

  return (
    <>
      <h1>AgDataGrid</h1>
      <br />
      <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }}>
        <AgGridReact 
          rowData={rowData} 
          columnDefs={columnDefs}
          isFullWidthRow={isFullWidthRow}
          fullWidthCellRenderer={fullWidthCellRenderer}
          defaultColDef={defaultColDef}
          getRowHeight={getRowHeight}
        >
        </AgGridReact>
      </div>
    </>
  );
};

export default AgGridComponent;