import { TableProps } from '../../common/constants';
import { useEffect, useState } from 'react';
import { TableRow } from './TableRow';
import { IndeterminateCheckbox } from './IndeterminateCheckbox';
import { IoMdDownload } from "react-icons/io";
import './index.css';

export const Table = (props: TableProps) => {
  const [rowsSelected, setRowsSelected] = useState<number>(0);
  const [dataToDownload, setDataToDownlaod] = useState<any[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [deselectAll, setDeselectAll] = useState<boolean>(false);

  useEffect(() => {
    if (selectAll && !deselectAll) {
      setRowsSelected(props.data.length);
    } else if (deselectAll) {
      setSelectAll(false);
      setRowsSelected(0);
    }

    if (props.data.length > 0 && rowsSelected === props.data.length) {
      setSelectAll(true);
    }
  }, [rowsSelected, selectAll, deselectAll]);

  const getHeaderCheckbox = () => {
    if (rowsSelected === 0) {
      return 0;
    } else if (rowsSelected === props.data.length) {
      return 2;
    }

    return 1;
  }

  const onDownloadClick = () => {
    const alertString: string[] = [];

    dataToDownload.forEach((data) => {
      const status = data[3];

      if (status === "available") {
        const device = data[1];
        const filename = data[2];
        alertString.push(`${device} ${filename}`)
      }
    })

    alertString.length > 0 ? alert(alertString.join("\n")) : alert("No files available to download");
  }

  return (
    <div className='table'>
      <div className="table--header">
        <IndeterminateCheckbox
          value={getHeaderCheckbox()}
          selectAll={selectAll}
          setSelectAll={setSelectAll}
          deselectAll={deselectAll}
          setDeselectAll={setDeselectAll}
        />
        { rowsSelected > 0 ? (
            <span>Selected {rowsSelected}</span>
          ) : (
            <span>None Selected</span>
          )
        }
        <button
          data-testid="download-button"
          className="table--header__button"
          onClick={onDownloadClick}
        >
          <IoMdDownload />
          Download Selected
        </button>
      </div>
      <table className='table--container'>
        <thead>
          <tr className='table--row__header'>
            {props.columns.map((column, i) => (
              <th key={i}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((item, i) => (
              <TableRow
                key={i}              
                cells={Object.keys(item).map(key => item[key])}
                rowsSelected={rowsSelected}
                dataToDownload={dataToDownload}
                setDataToDownload={setDataToDownlaod}
                setRowsSelected={setRowsSelected}
                selectAll={selectAll}
                setSelectAll={setSelectAll}
                deselectAll={deselectAll}
                setDeselectAll={setDeselectAll}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}