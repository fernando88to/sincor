'use client';
import {DataGrid, GridRenderCellParams} from "@mui/x-data-grid";
import {Comarca} from "@/type/Comarca";
import {Estado} from "@/type/Estado";

export const PageClientComarca = ({comarcas}: { comarcas: Comarca[] }) => {
    return (
        <div style={{height: '100%', width: '100%', marginTop: '20px'}}>
            <DataGrid
                rows={comarcas}
                columns={[
                    {field: 'id', headerName: 'ID', width: 120},
                    {field: 'nome', headerName: 'Nome', width: 300},
                    {field: 'entrancia', headerName: 'Entrância', width: 300},
                    {
                        field: 'estado',
                        headerName: 'Estado',
                        width: 300,
                        renderCell: (params: GridRenderCellParams<Comarca>) => {
                            return (params.row.estado.nome);
                        }
                    },

                ]}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 50},
                    },
                }}
                pageSizeOptions={[50, 100]}
            />
        </div>
    );
}
