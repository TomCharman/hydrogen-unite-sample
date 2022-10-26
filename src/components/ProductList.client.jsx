import { Link } from '@shopify/hydrogen';

export default function ProductList({ products }) {
  return (
    <div>
      {products.map((p) => (
        <div key={p.node.id}>
          <Link to={`/products/${p.node.handle}`}>{p.node.handle}</Link>
        </div>
      ))}
    </div>
  );
}
