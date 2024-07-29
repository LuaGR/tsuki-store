import '../styles/Products.css'
import { useFilterStore } from '@/stores/useFilterStore'
import { ProductsItems } from './products/ProductsItems'
import { type Product } from '@/types/product'
import { SkeletonCard } from './products/SkeletonCard'
import { useState, useEffect } from 'react'

export function Products() {
  const filteredProducts = useFilterStore((state) => state.filteredProducts())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (filteredProducts.length > 0 && loading) {
      setLoading(false)
    }
  }, [filteredProducts, loading])

  if (loading) {
    return (
      <div className='flex w-full items-center justify-center'>
        <ul className='grid w-full gap-8'>
          {[...Array(8)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </ul>
      </div>
    )
  }

  if (!filteredProducts.length) {
    return (
      <div className='flex justify-center'>No se encontraron resultados</div>
    )
  }

  return (
    <div className='flex w-full items-center justify-center'>
      <ul className='grid w-full gap-8'>
        {filteredProducts?.slice(0, 16).map((product: Product) => (
          <ProductsItems
            key={product.id}
            product={product}
            {...product}
          />
        ))}
      </ul>
    </div>
  )
}
