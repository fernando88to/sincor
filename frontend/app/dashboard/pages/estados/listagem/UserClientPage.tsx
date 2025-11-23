"use client";

import {DataTable} from "@/components/custom/datatable/DataTable";

import {ColumnDef} from "@tanstack/react-table";
import {Estado} from "@/type/Estado";
import {SortColumn} from "@/components/custom/datatable/SortColumn";
import {BadgeBoolean} from "@/components/custom/badge/BadgeBoolean";

const columns: ColumnDef<Estado>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "nome",
        header: ({column}) => {
            return <SortColumn title="Email" column={column}/>
        },
    },
    {
        accessorKey: "sigla",
        header: ({column}) => {
            return <SortColumn title="Sigla" column={column}/>
        },
    },
    {
        accessorKey: "estadoPadrao",
        header: ({column}) => {
            return <SortColumn title="Estado Padrão" column={column}/>
        },
        cell: ({row}) => {
            return <div className="flex justify-center">
                <BadgeBoolean value={row.getValue("estadoPadrao")}/>
            </div>
        }
    },
    // {
    //     accessorKey: "country",
    //     header: ({column}) => {
    //         return (
    //             <Button
    //                 variant="ghost"
    //                 onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //             >
    //                 País
    //                 <ArrowUpDown className="ml-2 h-4 w-4"/>
    //             </Button>
    //         )
    //     },
    //
    // },
    // {
    //     accessorKey: "email",
    //     // Aqui transformamos o header numa função para renderizar o Botão
    //     header: ({column}) => {
    //         return (
    //             <Button
    //                 variant="ghost"
    //                 onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //             >
    //                 Email
    //                 <ArrowUpDown className="ml-2 h-4 w-4"/>
    //             </Button>
    //         )
    //     },
    // },

]

export default function EstadoClientePage({data}: { data: any[] }) {
    // Defina aqui as colunas que deseja filtrar
    return <DataTable columns={columns} data={data} filterKeys={['nome', 'id', 'sigla']}/>;
}
