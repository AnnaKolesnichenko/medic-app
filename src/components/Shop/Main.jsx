import { useEffect, useState } from "react";
import {
  getDrug24,
  getEDrug,
  getMedical,
  getPharmacy,
  getStayWell,
} from "../../services/api-services";
import ShopItems from "./ShopItems";
import Shops from "./Shops";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../store/cart-slice";

const Main = () => {
  const [items, setItems] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData("Medical");
  }, []);

  useEffect(() => {
    if (items) {
      addItemsToStore();
    }
  }, [items]);

  const fetchData = async (shopName) => {
    let data;

    switch (shopName) {
      case "Medical":
        data = await getMedical();

        break;
      case "Pharmacy":
        data = await getPharmacy();

        break;
      case "Drug24":
        data = await getDrug24();

        break;
      case "EDrug":
        data = await getEDrug();

        break;
      case "StayWell":
        data = await getStayWell();

        break;
      default:
        data = null;
        break;
    }
    setItems(data);
  };

  const addItemsToStore = () => {
    dispatch(addItems(items));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        padding: "20px 30px",
      }}
    >
      <Shops
        items={items}
        onButtonClick={fetchData}
        addItemsToStore={addItemsToStore}
      />
      <ShopItems items={items} />
    </div>
  );
};

export default Main;
