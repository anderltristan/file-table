import './App.css';
import { useEffect, useState } from 'react';
import { Table } from './components/Table';
import { data } from './common/constants';

function App() {
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  return (
    <div className="App">
      <Table
        rows={[]}
        data={tableData}
        columns={['', 'Name','Device','Path','Status']}
      />
    </div>
  );
}

export default App;
