import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Box, Chip, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// third-party
import { useTable, useFilters, usePagination } from 'react-table';

// project-imports
import makeData from 'data/react-table';
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { CSVExport, TablePagination } from 'components/third-party/ReactTable';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, top }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }
    },
    useFilters,
    usePagination
  );

  return (
    <Stack>
      {top && (
        <Box sx={{ p: 2 }}>
          <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageIndex={pageIndex} pageSize={pageSize} />
        </Box>
      )}

      <Table {...getTableProps()}>
        <TableHead sx={{ borderTopWidth: top ? 2 : 1 }}>
          {headerGroups.map((headerGroup) => (
            <TableRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell key={column} cell={column} {...column.getHeaderProps([{ className: column.className }])}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
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

          {!top && (
            <TableRow>
              <TableCell sx={{ p: 2 }} colSpan={7}>
                <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageIndex={pageIndex} pageSize={pageSize} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Stack>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  top: PropTypes.bool
};

// ==============================|| REACT TABLE - PAGINATION ||============================== //

const PaginationTable = () => {
  const data = useMemo(() => makeData(2000), []);
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
        accessor: 'age',
        className: 'cell-right'
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        className: 'cell-right'
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
        Header: 'Profile Progress',
        accessor: 'progress',
        Cell: ({ value }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />
      }
    ],
    []
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard title="Pagination at Top" content={false} secondary={<CSVExport data={data} filename={'pagination-top-table.csv'} />}>
          <ScrollX>
            <ReactTable columns={columns} data={data} top />
          </ScrollX>
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard
          title="Pagination at Bottom"
          content={false}
          secondary={<CSVExport data={data} filename={'pagination-bottom-table.csv'} />}
        >
          <ScrollX>
            <ReactTable columns={columns} data={data} />
          </ScrollX>
        </MainCard>
      </Grid>
    </Grid>
  );
};

PaginationTable.propTypes = {
  value: PropTypes.string
};

export default PaginationTable;
