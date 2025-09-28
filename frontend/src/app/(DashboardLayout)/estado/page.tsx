
import {DataGrid} from '@mui/x-data-grid';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import {PageClientComarca} from "@/app/(DashboardLayout)/estado/client";
import {clientBackendEstado} from "@/client/clientBackEnd";
import {Metadata} from "next";



export const dynamic = 'force-dynamic' // defaults to auto


export const metadata: Metadata = {
    title: 'Estados',
};

const SamplePage = async () => {

    const rows = await clientBackendEstado.listAll();

    return (
        <PageContainer title="Comarcas" description="Listagem de Comarcas">
            <DashboardCard title="Comarcas">

                    {/*<Table sx={{minWidth: 650}} aria-label="tabela de comarcas">
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
                    </Table>*/}
                    <PageClientComarca estados={rows} />
            </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

