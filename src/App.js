// @scrips
import ReactDataGridExample from "../src/components/ReactDataGrid";
import KendoDataGridExample from "../src/components/Kendo";
import AgGridComponent from "../src/components/AgGrid";

// @styles
import '@progress/kendo-theme-default/dist/all.css';

const App = () => {
  return (
    <>
      <KendoDataGridExample />
      <br />
      <ReactDataGridExample />
      <br />
      <AgGridComponent />
    </>
  );
}

export default App;
