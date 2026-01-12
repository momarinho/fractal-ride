'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Play,
    ShieldCheck,
    ArrowRight,
    Users,
    TrendingUp,
    Megaphone,
    Calculator,
    Settings,
    Star,
    Package,
    Clock,
    Headphones,
    Download,
    ChevronLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/lib/products';

const categoryIcons = {
    rh: Users,
    vendas: TrendingUp,
    marketing: Megaphone,
    financeiro: Calculator,
    operacional: Settings,
};

const categoryLabels = {
    rh: 'RH',
    vendas: 'Vendas',
    marketing: 'Marketing',
    financeiro: 'Financeiro',
    operacional: 'Operacional',
};

const productFaqs = [
    {
        question: 'Preciso saber programar para usar?',
        answer: 'Não! A automação vem pronta para importar. O guia PDF e os vídeos tutoriais mostram cada passo. É só seguir as instruções e configurar suas credenciais.',
    },
    {
        question: 'Em quanto tempo consigo configurar?',
        answer: 'O tempo médio de configuração é de 15 a 30 minutos, dependendo da complexidade. Os vídeos mostram cada etapa de forma clara e objetiva.',
    },
    {
        question: 'E se eu não conseguir fazer funcionar?',
        answer: 'Você tem acesso ao nosso grupo de suporte no Telegram por 30 dias. Nossa equipe e comunidade ajudam com qualquer dúvida de configuração.',
    },
    {
        question: 'A automação funciona com meu sistema atual?',
        answer: 'O n8n integra com mais de 400 aplicativos. Se você usa ferramentas populares (Google, Slack, WhatsApp, etc), provavelmente funciona. Se tiver dúvidas específicas, pergunte antes de comprar.',
    },
    {
        question: 'Posso modificar a automação?',
        answer: 'Sim! O workflow é seu para modificar como quiser. O n8n é visual e intuitivo, então mesmo customizações são fáceis de fazer.',
    },
];

interface ProductPageClientProps {
    product: Product;
    relatedProducts: Product[];
}

