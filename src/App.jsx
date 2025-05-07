import { Wrap,WrapItem,Button, Spinner, Text } from "@chakra-ui/react";
import SidebarWithHeader from "./components/shared/SideBar";
import { useEffect, useState } from "react";
import { getAllProducts } from "./services/client";
import CardWithImage from "./components/Card";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllProducts()
      .then(res => {
        // Access the products from res.data.content (not just res.data)
        setProducts(res.data.content || []);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <SidebarWithHeader>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </SidebarWithHeader>
    );
  }

  if (products.length <= 0) {
    return (
      <SidebarWithHeader>
        <Text>No products available</Text>
      </SidebarWithHeader>
    );
  }

  return (
    <SidebarWithHeader>
    <Wrap justify={"center"} spacing={"30px"}>
  {products.map((product, index) => (
    <WrapItem key={product.id || index}>
      <CardWithImage {...product} />
    </WrapItem>
    ))}
  </Wrap>
    </SidebarWithHeader>
  );
};

export default App;