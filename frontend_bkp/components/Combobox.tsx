"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

// Exportamos o tipo para poder usar em outros lugares
export interface OptionType {
    value: string
    label: string
}

interface ComboboxProps {
    options: OptionType[]
    defaultValue?: string // Argumento opcional (chave do elemento padrão)
    onChange?: (value: string) => void // Função de callback quando seleciona
    placeholder?: string // Texto do botão quando nada selecionado
    searchPlaceholder?: string // Texto do input de busca
    emptyMessage?: string // Texto quando não acha nada
}

export function Combobox({
                             options,
                             defaultValue = "", // Se não tiver padrão, fica vazio
                             onChange,
                             placeholder = "Selecione um item...",
                             searchPlaceholder = "Procurar...",
                             emptyMessage = "Nenhum item encontrado.",
                         }: ComboboxProps) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(defaultValue)

    // Atualiza o valor interno se o defaultValue mudar externamente (opcional, mas recomendado)
    React.useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue)
        }
    }, [defaultValue])

    const handleSelect = (currentValue: string) => {
        // Se clicar no mesmo item que já está selecionado, desmarca (retorna vazio)
        // Caso contrário, marca o novo item
        const newValue = currentValue === value ? "" : currentValue

        setValue(newValue)
        setOpen(false)

        // Avisa o componente pai que mudou
        if (onChange) {
            onChange(newValue)
        }
    }

    // Encontra o label baseado no valor selecionado
    const selectedLabel = value
        ? options.find((option) => option.value === value)?.label
        : placeholder

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {selectedLabel}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder={searchPlaceholder} className="h-9" />
                    <CommandList>
                        <CommandEmpty>{emptyMessage}</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    // TRUQUE AQUI: Usamos o label como value para o filtro funcionar pelo texto visível
                                    value={option.label}
                                    onSelect={() => {
                                        // Mas ao selecionar, usamos o ID original (option.value)
                                        handleSelect(option.value)
                                    }}
                                >
                                    {option.label}
                                    <Check
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === option.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
