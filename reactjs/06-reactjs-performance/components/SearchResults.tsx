import { ProductItem } from "./ProductItem"

type Product = {
  id: number;
  price: number;
  title: string;
  priceFormatted: string;
}

interface SearchResultsProps {
  results: Product[];
  totalPrice: number;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results, totalPrice, onAddToWishlist }: SearchResultsProps) {

  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map(product => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishlist={onAddToWishlist}
          />
        )
      })}
    </div>
  )
}