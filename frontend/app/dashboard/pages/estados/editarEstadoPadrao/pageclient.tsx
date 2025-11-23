'use client';
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import * as React from "react";
import {useActionState} from "react";
import {Combobox, OptionType} from "@/components/Combobox";
import {Estado} from "@/type/Estado";
import {ActionState, cadastrarUsuario} from '@/app/dashboard/pages/estados/editarEstadoPadrao/actions'


const initialState = {
    success: false,
    message: '',
};

export function EditarEstadoPadraoPageCliente({estados}: { estados: Estado[] }) {

    const estadosFormatoOption: OptionType[] = estados.map((estado) => ({
        value: estado.id.toString(),
        label: estado.nome,
    }));
    const estadoSelecionado = estados.find((elemento) => {
        return elemento.estadoPadrao;
    });

    const [state, formAction, isPending] = useActionState<ActionState, FormData>(cadastrarUsuario, initialState);

    return (
        <>
            <form action={formAction} className="flex flex-col gap-4">
                <Card className="w-full mt-5">
                    <CardHeader className="flex flex-row items-center">
                        <CardTitle>Selecione o estado padrão</CardTitle>
                    </CardHeader>
                    <CardContent>

                        <Combobox options={estadosFormatoOption} defaultValue={estadoSelecionado?.id.toString()}/>

                        {state?.errors?.name && (
                            <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
                        )}


                    </CardContent>


                    <CardFooter>
                        <div className="flex w-full items-center space-x-2">
                            <Button variant="outline" className="w-full">
                                Cancelar
                            </Button>
                            <Button type="submit" className="w-full" disabled={isPending}>
                                {isPending ? 'Salvando...' : 'Cadastrar'}
                            </Button>
                        </div>


                    </CardFooter>

                </Card>
            </form>

        </>
    );
}