export default function ProductPageClient({ product, relatedProducts }: ProductPageClientProps) {
    const CategoryIcon = categoryIcons[product.category];

    return (
        <main className="min-h-screen pt-20">
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <Link
                    href="/produtos"
                    className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Voltar para automações
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden pb-12 lg:pb-20">
                <div className="absolute inset-0 bg-mesh" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left - Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Category & Badge */}
                            <div className="flex items-center gap-3 mb-4">
                                <Badge variant="outline" className="border-[#f97316]/30 text-[#f97316]">
                                    <CategoryIcon className="w-3 h-3 mr-1" />
                                    {categoryLabels[product.category]}
                                </Badge>
                                {product.badge && (
                                    <Badge className="bg-[#f97316] text-white border-none">
                                        {product.badge}
                                    </Badge>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                {product.name}
                            </h1>

                            {/* Short Description */}
                            <p className="text-xl text-muted-foreground mb-6">
                                {product.shortDescription}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-8">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-[#f97316] fill-[#f97316]" />
                                    ))}
                                </div>
                                <span className="text-muted-foreground">4.9/5 (127 avaliações)</span>
                            </div>

                            {/* Price Card */}
                            <Card className="bg-card border-[#f97316]/30 mb-8">
                                <CardContent className="p-6">
                                    <div className="flex items-baseline gap-3 mb-4">
                                        {product.originalPrice && (
                                            <span className="text-xl text-muted-foreground line-through">
                                                R$ {product.originalPrice}
                                            </span>
                                        )}
                                        <span className="text-4xl font-bold text-foreground">
                                            R$ {product.price}
                                        </span>
                                        <span className="text-muted-foreground">/ pagamento único</span>
                                    </div>

                                    {product.originalPrice && (
                                        <div className="inline-block bg-green-500/10 text-green-500 text-sm font-medium px-3 py-1 rounded-full mb-4">
                                            Economize R$ {product.originalPrice - product.price} (
                                            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF)
                                        </div>
                                    )}

                                    {/* CTA Button */}
                                    <Button
                                        size="lg"
                                        className="w-full bg-gradient-cta hover:opacity-90 text-white font-bold text-lg h-14 shadow-lg hover:shadow-glow transition-all"
                                        asChild
                                    >
                                        <a
                                            href={product.kiwifyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Comprar Agora
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </a>
                                    </Button>

                                    {/* Trust Badges */}
                                    <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-6 border-t border-border">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <ShieldCheck className="w-4 h-4 text-green-500" />
                                            <span>7 dias de garantia</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Download className="w-4 h-4 text-blue-500" />
                                            <span>Acesso imediato</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Headphones className="w-4 h-4 text-purple-500" />
                                            <span>Suporte incluso</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Payment Methods */}
                            <p className="text-center text-muted-foreground text-sm">
                                💳 PIX, Cartão de Crédito ou Boleto
                            </p>
                        </motion.div>

                        {/* Right - Video/Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {product.videoUrl ? (
                                <div className="aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-2xl">
                                    <iframe
                                        src={product.videoUrl}
                                        title={`Demo do ${product.name}`}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : (
                                <div className="aspect-video rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-cta/20 rounded-full flex items-center justify-center">
                                            <CategoryIcon className="w-10 h-10 text-[#f97316]" />
                                        </div>
                                        <p className="text-muted-foreground">Preview do produto</p>
                                    </div>
                                </div>
                            )}

                            {/* Quick Info */}
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                {[
                                    { icon: Clock, label: 'Setup', value: '15 min' },
                                    { icon: Package, label: 'Arquivos', value: '10+' },
                                    { icon: Headphones, label: 'Suporte', value: '30 dias' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-card border border-border rounded-xl p-4 text-center">
                                        <item.icon className="w-6 h-6 mx-auto mb-2 text-[#f97316]" />
                                        <div className="text-lg font-bold text-foreground">{item.value}</div>
                                        <div className="text-xs text-muted-foreground">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* What You Get */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Package className="w-6 h-6 text-[#f97316]" />
                                O que você recebe
                            </h2>
                            <div className="space-y-3">
                                {product.whatYouGet.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Star className="w-6 h-6 text-[#f97316]" />
                                Funcionalidades
                            </h2>
                            <div className="grid grid-cols-2 gap-3">
                                {product.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-1" />
                                        <span className="text-sm text-muted-foreground">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Long Description */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold mb-6">Sobre essa automação</h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                {product.longDescription.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="text-muted-foreground mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* For Who */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold">
                            Para quem é essa automação?
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {product.forWho.map((persona, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <Card className="h-full bg-card border-border text-center">
                                    <CardContent className="p-6">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-[#f97316]/10 rounded-full flex items-center justify-center">
                                            <Users className="w-8 h-8 text-[#f97316]" />
                                        </div>
                                        <p className="text-foreground font-medium">{persona}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-2xl lg:text-3xl font-bold">
                                Dúvidas frequentes
                            </h2>
                        </motion.div>

                        <Accordion type="single" collapsible className="space-y-4">
                            {productFaqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-[#f97316]/50 transition-colors"
                                >
                                    <AccordionTrigger className="text-left text-foreground hover:text-[#f97316] hover:no-underline py-5">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-5">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Sticky CTA */}
            <section className="py-16 bg-gradient-brand">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                            Pronto para automatizar?
                        </h2>
                        <p className="text-white/80 mb-8">
                            Acesso imediato. Garantia de 7 dias. Suporte incluído.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="bg-white text-[#1e3a8a] hover:bg-white/90 font-bold text-lg h-14 px-8"
                                asChild
                            >
                                <a
                                    href={product.kiwifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Comprar por R$ {product.price}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </Button>
                            <div className="flex items-center gap-2 text-white/80">
                                <ShieldCheck className="w-5 h-5" />
                                <span>Satisfação garantida ou seu dinheiro de volta</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-2xl lg:text-3xl font-bold">
                                Você também pode gostar
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {relatedProducts.map((product, index) => (
                                <ProductCard key={product.id} product={product} index={index} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
