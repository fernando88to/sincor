'use client';
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import * as React from "react";
import {Combobox, OptionType} from "@/components/Combobox";
import {Estado} from "@/type/Estado";


const frameworks: OptionType[] = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",

    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]

export function EditarEstadoPadraoPageCliente({estados}: { estados: Estado[]}) {

    let estadosFormatoOption: OptionType[] = estados.map((estado) => ({
        value: estado.id.toString(),
        label: estado.nome,
    }));
    let estadoSelecionado = estados.find((elemento) => {
        return elemento.estadoPadrao;
    });

    return (
        <>
            <Card className="w-full mt-5">
                <CardHeader className="flex flex-row items-center">
                    <CardTitle>Selecione o estado padrão</CardTitle>
                </CardHeader>
                <CardContent>
                    <Combobox options={estadosFormatoOption} defaultValue={estadoSelecionado?.id.toString()}  />
                </CardContent>


                <CardFooter>
                    <div className="flex w-full items-center space-x-2">
                        <Button variant="outline" className="w-full">
                            Cancelar
                        </Button>
                        <Button type="submit" className="w-full">
                            Salvar
                        </Button>
                    </div>


                </CardFooter>

            </Card>

        </>
    );
}
