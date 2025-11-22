'use client';
import { DataTable } from "@/app/dashboard/pages/users2/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge"
const columns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: "Id"
  },
  {
    accessorKey: "name",
    header: "Nome"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      //active
      //pending
      //inactive
      return (
        <div className="flex flex-col items-center gap-2">
          <div>
            {status === "active" && <Badge variant="success" >active</Badge>}
            {status === "pending" && <Badge variant="warning">pending</Badge>}
            {status === "inactive" && <Badge variant="outline">inactive</Badge>}

          </div>

        </div>
      );
    }
  }
];

export default function UserClientePage({ data }: { data: any[] }) {
  return <DataTable columns={columns} data={data} />;
}
