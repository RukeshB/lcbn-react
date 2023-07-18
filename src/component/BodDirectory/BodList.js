import axios from "axios";
import { useEffect, useState } from "react";
import Bod from "./Bod";

const BodList = () => {
    const [bods, setBods] = useState([])

    useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://sheet.best/api/sheets/9a29fb5c-8f3c-428b-a864-24fe269537f8")
      .then((response) => {
        setBods(response.data)
      });
  };

  const display = bods.map((bod, key) => {
    return (
        <Bod
        key={key}
        image_url={bod.image_url}
        name={bod.name}
        position={bod.position}
        ly="2023/24"
        email={bod.email}
      />
    );
  }
  )

  return (
    <div>
      <div className="mt-4 md:mt-6">
        <p className="text-lg font-semibold md:text-xl">Board Of Directors</p>
        <p className="text-sm text-gray-500 md:text-base">For LY 2023/24</p>
      </div>
      <div className="flex flex-wrap ">
        {display}
      </div>
    </div>
  );
};

export default BodList;
