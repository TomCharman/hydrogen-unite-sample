import { Suspense } from 'react';
import ProductDetails from '../../components/ProductDetails.server';
import Layout from '../../components/Layout.server';

export default function Example({ params }) {
  const { handle } = params;

  return (
    <Layout>
      <Suspense fallback="Loading...">
        <ProductDetails handle={handle} />
      </Suspense>
    </Layout>
  );
}

