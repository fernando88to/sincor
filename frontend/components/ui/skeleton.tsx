import { cn } from "@/lib/utils"

function Skeleton({
                      className,
                      ...props
                  }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                // ANTES ERA: "animate-pulse rounded-md bg-muted"
                // MUDAR PARA ALGO MAIS FORTE:
                "animate-pulse rounded-md bg-gray-300 dark:bg-gray-700",
                className
            )}
            {...props}
        />
    )
}

export { Skeleton }


//padrão que veio

// import { cn } from "@/lib/utils"
//
// function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="skeleton"
//       className={cn("bg-accent animate-pulse rounded-md", className)}
//       {...props}
//     />
//   )
// }
//
// export { Skeleton }
