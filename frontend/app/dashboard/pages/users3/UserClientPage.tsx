"use client";

import { DataTable } from "@/app/dashboard/pages/users3/DataTable";
import { columns } from "@/app/dashboard/pages/users3/columns";

export default function UserClientePage({ data }: { data: any[] }) {
  // Defina aqui as colunas que deseja filtrar
  const searchConfig = [
    { id: "email", title: "Email" },
    { id: "id", title: "id" }
  ]

  return <DataTable columns={columns} data={data} filterKeys={['email', 'id']} />;
}
