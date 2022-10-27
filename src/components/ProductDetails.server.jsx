import { useShopQuery, gql } from '@shopify/hydrogen';
import { Suspense } from 'react';
import ProductDetailsClient from './ProductDetails.client';
import QueryComponent from './QueryComponent.server';

export default function ProductDetails({ handle }) {
  const { data } = useShopQuery({
    query: QUERY,
    variables: { handle },
  });

  return (
    <>
      <Suspense fallback="Loading...">
        <QueryComponent sku="638289" />
      </Suspense>
      <ProductDetailsClient product={data.product} />
    </>
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
