import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import PageClientComarca from "@/app/(DashboardLayout)/comarca/clientComarcas";
import {clientBackendComarca} from "@/client/clientBackEnd";
import {Metadata} from "next";

export const dynamic = 'force-dynamic' // defaults to auto


export const metadata: Metadata = {
    title: 'Comarcas',
};

const SamplePage = async () => {

    const rows = await clientBackendComarca.listAll();

    return (
        <PageContainer title="Comarcas" description="Listagem das Comarcas">
            <DashboardCard title="Comarcas">
                    <PageClientComarca comarcas={rows} />
            </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

