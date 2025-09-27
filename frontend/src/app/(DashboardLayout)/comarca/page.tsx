'use client';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const SamplePage = () => {
    const comarcas = [
        {id: 1, nome: 'Comarca de São Paulo', entrancia: 3},
        {id: 2, nome: 'Comarca de Campinas', entrancia: 3},
        {id: 3, nome: 'Comarca de Santos', entrancia: 3},
        {id: 4, nome: 'Comarca de Ribeirão Preto', entrancia: 3},
        {id: 5, nome: 'Comarca de Jundiaí', entrancia: 2},
        {id: 6, nome: 'Comarca de Itu', entrancia: 2},
        {id: 7, nome: 'Comarca de Atibaia', entrancia: 1},
    ];

    return (
        <PageContainer title="Comarcas" description="Listagem de Comarcas">
            <DashboardCard title="Comarcas">

                    <Table sx={{minWidth: 650}} aria-label="tabela de comarcas">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Nome</TableCell>
                                <TableCell>Entrância</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {comarcas.map((comarca) => (
                                <TableRow key={comarca.id}>
                                    <TableCell>{comarca.id}</TableCell>
                                    <TableCell>{comarca.nome}</TableCell>
                                    <TableCell>{comarca.entrancia}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                <div style={{height: 400, width: '100%', marginTop: '20px'}}>
                    <DataGrid
                        rows={comarcas}
                        columns={[
                            {field: 'id', headerName: 'ID', width: 90},
                            {field: 'nome', headerName: 'Nome', width: 300},
                            {field: 'entrancia', headerName: 'Entrância', width: 130},
                        ]}
                        initialState={{
                            pagination: {
                                paginationModel: {page: 0, pageSize: 5},
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                    />
                </div>
            </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

