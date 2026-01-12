import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Termos de Uso | Automatize',
    description: 'Termos e condições de uso do Automatize.',
};

export default function TermosPage() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-8">Termos de Uso</h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-muted-foreground">Última atualização: Janeiro de 2025</p>

                        <h2>1. Aceitação dos Termos</h2>
                        <p>
                            Ao acessar e utilizar o site Automatize e seus produtos, você concorda com estes
                            Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve
                            utilizar nossos serviços.
                        </p>

                        <h2>2. Descrição dos Serviços</h2>
                        <p>
                            O Automatize é um marketplace de produtos digitais, especificamente automações
                            baseadas na plataforma n8n. Oferecemos workflows prontos, materiais educacionais,
                            templates e suporte para configuração.
                        </p>

                        <h2>3. Licença de Uso</h2>
                        <p>
                            Ao adquirir um produto, você recebe uma licença pessoal e intransferível para
                            uso comercial próprio. Você NÃO está autorizado a:
                        </p>
                        <ul>
                            <li>Revender ou redistribuir os produtos</li>
                            <li>Compartilhar acesso com terceiros</li>
                            <li>Utilizar os produtos em serviços concorrentes</li>
                        </ul>

                        <h2>4. Garantia e Reembolso</h2>
                        <p>
                            Oferecemos garantia incondicional de 7 (sete) dias corridos a partir da data
                            de compra. Se você não ficar satisfeito por qualquer motivo, basta solicitar
                            o reembolso dentro deste prazo.
                        </p>

                        <h2>5. Suporte</h2>
                        <p>
                            Nosso suporte está disponível por 30 dias após a compra através do grupo
                            exclusivo no Telegram e por email. Respondemos em até 24 horas úteis.
                        </p>

                        <h2>6. Limitação de Responsabilidade</h2>
                        <p>
                            Não nos responsabilizamos por:
                        </p>
                        <ul>
                            <li>Resultados específicos obtidos com as automações</li>
                            <li>Mudanças em APIs de terceiros que afetem o funcionamento</li>
                            <li>Uso indevido dos produtos</li>
                            <li>Perda de dados ou danos indiretos</li>
                        </ul>

                        <h2>7. Modificações</h2>
                        <p>
                            Reservamo-nos o direito de modificar estes termos a qualquer momento.
                            Alterações significativas serão comunicadas por email.
                        </p>

                        <h2>8. Contato</h2>
                        <p>
                            Para dúvidas sobre estes termos, entre em contato pelo email:
                            contato@automatize.com.br
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
