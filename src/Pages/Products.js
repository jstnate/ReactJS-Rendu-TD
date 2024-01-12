import ProductList from "../Components/ProductList";
import { useGetProductsQuery } from "../Services/API";
import Header from "../Components/Header";

function Products() {
  let { data: products, isFetching } = useGetProductsQuery(); // Access the cart state

  return products ? (
    <main>
      <Header />
      <ProductList data={products} />
    </main>
  ) : null;
}

export default Products;
