'use client';
import {Button} from "@/components/ui/button";
import {generateMeta} from "@/lib/utils";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import * as React from "react";
import {Combobox} from "@/components/Combobox";




export function EditarEstadoPadraoPageCliente() {


    return (
        <>
            <Card className="w-full mt-5">
                <CardHeader className="flex flex-row items-center">
                    <CardTitle>Selecione o estado padrão</CardTitle>
                </CardHeader>
                <CardContent>
                    <Input
                        id="message"
                        placeholder="Type your message..."
                        className="flex-1"
                        autoComplete="off"/>
                    <Combobox />
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
