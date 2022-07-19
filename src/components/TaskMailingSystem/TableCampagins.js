import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columns = [
  {
    accessorKey: "Name",
    header: () => <span>ID</span>,
  },
  {
    accessorKey: "Content",
    header: () => <span>Name</span>,
  },
  {
    accessorKey: "Created at",
    header: () => <span>Email</span>,
  },
  {
    accessorKey: "Status",
    header: () => <span>Date</span>,
  },
];

const TableCampagins = ({ newData }) => {
  const table = useReactTable({
    data: newData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCampagins;
