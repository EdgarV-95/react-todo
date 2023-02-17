import FlagIcon from '@mui/icons-material/Flag';
import { useState, useEffect, useRef } from 'react';

function DropdownList({
  onPriorityPick,
  onColorChange,
  closeDropdown,
}) {
  return (
    <ul className="select-priority">
      <li
        key="0"
        onClick={(e) => {
          onColorChange('blue');
          onPriorityPick(e);
          closeDropdown();
        }}
      >
        Low
      </li>
      <li
        key="1"
        onClick={(e) => {
          onColorChange('orange');
          onPriorityPick(e);
          closeDropdown();
        }}
      >
        Medium
      </li>
      <li
        key="2"
        onClick={(e) => {
          onColorChange('red');
          onPriorityPick(e);
          closeDropdown();
        }}
      >
        High
      </li>
    </ul>
  );
}

export default function PriorityPicker({
  onPrioritySelection,
  flagColor,
}) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  function openDropdownBtn() {
    setOpenDropdown(!openDropdown);
  }

  function closeDropdownBtn() {
    setOpenDropdown(false);
  }

  function handleClickOutside(e) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target)
    ) {
      setOpenDropdown(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const [colorFlag, setColorFlag] = useState(flagColor);

  return (
    <div className="task-priority" ref={dropdownRef}>
      {openDropdown && (
        <DropdownList
          onPriorityPick={(e) => onPrioritySelection(e)}
          onColorChange={setColorFlag}
          closeDropdown={closeDropdownBtn}
        />
      )}
      <FlagIcon
        onClick={openDropdownBtn}
        sx={{
          color: colorFlag,
          '&:hover': {
            backgroundColor: 'rgb(238,238,238);',
            borderRadius: '0.5vh',
          },
        }}
      />
    </div>
  );
}
