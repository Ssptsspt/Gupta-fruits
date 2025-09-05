cat > components/ProductCard.js <<'EOF'
import toast from 'react-hot-toast'

export default function ProductCard({ product }) {
  const addToCart = () => {
    // demo toast — in real app you'd add to cart state
    toast.success(product.name + " added to cart")
  }

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow transition transform hover:scale-105 overflow-hidden">
      <div className="relative h-40">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        {product.bulk && (
          <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">Bulk</span>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-heading text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">₹{product.price}/{product.unit}</p>
        <div className="mt-3">
          <button onClick={addToCart} className="w-full bg-yellowCTA rounded-lg py-2 font-semibold">Add to cart</button>
        </div>
      </div>
    </article>
  )
}
EOF
