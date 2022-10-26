import { gql, useShopQuery } from '@shopify/hydrogen';
import ProductList from '../components/ProductList.client';

export default function Home() {
  const { data } = useShopQuery({
    query: QUERY,
  });

  console.log('data', data.products.edges[0]);

  return (
    <div>
      <ProductList products={data.products.edges} />
    </div>
  );
}

const QUERY = gql`
  query Products {
    products(first: 6){
      edges {
        node {
          id
          handle
        }
      }
    }
  }
`;
