import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const TableCampagins = ({ newData }) => {
  const columns = [
    {
      accessorKey: "Name",
      header: () => <span>Name</span>,
    },
    {
      accessorKey: "Content",
      header: () => <span>Content</span>,
    },
    {
      accessorKey: "Created at",
      header: () => <span>Created at</span>,
    },
    {
      accessorKey: "Status",
      header: () => <span>Status</span>,
    },
    {
      accessorKey: "Controls",
      cell: (props) => <button onClick={() => show(props.row.original)}>adass</button>,
    },
  ];

  const table = useReactTable({
    data: newData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const show = (data) => {
    console.log(data);
  };

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
