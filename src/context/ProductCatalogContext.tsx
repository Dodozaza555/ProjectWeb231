"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { infoproduct } from "@/Data/infoproduct";
import type { InfoProduct } from "@/types/type_infoProduct";

type ProductCatalogContextValue = {
    products: InfoProduct[];
    myPosts: InfoProduct[];
    addProduct: (product: InfoProduct) => void;
};

const ProductCatalogContext = createContext<ProductCatalogContextValue | null>(null);

export function ProductCatalogProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState(infoproduct);
    const [myPosts, setMyPosts] = useState<InfoProduct[]>([]);

    function addProduct(product: InfoProduct) {
        setProducts((currentProducts) => [product, ...currentProducts]);
        setMyPosts((currentPosts) => [product, ...currentPosts]);
    }

    return (
        <ProductCatalogContext.Provider value={{ products, myPosts, addProduct }}>
            {children}
        </ProductCatalogContext.Provider>
    );
}

export function useProductCatalog() {
    const context = useContext(ProductCatalogContext);
    if (!context) throw new Error("useProductCatalog must be used inside ProductCatalogProvider");
    return context;
}