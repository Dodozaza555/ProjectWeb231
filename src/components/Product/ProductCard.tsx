import type { InfoProduct } from "../../types/type_infoProduct";
import Image from "next/image";

type ProductCardProps = {
    product: InfoProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="productCard">
            <div className="productMedia">
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.Name}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="productImage"
                    />
                ) : (
                    <span className="imagePlaceholder">ไม่มีรูป</span>
                )}
            </div>
            <div className="productInfo">
                <p className="productPrice">฿{product.Price.toLocaleString("th-TH")}</p>
                <h2 className="productTitle">{product.Name}</h2>
                <p className="productMeta">{product.Category} · {product.Description}</p>
            </div>
        </article>
    );
}