import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidade | Automatize',
    description: 'Política de privacidade e proteção de dados do Automatize.',
};

export default function PrivacidadePage() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-8">Política de Privacidade</h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-muted-foreground">Última atualização: Janeiro de 2025</p>

                        <h2>1. Informações Coletadas</h2>
                        <p>Coletamos as seguintes informações:</p>
                        <ul>
                            <li><strong>Dados de cadastro:</strong> nome, email</li>
                            <li><strong>Dados de pagamento:</strong> processados pela Kiwify (não armazenamos dados de cartão)</li>
                            <li><strong>Dados de uso:</strong> páginas visitadas, interações com o chatbot</li>
                        </ul>

                        <h2>2. Uso das Informações</h2>
                        <p>Utilizamos suas informações para:</p>
                        <ul>
                            <li>Processar suas compras e entregar os produtos</li>
                            <li>Enviar atualizações sobre seus produtos</li>
                            <li>Fornecer suporte técnico</li>
                            <li>Enviar conteúdo relevante (com seu consentimento)</li>
                            <li>Melhorar nossos produtos e serviços</li>
                        </ul>

                        <h2>3. Compartilhamento de Dados</h2>
                        <p>
                            Não vendemos ou alugamos seus dados. Compartilhamos apenas com:
                        </p>
                        <ul>
                            <li><strong>Kiwify:</strong> para processamento de pagamentos</li>
                            <li><strong>Ferramentas de email:</strong> para envio de comunicações</li>
                            <li><strong>Analytics:</strong> para métricas de uso (dados anonimizados)</li>
                        </ul>

                        <h2>4. Cookies</h2>
                        <p>
                            Utilizamos cookies para melhorar sua experiência, lembrar preferências
                            e analisar o tráfego do site. Você pode desativar cookies nas configurações
                            do seu navegador.
                        </p>

                        <h2>5. Segurança</h2>
                        <p>
                            Implementamos medidas de segurança para proteger suas informações, incluindo
                            criptografia SSL/TLS e acesso restrito aos dados.
                        </p>

                        <h2>6. Seus Direitos (LGPD)</h2>
                        <p>De acordo com a Lei Geral de Proteção de Dados, você tem direito a:</p>
                        <ul>
                            <li>Acessar seus dados pessoais</li>
                            <li>Corrigir dados incorretos</li>
                            <li>Solicitar exclusão dos dados</li>
                            <li>Revogar consentimento</li>
                            <li>Solicitar portabilidade dos dados</li>
                        </ul>

                        <h2>7. Retenção de Dados</h2>
                        <p>
                            Mantemos seus dados enquanto sua conta estiver ativa ou conforme necessário
                            para fornecer nossos serviços. Dados podem ser retidos por períodos mais
                            longos para cumprimento de obrigações legais.
                        </p>

                        <h2>8. Contato</h2>
                        <p>
                            Para questões sobre privacidade ou exercer seus direitos, entre em contato:
                            privacidade@automatize.com.br
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
