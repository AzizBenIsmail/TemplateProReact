import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { CardMedia, FormControlLabel, Radio, RadioGroup, Stack, useMediaQuery } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';
import { dispatch, useSelector } from 'store';
import { openDrawer } from 'store/reducers/menu';
import { MenuOrientation, ThemeDirection } from 'config';

// assets
import defaultLayout from 'assets/images/customization/ltr.svg';
import rtlLayout from 'assets/images/customization/rtl.svg';
import miniMenu from 'assets/images/customization/mini-menu.svg';

// ==============================|| CUSTOMIZATION - LAYOUT ||============================== //

const ThemeLayout = () => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { miniDrawer, themeDirection, onChangeDirection, onChangeMiniDrawer, menuOrientation } = useConfig();
  const { drawerOpen } = useSelector((state) => state.menu);

  let initialTheme = 'default';
  if (miniDrawer === true) initialTheme = 'mini';
  if (themeDirection === ThemeDirection.RTL) initialTheme = 'rtl';

  const [value, setValue] = useState(initialTheme);
  const handleRadioChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (newValue === 'default') {
      if (themeDirection === ThemeDirection.RTL) {
        onChangeDirection(ThemeDirection.LTR);
      }
      if (miniDrawer === true) {
        onChangeMiniDrawer(false);
      }
      if (!drawerOpen) {
        dispatch(openDrawer(true));
      }
    }
    if (newValue === 'mini') {
      onChangeMiniDrawer(true);
      if (drawerOpen) {
        dispatch(openDrawer(false));
      }
    }
    if (newValue === ThemeDirection.RTL) {
      onChangeDirection(ThemeDirection.RTL);
    }
  };

  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={value} onChange={handleRadioChange}>
      <Stack direction="row" alignItems="center" spacing={2.5} sx={{ width: '100%' }}>
        <FormControlLabel
          control={<Radio value="default" sx={{ display: 'none' }} />}
          sx={{ width: '100%', m: 0, display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
          label={
            <MainCard
              content={false}
              sx={{ borderWidth: 2, p: 1, ...(value === 'default' && { borderColor: theme.palette.primary.main }) }}
            >
              <Stack direction="row" alignItems="center" justifyContent="center">
                <CardMedia component="img" src={defaultLayout} alt="defaultLayout" />
              </Stack>
            </MainCard>
          }
        />
        {(menuOrientation === MenuOrientation.VERTICAL || downLG) && (
          <FormControlLabel
            control={<Radio value="mini" sx={{ display: 'none' }} />}
            sx={{ width: '100%', m: 0, display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
            label={
              <MainCard content={false} sx={{ borderWidth: 2, p: 1, ...(value === 'mini' && { borderColor: theme.palette.primary.main }) }}>
                <Stack direction="row" alignItems="center" justifyContent="center">
                  <CardMedia component="img" src={miniMenu} alt="miniMenu" />
                </Stack>
              </MainCard>
            }
          />
        )}
        <FormControlLabel
          control={<Radio value={ThemeDirection.RTL} sx={{ display: 'none' }} />}
          sx={{ width: '100%', m: 0, display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
          label={
            <MainCard
              content={false}
              sx={{ borderWidth: 2, p: 1, ...(value === ThemeDirection.RTL && { borderColor: theme.palette.primary.main }) }}
            >
              <Stack direction="row" alignItems="center" justifyContent="center">
                <CardMedia component="img" src={rtlLayout} alt="rtlLayout" />
              </Stack>
            </MainCard>
          }
        />
      </Stack>
    </RadioGroup>
  );
};

export default ThemeLayout;
