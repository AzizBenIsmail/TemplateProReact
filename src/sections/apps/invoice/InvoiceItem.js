import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Stack, TableCell, Tooltip, Typography } from '@mui/material';

// third-party
import { getIn } from 'formik';

// project-imports
import InvoiceField from './InvoiceField';
import AlertProductDelete from './AlertProductDelete';
import { dispatch, useSelector } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import { ThemeMode } from 'config';

// assets
import { Trash } from 'iconsax-react';

// ==============================|| INVOICE - ITEMS ||============================== //

const InvoiceItem = ({ id, name, description, qty, price, onDeleteItem, onEditItem, index, Blur, errors, touched }) => {
  const { country } = useSelector((state) => state.invoice);
  const theme = useTheme();
  const mode = theme.palette.mode;

  const [open, setOpen] = useState(false);
  const handleModalClose = (status) => {
    setOpen(false);
    if (status) {
      onDeleteItem(index);
      dispatch(
        openSnackbar({
          open: true,
          message: 'Product Deleted successfully',
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: false
        })
      );
    }
  };

  const Name = `invoice_detail[${index}].name`;
  const touchedName = getIn(touched, Name);
  const errorName = getIn(errors, Name);

  const textFieldItem = [
    {
      placeholder: 'Item name',
      label: 'Item Name',
      name: `invoice_detail.${index}.name`,
      type: 'text',
      id: id + '_name',
      value: name,
      errors: errorName,
      touched: touchedName
    },
    {
      placeholder: 'Description',
      label: 'Description',
      name: `invoice_detail.${index}.description`,
      type: 'text',
      id: id + '_description',
      value: description
    },
    { placeholder: '', label: 'Qty', type: 'number', name: `invoice_detail.${index}.qty`, id: id + '_qty', value: qty },
    { placeholder: '', label: 'price', type: 'number', name: `invoice_detail.${index}.price`, id: id + '_price', value: price }
  ];

  return (
    <>
      {textFieldItem.map((item) => {
        return (
          <InvoiceField
            onEditItem={(event) => onEditItem(event)}
            onBlur={(event) => Blur(event)}
            cellData={{
              placeholder: item.placeholder,
              name: item.name,
              type: item.type,
              id: item.id,
              value: item.value,
              errors: item.errors,
              touched: item.touched
            }}
            key={item.label}
          />
        );
      })}
      <TableCell>
        <Stack direction="column" justifyContent="flex-end" alignItems="flex-end" spacing={2}>
          <Box sx={{ pr: 2, pl: 2 }}>
            <Typography>{country?.prefix + '' + (price * qty).toFixed(2)}</Typography>
          </Box>
        </Stack>
      </TableCell>
      <TableCell>
        <Tooltip
          componentsProps={{
            tooltip: {
              sx: {
                backgroundColor: mode === ThemeMode.DARK ? theme.palette.grey[50] : theme.palette.grey[700],
                opacity: 0.9
              }
            }
          }}
          title="Remove Item"
        >
          <Button color="error" onClick={() => setOpen(true)}>
            <Trash />
          </Button>
        </Tooltip>
      </TableCell>
      <AlertProductDelete title={name} open={open} handleClose={handleModalClose} />
    </>
  );
};

InvoiceItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  qty: PropTypes.number,
  price: PropTypes.number,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  index: PropTypes.number,
  Blur: PropTypes.func,
  errors: PropTypes.object,
  touched: PropTypes.object
};

export default InvoiceItem;
