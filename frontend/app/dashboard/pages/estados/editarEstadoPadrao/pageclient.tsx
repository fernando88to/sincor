'use client';
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import * as React from "react";
import {useActionState} from "react";
import {Combobox, OptionType} from "@/components/Combobox";
import {Estado} from "@/type/Estado";
import {ActionState, cadastrarUsuario} from '@/app/dashboard/pages/estados/editarEstadoPadrao/actions'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"


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
            <form action={formAction} className="flex flex-col">
                <Card className="mt-5">
                    <CardHeader className="flex flex-row items-center">
                        <CardTitle>Selecione o estado padrão</CardTitle>
                    </CardHeader>
                    <CardContent>

                        {/*<div className="w-full grid grid-cols-2 gap-4">*/}
                        {/*    /!* Item 1: Linha 1, Coluna 1 *!/*/}
                        {/*    <div className="space-y-2">*/}
                        {/*        <Label htmlFor="nome">Nome</Label>*/}
                        {/*        <Input id="nome" placeholder="Digite seu nome" />*/}
                        {/*    </div>*/}

                        {/*    /!* Item 2: Linha 1, Coluna 2 *!/*/}
                        {/*    <div className="space-y-2">*/}
                        {/*        <Label htmlFor="sobrenome">Sobrenome</Label>*/}
                        {/*        <Input id="sobrenome" placeholder="Digite seu sobrenome" />*/}
                        {/*    </div>*/}

                        {/*    /!* Item 3: Linha 2, Coluna 1 *!/*/}
                        {/*    <div className="space-y-2">*/}
                        {/*        <Label htmlFor="email">Email</Label>*/}
                        {/*        <Input id="email" type="email" placeholder="seu@email.com" />*/}
                        {/*    </div>*/}

                        {/*    /!* Item 4: Linha 2, Coluna 2 *!/*/}
                        {/*    <div className="space-y-2">*/}
                        {/*        <Label htmlFor="cargo">Cargo</Label>*/}
                        {/*        <Input id="cargo" placeholder="Ex: Desenvolvedor" />*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                        <div className="w-full grid grid-cols-1 gap-4">
                            {/* Item 1: Linha 1, Coluna 1 */}
                            <div className="space-y-2">
                                <Label htmlFor="nome">Estado</Label>
                                <Combobox options={estadosFormatoOption} defaultValue={estadoSelecionado?.id.toString()}/>
                                {state?.errors?.name && (
                                    <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
                                )}
                            </div>
                        </div>






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
