// app/actions.ts
'use server';

// Definimos o tipo da resposta para ter type safety
export type ActionState = {
    success: boolean;
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
    };
};

export async function cadastrarUsuario(prevState: ActionState, formData: FormData): Promise<ActionState> {
    // Simulando um delay de rede (para ver o estado de loading)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    // 1. Validação simples (no mundo real, use Zod)
    if (!name || name.length < 3) {
        return {
            success: false,
            message: 'Erro na validação',
            errors: { name: ['O nome deve ter pelo menos 3 caracteres.'] },
        };
    }

    // 2. Lógica de Banco de Dados aqui...
    console.log(`Salvando usuário: ${name}, ${email}`);

    // 3. Retorno de sucesso
    return {
        success: true,
        message: 'Usuário cadastrado com sucesso!',
    };
}
