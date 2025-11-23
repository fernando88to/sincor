import {Button} from "@/components/ui/button";
import {generateMeta} from "@/lib/utils";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import * as React from "react";
import {EditarEstadoPadraoPageCliente} from "@/app/dashboard/pages/estados/editarEstadoPadrao/pageclient";

export async function generateMetadata() {
    return generateMeta({
        title: "Estados",
        description:
            "Lista de Estados do Sistema.",
        canonical: "/pages/estados"
    });
}


export default async function EditarEstadoPadraoPage() {


    return (
        <>
            <div className="flex items-center justify-between space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">Estado Padrão</h1>
            </div>
            <EditarEstadoPadraoPageCliente />

        </>
    );
}
