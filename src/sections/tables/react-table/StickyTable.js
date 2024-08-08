import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Table, TableBody, TableCell, TableHead, TableRow, Stack } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// third-party
import { useTable, useSortBy } from 'react-table';
import { useSticky } from 'react-table-sticky';

// project-imports
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { CSVExport, HeaderSort } from 'components/third-party/ReactTable';
import { ThemeMode } from 'config';

// ==============================|| REACT TABLE ||============================== //

// table style
const TableWrapper = styled('div')(() => ({
  '.header': {
    position: 'sticky',
    zIndex: 1,
    width: 'fit-content'
  },
  '& th[data-sticky-td]': {
    position: 'sticky',
    zIndex: '5 !important'
  }
}));

function ReactTable({ columns, data, getHeaderProps, title }) {
  const defaultColumn = useMemo(
    () => ({
      minWidth: 50,
      width: 100,
      maxWidth: 400
    }),
    []
  );
  const theme = useTheme();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useSortBy,
    useSticky
  );

  const sortingRow = rows.slice(0, 19);
  let sortedData = sortingRow.map((d) => d.original);
  Object.keys(sortedData).forEach((key) => sortedData[Number(key)] === undefined && delete sortedData[Number(key)]);

  return (
    <Stack spacing={10}>
      <MainCard
        title={title}
        content={false}
        secondary={
          <CSVExport data={sortedData} filename={title === 'Sticky Header' ? 'sticky-header-table.csv' : 'sticky-column-table.csv'} />
        }
      >
        <ScrollX sx={{ height: 500 }}>
          <TableWrapper>
            <Table {...getTableProps()} stickyHeader>
              <TableHead>
                {headerGroups.map((headerGroup) => (
                  <TableRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => {
                      return (
                        <TableCell
                          key={column}
                          sx={{ position: 'sticky !important' }}
                          {...column.getHeaderProps([{ className: column.className }, getHeaderProps(column)])}
                        >
                          <HeaderSort column={column} />
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody {...getTableBodyProps()}>
                {sortingRow.map((row) => {
                  prepareRow(row);
                  return (
                    <TableRow key={row} {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <TableCell
                            key={cell}
                            sx={{
                              bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.100' : 'common.white'
                            }}
                            {...cell.getCellProps([{ className: cell.column.className }])}
                          >
                            {cell.render('Cell')}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableWrapper>
        </ScrollX>
      </MainCard>
    </Stack>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  getHeaderProps: PropTypes.func,
  title: PropTypes.string
};

// ==============================|| REACT TABLE - STICKY ||============================== //

const StickyTable = ({ columns, data, title }) => {
  return <ReactTable columns={columns} data={data} title={title} getHeaderProps={(column) => column.getSortByToggleProps()} />;
};

StickyTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  title: PropTypes.string
};

export default StickyTable;
