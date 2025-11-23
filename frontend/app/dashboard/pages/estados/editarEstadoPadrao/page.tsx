import {generateMeta} from "@/lib/utils";
import * as React from "react";
import {EditarEstadoPadraoPageCliente} from "@/app/dashboard/pages/estados/editarEstadoPadrao/pageclient";
import {clientBackendEstado} from "@/client/clientBackEnd";
import {Estado} from "@/type/Estado";

export async function generateMetadata() {
    return generateMeta({
        title: "Estados",
        description:
            "Lista de Estados do Sistema.",
        canonical: "/pages/estados"
    });
}


export default async function EditarEstadoPadraoPage() {
    let estados: Estado[] = await clientBackendEstado.listAll()


    return (
        <>
            <div className="flex items-center justify-between space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">Estado Padrão</h1>
            </div>
            <EditarEstadoPadraoPageCliente estados={estados}/>

        </>
    );
}
