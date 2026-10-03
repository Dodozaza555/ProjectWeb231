import ProductCard from "@/components/Product/ProductCard";
import { infoproduct } from "@/Data/infoproduct";

export default function Store() {
  return (
    <main className="shopPage">
      <section className="productGrid" aria-label="รายการสินค้า">
        {infoproduct.map((product, index) => (
          <ProductCard key={`${product.Name}-${index}`} product={product} />
        ))}
      </section>
    </main>
  );
}
