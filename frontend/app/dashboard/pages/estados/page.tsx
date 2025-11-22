import Link from "next/link";
import {Button} from "@/components/ui/button";
import {PlusCircledIcon} from "@radix-ui/react-icons";
import {generateMeta} from "@/lib/utils";
import EstadoClientePage from "@/app/dashboard/pages/estados/UserClientPage";
import {clientBackendEstado} from "@/client/clientBackEnd";

export async function generateMetadata() {
  return generateMeta({
    title: "Users - Shadcn UI Kit Free",
    description:
      "A list of users created using the Tanstack Table. Tailwind is built on CSS and React.",
    canonical: "/pages/estados"
  });
}





export default async function Page() {
  const estados = await clientBackendEstado.listAll();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Users</h1>
        <Button asChild>
          <Link href="#">
            <PlusCircledIcon className="me-2" /> Add New User
          </Link>
        </Button>
      </div>
      <EstadoClientePage  data={estados} />
    </>
  );
}
