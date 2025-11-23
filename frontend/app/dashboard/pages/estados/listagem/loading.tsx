import { Skeleton } from "@/components/ui/skeleton"

function SimplePageSkeleton() {
    return (
        // Container principal da tela (altura total)
        <div className="flex h-screen w-full p-4 gap-4 bg-background">

            {/* BLOCO 1: Sidebar (Lateral Esquerda) */}
            {/* w-64 define a largura fixa, h-full ocupa a altura toda */}
            <Skeleton className="hidden md:block w-64 h-full rounded-xl" />

            {/* Coluna da Direita (Cabeçalho + Conteúdo) */}
            <div className="flex flex-col flex-1 gap-4">

                {/* BLOCO 2: Header (Topo) */}
                {/* h-16 define a altura do cabeçalho */}
                <Skeleton className="h-16 w-full rounded-xl" />

                {/* BLOCO 3: Conteúdo Principal (Resto da tela) */}
                {/* flex-1 faz ele ocupar todo o espaço restante automaticamente */}
                <Skeleton className="flex-1 w-full rounded-xl" />

            </div>
        </div>
    )
}

export default function Loading() {
    return <SimplePageSkeleton />
}
