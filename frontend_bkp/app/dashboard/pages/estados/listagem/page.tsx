import Link from "next/link";
import {Button} from "@/components/ui/button";
import {PlusCircledIcon} from "@radix-ui/react-icons";
import {generateMeta} from "@/lib/utils";
import EstadoClientePage from "@/app/dashboard/pages/estados/listagem/UserClientPage";
import {clientBackendEstado} from "@/client/clientBackEnd";

export async function generateMetadata() {
  return generateMeta({
    title: "Estados",
    description:
        "Lista de Estados do Sistema.",
    canonical: "/pages/estados"
  });
}





export default async function Page() {
  const estados = await clientBackendEstado.listAll();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Estados</h1>
        <Button asChild>
          <Link href="/dashboard/pages/estados/editarEstadoPadrao">
            <PlusCircledIcon className="me-2" /> Estado Padrão
          </Link>
        </Button>
      </div>
      <EstadoClientePage  data={estados} />
    </>
  );
}
