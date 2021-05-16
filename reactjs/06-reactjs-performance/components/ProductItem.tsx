import { memo, useState } from "react"

import { AddProductToWishlist } from "./AddProductToWishlist"

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
  return Object.is(prevProps.product, nextProps.product)
})