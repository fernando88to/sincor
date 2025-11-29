import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {RocketIcon} from "lucide-react";

interface Props {
    tipo: 'success' | 'error';
    mensagem: string;
}

export const AlertMessage = (props: Props) => {

    return (<div className="w-full">
        <Alert
            variant="default"
            className="
          w-full
          mt-2
          mb-2
          rounded-none
          border-x-0
          bg-green-50
          border-green-200
          text-green-900

          /* LAYOUT FLEXBOX */
          flex items-start gap-3

          /* RESET DO ÍCONE PADRÃO DO SHADCN */
          /* O padrão do shadcn usa absolute, aqui forçamos ele a obedecer o flexbox */
          [&>svg]:static [&>svg]:translate-y-0"
        >
            {/* Ajuste leve na margem superior (mt-1) para alinhar visualmente com o Título */}
            <RocketIcon className="h-5 w-5 text-green-600 mt-0.5 shrink-0"/>

            <div className="flex flex-col text-left">
                <AlertTitle className="mb-1 font-semibold">Sucesso!</AlertTitle>
                <AlertDescription>
                    {props.mensagem}
                </AlertDescription>
            </div>
        </Alert>
    </div>);
}
