
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
        <PageContainer title="Estado" description="Listagem dos Estados">
            <DashboardCard title="Estados">
                    <PageClientComarca estados={rows} />
            </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

