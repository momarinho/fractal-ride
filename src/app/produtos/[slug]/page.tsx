import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, getProductBySlug, getRelatedProducts } from '@/lib/products';
import ProductPageClient from './ProductPageClient';

// Generate static paths for all products
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        return {
            title: 'Produto não encontrado | Automatize',
        };
    }

    return {
        title: `${product.name} | Automatize`,
        description: product.shortDescription,
        openGraph: {
            title: `${product.name} | Automatize`,
            description: product.shortDescription,
            images: [product.thumbnail],
            type: 'website',
        },
    };
}

export default async function ProductPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = getRelatedProducts(slug, 3);

    return <ProductPageClient product={product} relatedProducts={relatedProducts} />;
}
