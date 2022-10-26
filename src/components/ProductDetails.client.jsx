import {
  ProductOptionsProvider,
  MediaFile,
  useProductOptions,
  BuyNowButton,
  Money,
} from '@shopify/hydrogen';
import ProductOptions from './ProductOptions.client';

export default function ProductDetails({ product }) {
  const { title, vendor, media, descriptionHtml } = product;

  return (
    <ProductOptionsProvider data={product}>
      <section className="w-full grid px-6 md:px-8 lg:px-12 px-0">
        <div className="grid md:gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-screen md:w-full lg:col-span-2 md:grid-flow-row md:p-0 md:overflow-x-auto md:grid-cols-2">
            <div className="md:col-span-2 bg-white md:w-full">
              <MediaFile
                data={media.nodes[0]}
                className="w-full h-full aspect-square"
              />
            </div>
          </div>
          <div className="p-6">
            <h1 className="text-4xl max-w-prose font-bold mb-2">{title}</h1>
            <span className="opacity-50">{vendor}</span>
            <div
              className="prose mb-4"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
            <ProductForm />
          </div>
        </div>
      </section>
    </ProductOptionsProvider>
  );
}

function ProductForm() {
  const { selectedVariant } = useProductOptions();
  return (
    <form>
      <ProductOptions />
      <BuyNowButton variantId={selectedVariant.id}>
        <span className="bg-black text-white inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none w-full border">
          BUY IT NOW &middot;{' '}
          <Money
            withoutTrailingZeros
            data={selectedVariant.priceV2}
            as="span"
          />
        </span>
      </BuyNowButton>
    </form>
  );
}
