import { memo } from "react"

type Product = {
  id: number;
  price: number;
  title: string;
}

interface ProductItemProps {
  product: Product;
  onAddToWishlist: (id: number) => void;
}


function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => onAddToWishlist(product.id)}>Add to wishlist</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})