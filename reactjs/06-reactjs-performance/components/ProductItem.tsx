type Product = {
  id: number;
  price: number;
  title: string;
}

interface ProductItemProps {
  product: Product;
}


export function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}