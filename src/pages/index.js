import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CardsWrapper from "../components/CardsWrapper";

const cards = [
  {
    title: "Almoço",
    link: "/",
  },
  {
    title: "Sobremesa",
    link: "/",
  },
  {
    title: "Lanche",
    link: "/",
  },
  {
    title: "Bebida",
    link: "/",
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CardsWrapper cards={cards} />
  </Layout>
);

export default IndexPage;
