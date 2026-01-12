'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    LayoutGrid,
    Users,
    TrendingUp,
    Megaphone,
    Calculator,
    Settings,
    SlidersHorizontal
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/products';
import Fuse from 'fuse.js';

const categoryIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    todos: LayoutGrid,
    rh: Users,
    vendas: TrendingUp,
    marketing: Megaphone,
    financeiro: Calculator,
    operacional: Settings,
};

export default function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('todos');

    // Fuse.js for fuzzy search
    const fuse = useMemo(() => new Fuse(products, {
        keys: ['name', 'shortDescription', 'features', 'category'],
        threshold: 0.4,
    }), []);

    // Filter products based on search and category
    const filteredProducts = useMemo(() => {
        let result = products;

        // Apply search
        if (searchQuery.trim()) {
            const searchResults = fuse.search(searchQuery);
            result = searchResults.map(r => r.item);
        }

        // Apply category filter
        if (selectedCategory !== 'todos') {
            result = result.filter(p => p.category === selectedCategory);
        }

        return result;
    }, [searchQuery, selectedCategory, fuse]);

    return (
        <main className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-12 lg:py-16">
                <div className="absolute inset-0 bg-mesh" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            Todas as <span className="text-gradient-orange">Automações</span>
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8">
                            Encontre a automação perfeita para o seu negócio. Cada uma vem com guias, vídeos e suporte.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Buscar automações..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 h-14 text-lg bg-card border-border focus:border-[#f97316] rounded-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filters & Products */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">Filtrar por categoria:</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => {
                            const Icon = categoryIcons[category.id];
                            const isSelected = selectedCategory === category.id;

                            return (
                                <Button
                                    key={category.id}
                                    variant={isSelected ? 'default' : 'outline'}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`
                    ${isSelected
                                            ? 'bg-gradient-cta hover:opacity-90 text-white border-none'
                                            : 'border-border hover:border-[#f97316] hover:text-[#f97316]'
                                        }
                  `}
                                >
                                    <Icon className="w-4 h-4 mr-2" />
                                    {category.name}
                                </Button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Results Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center justify-between mb-6"
                >
                    <p className="text-muted-foreground">
                        {filteredProducts.length} {filteredProducts.length === 1 ? 'automação encontrada' : 'automações encontradas'}
                    </p>

                    {(searchQuery || selectedCategory !== 'todos') && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('todos');
                            }}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Limpar filtros
                        </Button>
                    )}
                </motion.div>

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-16"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                            <Search className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Nenhuma automação encontrada</h3>
                        <p className="text-muted-foreground mb-6">
                            Tente ajustar os filtros ou buscar por outros termos.
                        </p>
                        <Button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('todos');
                            }}
                            className="bg-gradient-cta hover:opacity-90 text-white"
                        >
                            Ver todas as automações
                        </Button>
                    </motion.div>
                )}

                {/* Custom Automation CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 bg-gradient-to-r from-card to-muted border border-border rounded-2xl p-8 lg:p-12"
                >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <Badge className="bg-[#f97316]/10 text-[#f97316] border-[#f97316]/30 mb-4">
                                Sob Medida
                            </Badge>
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                                Precisa de algo <span className="text-gradient-orange">personalizado</span>?
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Se você não encontrou exatamente o que precisa, podemos criar uma automação
                                exclusiva para o seu negócio. Conte-nos sua necessidade!
                            </p>
                            <Button
                                className="bg-gradient-cta hover:opacity-90 text-white font-semibold"
                                asChild
                            >
                                <a href="mailto:contato@automatize.com.br?subject=Automação Personalizada">
                                    Solicitar Orçamento
                                </a>
                            </Button>
                        </div>
                        <div className="hidden lg:flex justify-center">
                            <div className="relative">
                                <div className="w-48 h-48 bg-gradient-cta/20 rounded-full flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gradient-cta/30 rounded-full flex items-center justify-center">
                                        <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center text-3xl shadow-lg animate-pulse">
                                            🛠️
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
