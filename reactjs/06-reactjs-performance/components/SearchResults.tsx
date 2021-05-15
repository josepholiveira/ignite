import { ProductItem } from "./ProductItem"

type Product = {
  id: number;
  price: number;
  title: string;
}

interface SearchResultsProps {
  results: Product[];
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map(product => {
        return (
          <ProductItem product={product} />
        )
      })}
    </div>
  )
}