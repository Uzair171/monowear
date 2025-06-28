import Shop_data from "./../../shop-data.json";

console.log(Shop_data);
const Shop = () => {
  return (
    <div>
      {Shop_data.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

export default Shop;
