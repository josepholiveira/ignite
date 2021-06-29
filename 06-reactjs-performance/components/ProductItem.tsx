import { memo, useState } from "react"
import { AddProductToWishlistProps } from "./AddProductToWishlist"
import dynamic from 'next/dynamic'
import { isEqual } from "lodash"

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist)
}, {
  loading: () => <span>Carregando...</span>
})

type Product = {
  id: number;
  price: number;
  title: string;
  priceFormatted: string;
}

interface ProductItemProps {
  product: Product;
  onAddToWishlist: (id: number) => void;
}


function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar à wishlist</button>
      { isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => {onAddToWishlist(product.id)}}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return isEqual(prevProps.product, nextProps.product)
})