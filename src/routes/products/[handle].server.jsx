import Layout from '../../components/Layout.server';
import { useShopQuery, gql } from '@shopify/hydrogen';
import { Suspense } from 'react';
import ProductDetails from '../../components/ProductDetails.client';
import QueryComponent from '../../components/QueryComponent.server';

export default function Example({ params }) {
  const { handle } = params;

  const { data } = useShopQuery({
    query: QUERY,
    variables: { handle },
  });

  return (
    <Layout>
      <Suspense fallback="Loading...">
        <QueryComponent sku="638289" />
      </Suspense>
      <ProductDetails product={data.product} />
    </Layout>
  );
}

const QUERY = gql`
  query product($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      vendor
      descriptionHtml
      media(first: 10) {
        nodes {
          ... on MediaImage {
            mediaContentType
            image {
              id
              url
              altText
              width
              height
            }
          }
        }
      }
      variants(first: 250) {
        nodes {
          id
          title
          availableForSale
          priceV2 {
            currencyCode
            amount
          }
          compareAtPriceV2 {
            currencyCode
            amount
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`;
