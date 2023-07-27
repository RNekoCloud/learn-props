import { ProductItems } from "./ProductItem";

export const UseItems = () => {
   return (
      <div>
         <ProductItems name='Siomay' price={10000} />
         <ProductItems name='Nasi Goreng' price={12000} />
      </div>
   );
};
