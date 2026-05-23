import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPageShell from "@/components/sections/product/ProductPageShell";
import { getProductPage, productPageSlugs } from "@/lib/product-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productPageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getProductPage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "website",
    },
  };
}

export default async function ProductLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getProductPage(slug);

  if (!page) {
    notFound();
  }

  return <ProductPageShell page={page} />;
}
