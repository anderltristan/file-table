export interface TableData {
  item: Object;
  selected: false; 
}

export interface TableProps {
  rows: TableRowProps[];
  columns: string[];
  data: any[];
};

export interface TableRowProps {
  cells: any[];
  rowsSelected: number;
  setRowsSelected: (value: number) => void;
  dataToDownload: any[];
  setDataToDownload: (value: any[]) => void;
  selectAll: boolean;
  setSelectAll: (value: boolean) => void;
  deselectAll: boolean;
  setDeselectAll: (value: boolean) => void;
}

export const data: any[] = [
  { name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled' },
  { name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available' },
  { name: 'uxtheme.dll', device: 'Lanniester', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available' },
  { name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled' },
  { name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled' }
];