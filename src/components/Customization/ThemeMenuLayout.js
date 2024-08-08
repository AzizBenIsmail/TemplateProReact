// material-ui
import { useTheme } from '@mui/material/styles';
import { CardMedia, FormControlLabel, Radio, RadioGroup, Stack, useMediaQuery } from '@mui/material';

// project-imports
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';
import { dispatch } from 'store';
import { openDrawer } from 'store/reducers/menu';
import { MenuOrientation } from 'config';

// assets
import defaultLayout from 'assets/images/customization/vertical.svg';
import horizontalLayout from 'assets/images/customization/horizontal.svg';

// ==============================|| CUSTOMIZATION - CONTAINER ||============================== //

const ThemeMenuLayout = () => {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { menuOrientation, onChangeMenuOrientation, onChangeMiniDrawer } = useConfig();
  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  const handleContainerChange = (e) => {
    onChangeMiniDrawer(true);
    onChangeMenuOrientation(e.target.value);
    dispatch(openDrawer(e.target.value !== MenuOrientation.HORIZONTAL));
  };

  return (
    <RadioGroup row aria-label="payment-card" name="payment-card" value={menuOrientation} onChange={handleContainerChange}>
      <Stack direction="row" alignItems="center" spacing={2.5} sx={{ width: '100%' }}>
        <FormControlLabel
          control={<Radio value={MenuOrientation.VERTICAL} sx={{ display: 'none' }} />}
          sx={{ width: '100%', m: 0, display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
          label={
            <MainCard content={false} sx={{ borderWidth: 2, p: 1, ...(!isHorizontal && { borderColor: theme.palette.primary.main }) }}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <CardMedia component="img" src={defaultLayout} alt="defaultLayout" />
              </Stack>
            </MainCard>
          }
        />
        <FormControlLabel
          control={<Radio value={MenuOrientation.HORIZONTAL} sx={{ display: 'none' }} />}
          sx={{ width: '100%', m: 0, display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
          label={
            <MainCard content={false} sx={{ borderWidth: 2, p: 1, ...(isHorizontal && { borderColor: theme.palette.primary.main }) }}>
              <Stack direction="row" alignItems="center" justifyContent="center">
                <CardMedia component="img" src={horizontalLayout} alt="defaultLayout" />
              </Stack>
            </MainCard>
          }
        />
      </Stack>
    </RadioGroup>
  );
};

export default ThemeMenuLayout;
