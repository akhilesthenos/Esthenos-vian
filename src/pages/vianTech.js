import React from "react";
import SEO from "../components/seo";
import HeadingSection from "../components/VianTechContainer/heading-section";
import ProductCarousel from "../components/VianTechContainer/product-carousel";
import Layout from "../layouts";

const vianTech = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="VIAN – TECH" />
                <div className="bg-white vt-background">
                    <HeadingSection />
                    <ProductCarousel />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default vianTech;
