import { memo } from "react"

type Product = {
  id: number;
  price: number;
  title: string;
}

interface ProductItemProps {
  product: Product;
}


function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})