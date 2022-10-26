import { CacheNone, CacheShort, useQuery } from '@shopify/hydrogen';

const Availability = ({ sku }) => {
  const body = {
    Address: { Postcode: 3000 },
    LineItems: [{ SKU: `${sku}`, LineItemFreightPrice: 500, Quantity: 1 }],
    requiresScheduledOptions: true,
  };

  const { data: options, error } = useQuery(
    [sku],
    async () => {
      const response = await fetch(
        'https://djzrsfr0da2ke.cloudfront.net/FulfilmentPlan/API/FulfilmentOptions',
        {
          method: 'POST',
          body: JSON.stringify(body),
        }
      );
      const result = await response.json();
      return result.Delivery.Presentation;
    },
    {
      cache: CacheNone(),
    }
  );

  if (error) {
    return <div>Nothin have anything</div>;
  }

  console.log('options', options);

  return (
    <div>
      <ul>
        {options?.map((pres) => (
          <li key={pres.Id}>{pres.ExperienceName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Availability;
