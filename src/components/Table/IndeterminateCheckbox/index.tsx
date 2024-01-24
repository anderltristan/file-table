import { useEffect, useRef } from 'react';

interface IndeterminateCheckboxProps {
  value: number;
  selectAll: boolean;
  setSelectAll: (value: boolean) => void;
  deselectAll: boolean;
  setDeselectAll: (value: boolean) => void;
}

export const IndeterminateCheckbox = (props: IndeterminateCheckboxProps) => {
  const INDETERMINATE = 1;
  const CHECKED = 2;
  const checkRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (!props.selectAll) {
      props.setSelectAll(true);
      props.setDeselectAll(false);
    } else if (props.selectAll && !props.deselectAll) {
      props.setSelectAll(false);
      props.setDeselectAll(true);
    }
  };

  useEffect(() => {
    if (checkRef.current) {
      checkRef.current.checked = (props.value === CHECKED || props.selectAll) && !props.deselectAll;
      checkRef.current.indeterminate = props.value === INDETERMINATE && !props.selectAll && !props.deselectAll;
    }
  }, [props.value, props.selectAll, props.deselectAll]);

  return (
    <input
      data-testid="selectall-checkbox"
      type="checkbox"
      ref={checkRef}
      value={props.value}
      onClick={onClick}
    />
  )
}