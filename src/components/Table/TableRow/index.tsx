import { useEffect, useState } from 'react';
import { TableRowProps } from '../../../common/constants';

export const TableRow = (props: TableRowProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    if (props.selectAll && !props.deselectAll) {
      setIsSelected(true);
    } else if (props.deselectAll && !props.selectAll) {
      setIsSelected(false);
    }
  }, [props.selectAll])
  
  const toggleSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(!isSelected);
    props.setSelectAll(false);
    props.setDeselectAll(false);

    if (e.currentTarget.checked) {
      props.setDataToDownload([...props.dataToDownload, props.cells]);
      props.setRowsSelected(props.rowsSelected + 1);
    } else {
      props.setDataToDownload(props.dataToDownload.filter(
        (data) => (data[0] !== props.cells[0]))
      )
      props.setRowsSelected(props.rowsSelected - 1);
    }
  }

  return (
    <tr className={`table--row__body ${isSelected ? 'isSelected' : 'unselected'}`}>
      <td>
        <input
          data-testid="row-checkbox"
          type='checkbox'
          onChange={(e) => toggleSelected(e)}
          checked={isSelected}
        />
      </td>
      {
        props.cells.map(cell => {
          if (cell === "available") {
            return (
              <span className="table--row__body--available">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#00FF00" d="m2 12a10 10 0 1 1 10 10 10 10 0 0 1 -10-10z"/></svg>
                <td>{cell}</td>
              </span>
            )
          }
           else {
            return (
              <td>{cell}</td>
            )
          }
        })
      }
    </tr>
  )
}