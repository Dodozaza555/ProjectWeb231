"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useProductCatalog } from "@/context/ProductCatalogContext";

type MyPostsModalProps = {
    onClose: () => void;
};

export default function MyPostsModal({ onClose }: MyPostsModalProps) {
    const { myPosts } = useProductCatalog();
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        function closeOnEscape(event: KeyboardEvent) {
            if (event.key === "Escape") onClose();
        }

        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, [onClose]);

    const searchText = keyword.trim().toLowerCase();
    const visiblePosts = myPosts.filter((product) =>
        [product.Name, product.Category, product.Description]
            .some((value) => value.toLowerCase().includes(searchText)),
    );

    return (
        <div
            className="myPostsBackdrop"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                className="myPostsDialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="myPostsTitle"
            >
                <div className="myPostsHeader">
                    <h2 id="myPostsTitle">โพสต์ของฉัน</h2>
                    <button className="myPostsClose" type="button" aria-label="ปิดหน้าต่าง" onClick={onClose}>
                        ×
                    </button>
                </div>

                <input
                    className="myPostsSearch"
                    type="search"
                    aria-label="ค้นหาโพสต์ของฉัน"
                    placeholder="ค้นหาชื่อสินค้า หมวดหมู่ หรือรายละเอียด"
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                />

                {myPosts.length === 0 ? (
                    <p className="myPostsEmpty">ยังไม่มีโพสต์ของคุณ</p>
                ) : visiblePosts.length === 0 ? (
                    <p className="myPostsEmpty">ไม่พบโพสต์ที่ค้นหา</p>
                ) : (
                    <div className="myPostsList">
                        {visiblePosts.map((product, index) => (
                            <article className="myPostItem" key={`${product.Name}-${index}`}>
                                {product.image ? (
                                    <div className="myPostImage">
                                        <Image src={product.image} alt={product.Name} fill sizes="5rem" />
                                    </div>
                                ) : (
                                    <div className="myPostImage myPostImagePlaceholder">ไม่มีรูป</div>
                                )}
                                <div className="myPostInfo">
                                    <h3>{product.Name}</h3>
                                    <p>{product.Category}</p>
                                    <strong>฿{product.Price.toLocaleString("th-TH")}</strong>
                                    <p>{product.Description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}