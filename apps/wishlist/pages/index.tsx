import Head from 'next/head';
import Product from '../components/Product';

import fetch from 'isomorphic-unfetch';

const Index = ({ products }) => (
  <div>
    <Head>
      <title>My Wishlist</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">My Wishlist</h1>

      <Product products={products} />
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        font-size: 14px;
        font-family: Trueno, Helvetica, Arial, sans-serif;
        font-weight: 100;
        line-height: 1.4;
        -webkit-font-smoothing: antialiased;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);

Index.getInitialProps = async () => {
  const response = await fetch('http://localhost:3333/api/products');
  const products = await response.json();

  return { products };
};

export default Index;
