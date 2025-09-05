cat > pages/index.js <<'EOF'
import Head from 'next/head'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import products from '@/data/products.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gupta Fruits & Vegetables</title>
      </Head>

      <div className="min-h-screen">
        <Header />
        <main className="max-w-6xl mx-auto p-4 app-shell rounded-2xl mt-6 shadow-lg">
          <h1 className="text-3xl font-heading text-primary text-center mb-6">
            Gupta Fruits & Vegetables
          </h1>

          <section>
            <h2 className="text-xl font-semibold mb-4">Popular Items</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
EOF
