export interface Livro {
    title: string;
    slug: string;
    category: string;
    description: string;
    vendasUrl: string;
    checkoutUrl: string;
    imagem: string;
}

export const livros: Livro[] = [
    {
        title: "Inteligência Artificial para Leigos",
        slug: "inteligencia-artificial-para-leigos",
        category: "inteligencia-artificial",
        description:
            "Inteligência Artificial para Leigos é um guia prático e direto para quem quer entender, de forma simples, como a IA funciona e como usá-la no dia a dia. Com linguagem clara e objetiva, o e-book explica os conceitos essenciais, aplicações no trabalho e na produtividade, além de temas como ética e futuro da tecnologia. Inclui ainda o Bônus Exclusivo: Guia Essencial de IA, com 10 aplicações práticas para colocar o aprendizado em ação imediatamente.",
        vendasUrl: "/vendas/inteligencia-artificial-para-leigos",
        checkoutUrl: "https://pay.kiwify.com.br/k3eMn3V",
        imagem: "/capas/capa-inteligencia-artificial-para-leigos.png",
    },
    {
        title: "Criptomoedas para Leigos",
        slug: "criptomoedas-para-leigos",
        category: "financas",
        description:
            "Criptomoedas para Leigos é um guia prático e direto para quem quer começar no mercado cripto com segurança, mesmo do zero. Com linguagem simples, explica o que são criptomoedas, como o Bitcoin funciona, como comprar, onde guardar e como evitar golpes. Você aprende a investir com pouco dinheiro e agir com responsabilidade. Inclui o bônus Checklist do Iniciante em Cripto, com passos essenciais para começar da forma certa.",
        vendasUrl: "/vendas/criptomoedas-para-leigos",
        checkoutUrl: "https://pay.kiwify.com.br/aqAQgHv",
        imagem: "/capas/capa-criptomoeda-para-leigos.png",
    },
    {
        title: "Finanças Pessoais para Leigos",
        slug: "financas-pessoais-para-leigos",
        category: "financas",
        description:
            "Finanças Pessoais para Leigos é um guia prático para quem quer organizar o dinheiro mesmo começando do zero. Com linguagem simples, ensina a controlar gastos, criar um plano mensal, sair do aperto e começar a guardar dinheiro. Inclui o bônus Sistema Simples para Organizar Seu Dinheiro, uma planilha prática para aplicar o aprendizado e conquistar mais clareza e tranquilidade financeira.",
        vendasUrl: "https://kiwify.app/NUluTzt",
        checkoutUrl: "https://pay.kiwify.com.br/TjcXsMf",
        imagem: "/capas/capa-financas-pessoais-para-leigos.png",
    },
    {
        title: "Como Sair das Dívidas para Leigos",
        slug: "como-sair-das-dividas-para-leigos",
        category: "financas",
        description:
            "Como Sair das Dívidas para Leigos é um guia prático para quem quer eliminar dívidas com um plano claro e aplicável. Ensina a organizar contas, negociar corretamente, reduzir juros e criar estratégia para quitar tudo mais rápido. Sem fórmulas mágicas, apenas método simples e direto. Inclui o bônus Guia Prático, com passo a passo para reorganizar sua vida financeira e recuperar o controle.",
        vendasUrl: "https://kiwify.app/MYKYY4D",
        checkoutUrl: "https://pay.kiwify.com.br/1YCX93r",
        imagem: "/capas/capa-como-sair-das-dividas-para-leigos.png",
    },
    {
        title: "ChatGPT para Leigos",
        slug: "chatgpt-para-leigos",
        category: "tecnologia",
        description:
            "ChatGPT para Leigos é um guia prático para aprender a usar o ChatGPT de forma simples e segura, mesmo começando do zero. Explica como funciona, como fazer perguntas melhores e como aplicar a ferramenta no dia a dia para ganhar tempo e produtividade. Com linguagem clara e exemplos práticos, mostra como transformar a Inteligência Artificial em uma aliada sem complicação.",
        vendasUrl: "https://kiwify.app/LRgh2ln",
        checkoutUrl: "https://pay.kiwify.com.br/8vbTmaU",
        imagem: "/capas/capa-chatgpt-para-leigos.png",
    },
    {
        title: "Trabalho Remoto para Leigos",
        slug: "trabalho-remoto-para-leigos",
        category: "trabalho-e-carreira",
        description:
            "Trabalho Remoto para Leigos é um guia prático para quem quer começar a trabalhar de casa mesmo sem experiência. Explica o que é trabalho remoto, como encontrar oportunidades confiáveis e como dar os primeiros passos com segurança. Com linguagem simples e exemplos reais, mostra como transformar a internet em uma fonte de renda sem complicação.",
        vendasUrl: "https://kiwify.app/FFphEiK",
        checkoutUrl: "https://pay.kiwify.com.br/5x6a6Of",
        imagem: "/capas/capa-trabalho-remoto-para-leigos.png",
    },
    {
        title: "Investimentos para Leigos",
        slug: "investimentos-para-leigos",
        category: "investimentos",
        description:
            "Investimentos para Leigos é um guia prático para quem quer começar a investir mesmo sem experiência. Explica, de forma simples, a diferença entre guardar e investir, os principais tipos de investimentos, como começar com pouco dinheiro e como evitar erros comuns. Ideal para quem deseja construir um futuro financeiro mais seguro sem complicação.",
        vendasUrl: "https://kiwify.app/tavBoUN",
        checkoutUrl: "https://pay.kiwify.com.br/sXbscvh",
        imagem: "/capas/capa-investimentos-para-leigos.png",
    },
    {
        title: "Criador de Conteúdo para Leigos",
        slug: "criador-de-conteudo-para-leigos",
        category: "criacao-de-conteudo",
        description:
            "Criador de Conteúdo para Leigos é um guia prático para quem quer começar a produzir conteúdo na internet sem experiência. Explica, de forma simples, como criar posts, vídeos e textos, escolher temas, organizar ideias e crescer com consistência. Ideal para quem deseja sair do zero e construir presença online sem complicação.",
        vendasUrl: "https://kiwify.app/e0vvZhh",
        checkoutUrl: "https://pay.kiwify.com.br/mifZc8U",
        imagem: "/capas/capa-criador-de-conteudo-para-leigos.png",
    },
    {
        title: "Produtividade para Leigos",
        slug: "produtividade-para-leigos",
        category: "produtividade",
        description:
            "Produtividade para Leigos é um guia prático para quem quer organizar melhor o tempo e produzir mais no dia a dia. Ensina, de forma simples, como evitar distrações, criar hábitos produtivos, planejar tarefas e manter o foco. Ideal para quem se sente sobrecarregado e quer mais resultados com menos esforço, sem complicação.",
        vendasUrl: "https://kiwify.app/LffYB7J",
        checkoutUrl: "https://pay.kiwify.com.br/ievEnNy",
        imagem: "/capas/capa-produtividade-para-leigos.png",
    },
    {
        title: "Renda Extra para Leigos",
        slug: "renda-extra-para-leigos",
        category: "renda-extra",
        description:
            "Renda Extra para Leigos é um guia prático para quem quer ganhar dinheiro além da renda principal. Ensina, de forma simples, como identificar oportunidades, começar do zero, evitar erros e gerar renda com o tempo disponível. Ideal para quem busca mais dinheiro, segurança e liberdade financeira, sem complicação.",
        vendasUrl: "https://kiwify.app/TS9RKOQ",
        checkoutUrl: "https://pay.kiwify.com.br/ZY9bbyl",
        imagem: "/capas/capa-renda-extra-para-leigos.png",
    },
];