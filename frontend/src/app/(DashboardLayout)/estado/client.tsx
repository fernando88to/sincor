'use client';
import {DataGrid, GridRenderCellParams} from "@mui/x-data-grid";
import {Estado} from "@/type/Estado";
import {Chip, IconButton} from "@mui/material";
import {Edit} from "@mui/icons-material";

export const PageClientComarca = ({estados}: { estados: Estado[] }) => {
    return (
        <div style={{height: '100%', width: '100%', marginTop: '20px'}}>
            <DataGrid


                rows={estados}
                columns={[
                    {field: 'id', headerName: 'ID', width: 120},
                    {field: 'nome', headerName: 'Nome', width: 300},
                    {field: 'sigla', headerName: 'Sigla', minWidth: 150},
                    {
                        field: 'estadoPadrao',
                        headerName: 'Padrão',
                        width: 300,
                        renderCell: (params: GridRenderCellParams<Estado>) => {
                            if (params.row.estadoPadrao === null) return '';
                            return (
                                <Chip
                                    label={params.row.estadoPadrao ? 'Sim' : 'Não'}
                                    color={params.row.estadoPadrao ? 'success' : 'error'}
                                    size="small"
                                />
                            );
                        }
                    },
                    {
                        field: 'actions',
                        headerName: 'Ações',
                        flex:1,
                        renderCell: (params: GridRenderCellParams<Estado>) => {
                            return (
                                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                                    <IconButton color="primary" size="small">
                                        <Edit fontSize="small"/>
                                    </IconButton>
                                </div>
                            );
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
