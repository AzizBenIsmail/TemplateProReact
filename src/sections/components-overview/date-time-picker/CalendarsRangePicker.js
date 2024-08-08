import { useState } from 'react';

// material-ui
import { Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

// project-imports
import MainCard from 'components/MainCard';

// ==============================|| DATE PICKER - CALENDER RANGE ||============================== //

export default function CalendarsRangePicker() {
  const [value, setValue] = useState([null, null]);

  const calDatepickerCodeString = `<LocalizationProvider dateAdapter={AdapterDateFns}>
  <div>
    <Typography sx={{ mt: 2, mb: 1 }}>1 calendar </Typography>
    <DateRangePicker
      calendars={1}
      value={value}
      onChange={(newValue: any) => {
        setValue(newValue);
      }}
      renderInput={(startProps: any, endProps: any) => (
        <>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> to </Box>
          <TextField {...endProps} />
        </>
      )}
    />
    <Typography sx={{ mt: 2, mb: 1 }}>2 calendars</Typography>
    <DateRangePicker
      calendars={2}
      value={value}
      onChange={(newValue: any) => {
        setValue(newValue);
      }}
      renderInput={(startProps: any, endProps: any) => (
        <>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> to </Box>
          <TextField {...endProps} />
        </>
      )}
    />
    <Typography sx={{ mt: 2, mb: 1 }}>3 calendars</Typography>
    <DateRangePicker
      calendars={3}
      value={value}
      onChange={(newValue: any) => {
        setValue(newValue);
      }}
      renderInput={(startProps: any, endProps: any) => (
        <>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> to </Box>
          <TextField {...endProps} />
        </>
      )}
    />
  </div>
</LocalizationProvider>`;

  return (
    <MainCard title="Calendars Range Picker" codeString={calDatepickerCodeString}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div>
          <Typography sx={{ mt: 2, mb: 1 }}>1 calendar </Typography>
          <DateRangePicker
            calendars={1}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            slotProps={{ fieldSeparator: { children: 'to' } }}
          />
          <Typography sx={{ mt: 2, mb: 1 }}>2 calendars</Typography>
          <DateRangePicker
            calendars={2}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            slotProps={{ fieldSeparator: { children: 'to' } }}
          />
          <Typography sx={{ mt: 2, mb: 1 }}>3 calendars</Typography>
          <DateRangePicker
            calendars={3}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            slotProps={{ fieldSeparator: { children: 'to' } }}
          />
        </div>
      </LocalizationProvider>
    </MainCard>
  );
}
