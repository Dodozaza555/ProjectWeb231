"use client";

import { useState, type ChangeEvent } from "react";
import type { CategoryFilterValue } from "../../types/type_infoProduct";
import CategoryFilter from "../filter/CategoryFilter";
import ProductCard from "../Product/ProductCard";
import { useProductCatalog } from "@/context/ProductCatalogContext";


export default function ProductExplorer() {
    const { products } = useProductCatalog();
    // ช่องค้นหาสินค้าและแสดงรายการสินค้า
    const [keyword, setKeyword] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<CategoryFilterValue>("");
    function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
        setKeyword(event.target.value);
    }
    const searchText = keyword.trim().toLowerCase();
    const visibleCourses = products.filter((product) => {
        const matchesKeyword =
            product.Name.toLowerCase().includes(searchText) ||
            product.Category.toLowerCase().includes(searchText);
        const matchesCategory = !selectedCategory || product.Category === selectedCategory;

        return matchesKeyword && matchesCategory;
    });



    return (
        <div>
            <div className="searchControls">
                <input
                    className="searchInput"
                    type="search"
                    aria-label="ค้นหาสินค้า"
                    value={keyword}
                    onChange={handleKeywordChange}
                    placeholder="ค้นหาชื่อสินค้าหรือหมวดหมู่สินค้า"
                />
                <CategoryFilter
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                />
            </div>
            {visibleCourses.length === 0 ? (
                <p>ไม่พบสินค้า</p>
            ) : (
                <section className="productGrid" aria-label="ผลการค้นหาสินค้า">
                    {visibleCourses.map((product) => (
                        <ProductCard key={`${product.Name}-${product.Name}`} product={product} />
                    ))}
                </section>
            )}
        </div>


    );
}

