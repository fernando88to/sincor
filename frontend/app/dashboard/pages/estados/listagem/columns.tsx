"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react" // Ícone
import { Button } from "@/components/ui/button" // Componente Button do shadcn

export type Pagamento = {
  id: string
  valor: number
  status: "pendente" | "processando" | "sucesso" | "falha"
  email: string
}

export const columns: ColumnDef<Pagamento>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },{
    accessorKey: "country",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          País
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

  },
  {
    accessorKey: "email",
    // Aqui transformamos o header numa função para renderizar o Botão
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  // {
  //   accessorKey: "valor",
  //   header: "Valor", // Você pode fazer o mesmo aqui se quiser ordenar por valor
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("valor"))
  //     const formatted = new Intl.NumberFormat("pt-BR", {
  //       style: "currency",
  //       currency: "BRL",
  //     }).format(amount)
  //
  //     return <div className="font-medium">{formatted}</div>
  //   },
  // },
]
