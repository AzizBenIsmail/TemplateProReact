import { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

// assets
import { TextalignCenter, TextalignJustifycenter, TextalignLeft, TextalignRight } from 'iconsax-react';

// ==============================|| TOGGLE BUTTON - COLOR ||============================== //

export default function ColorToggleButton() {
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
      <ToggleButton value="left" aria-label="left aligned">
        <TextalignLeft />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <TextalignCenter />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <TextalignRight />
      </ToggleButton>
      <ToggleButton value="list" aria-label="list">
        <TextalignJustifycenter />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
