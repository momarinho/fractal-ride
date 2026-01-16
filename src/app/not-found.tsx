import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center pt-20 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto text-center">
                    {/* 404 Visual */}
                    <div className="relative mb-8">
                        <div className="text-[150px] sm:text-[200px] font-bold text-muted/30 leading-none select-none">
                            404
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-gradient-cta rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                <span className="text-4xl">🤔</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                        Página não encontrada
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8">
                        Ops! Parece que essa página não existe ou foi movida.
                        Mas não se preocupe, temos muitos protocolos DOE incríveis te esperando!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            className="bg-gradient-cta hover:opacity-90 text-white font-semibold"
                            asChild
                        >
                            <Link href="/">
                                <Home className="w-4 h-4 mr-2" />
                                Voltar ao início
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            className="border-border hover:border-[#f97316] hover:text-[#f97316]"
                            asChild
                        >
                            <Link href="/produtos">
                                <Search className="w-4 h-4 mr-2" />
                                Ver protocolos DOE
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
