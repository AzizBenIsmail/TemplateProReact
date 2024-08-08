import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Box, Chip, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// third-party
import { useTable, useResizeColumns, useBlockLayout } from 'react-table';

// project-imports
import ScrollX from 'components/ScrollX';
import makeData from 'data/react-table';
import MainCard from 'components/MainCard';
import { CSVExport } from 'components/third-party/ReactTable';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

// assets
import { Minus } from 'iconsax-react';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data }) {
  const defaultColumn = useMemo(
    () => ({
      minWidth: 120,
      width: 155,
      maxWidth: 400
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useBlockLayout,
    useResizeColumns
  );

  const sortingRow = rows.slice(0, 9);
  let sortedData = sortingRow.map((d) => d.original);
  Object.keys(sortedData).forEach((key) => sortedData[Number(key)] === undefined && delete sortedData[Number(key)]);

  return (
    <Table {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell
                key={column}
                {...column.getHeaderProps([{ className: column.className }])}
                sx={{ '&:hover::after': { bgcolor: 'primary.main', width: 2 } }}
              >
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  {column.render('Header')}
                  <Box {...column.getResizerProps()} sx={{ position: 'absolute', right: -6, opacity: 0, zIndex: 1 }}>
                    <Minus style={{ transform: 'rotate(90deg)' }} />
                  </Box>
                </Stack>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {sortingRow.map((row) => {
          prepareRow(row);
          return (
            <TableRow key={row} {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <TableCell key={cell} {...cell.getCellProps([{ className: cell.column.className }])}>
                  {cell.render('Cell')}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
};

// ==============================|| REACT TABLE - COLUMN RESIZING ||============================== //

const ColumnResizing = () => {
  const data = useMemo(() => makeData(40), []);

  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName'
      },
      {
        Header: 'Last Name',
        accessor: 'lastName'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Age',
        accessor: 'age'
      },
      {
        Header: 'Role',
        accessor: 'role'
      },
      {
        Header: 'Visits',
        accessor: 'visits'
      },
      {
        Header: 'country',
        accessor: 'country'
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => {
          switch (value) {
            case 'Complicated':
              return <Chip color="error" label="Complicated" size="small" variant="light" />;
            case 'Relationship':
              return <Chip color="success" label="Relationship" size="small" variant="light" />;
            case 'Single':
            default:
              return <Chip color="info" label="Single" size="small" variant="light" />;
          }
        }
      },
      {
        Header: 'Progress',
        Footer: 'Progress',
        accessor: 'progress',
        Cell: ({ value }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />
      }
    ],
    []
  );

  return (
    <MainCard title="Column Resizing" content={false} secondary={<CSVExport data={data} filename={'resizing-column-table.csv'} />}>
      <ScrollX>
        <ReactTable columns={columns} data={data} />
      </ScrollX>
    </MainCard>
  );
};

ColumnResizing.propTypes = {
  value: PropTypes.string
};

export default ColumnResizing;
