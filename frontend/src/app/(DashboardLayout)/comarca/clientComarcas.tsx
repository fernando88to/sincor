'use client';
import {DataGrid, GridRenderCellParams} from "@mui/x-data-grid";
import {Comarca} from "@/type/Comarca";
import {Grid, Select, TextField, Typography} from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";

const PageClientComarca = ({comarcas}: { comarcas: Comarca[] }) => {
    return (
        <div style={{height: '100%', width: '100%', marginTop: '20px'}}>

            <Grid container spacing={2}>



                <Grid size={{ xs: 6, md: 8 ,lg:6}}>
                    <Typography variant="subtitle1"
                                fontWeight={600} component="label" htmlFor='codigo' mb="5px" mt="25px">Código</Typography>
                    <TextField id="codigo" variant="outlined" fullWidth  size="small"/>
                </Grid>

                <Grid size={{ xs: 6, md: 8 ,lg:6}}>
                    <Typography variant="subtitle1"
                                fontWeight={600} component="label" htmlFor='name' mb="5px">Nome</Typography>
                    <TextField id="name" variant="outlined" fullWidth size="small" />
                </Grid>

                <Grid size={{ xs: 6, md: 8 ,lg:6}}>
                    <Typography variant="subtitle1"
                                fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Estado</Typography>
                    <Select fullWidth size="small"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Grid>
            </Grid>

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
export default PageClientComarca
