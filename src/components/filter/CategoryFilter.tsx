import { PRODUCT_CATEGORIES, type CategoryFilterProps, type CategoryFilterValue } from "@/types/type_infoProduct";

export default function CategoryFilter({ value, onChange }: CategoryFilterProps) {
    return (
        <select
            className="categoryFilter"
            aria-label="กรองสินค้าตามหมวดหมู่"
            value={value}
            onChange={(event) => onChange(event.target.value as CategoryFilterValue)}
        >
            <option value="">ทุกหมวดหมู่</option>
            {PRODUCT_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
}