import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Chip, Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@mui/material';

// third-party
import { useTable } from 'react-table';

// project-imports
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import { CSVExport } from 'components/third-party/ReactTable';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <Table {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell key={column} {...column.getHeaderProps([{ className: column.className }])}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row) => {
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
      <TableFooter>
        {footerGroups.map((group) => (
          <TableRow key={group} {...group.getFooterGroupProps()}>
            {group.headers.map((column) => (
              <TableCell key={column} {...column.getFooterProps([{ className: column.className }])}>
                {column.render('Footer')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableFooter>
    </Table>
  );
}
ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
};
// ==============================|| REACT TABLE - FOOTER ||============================== //

const FooterTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'firstName'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'lastName'
      },
      {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age',
        className: 'cell-right'
      },
      {
        Header: 'Role',
        Footer: 'Role',
        accessor: 'role'
      },
      {
        Header: 'Visits',
        Footer: 'Visits',
        accessor: 'visits',
        className: 'cell-right'
      },
      {
        Header: 'Status',
        Footer: 'Status',
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
        Footer: 'Profile Progress',
        accessor: 'progress',
        Cell: ({ value }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />
      }
    ],
    []
  );

  return (
    <MainCard title="Footer" content={false} secondary={<CSVExport data={data.slice(0, 10)} filename={'footer-table.csv'} />}>
      <ScrollX>
        <ReactTable columns={columns} data={data} />
      </ScrollX>
    </MainCard>
  );
};

FooterTable.propTypes = {
  data: PropTypes.array,
  value: PropTypes.string
};

export default FooterTable;
