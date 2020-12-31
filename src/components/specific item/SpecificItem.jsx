import React from "react";

import { useParams } from "react-router-dom";

const SpecificItem = () => {
  const { id } = useParams();
  console.log(id);
  return <div className="mt-5">specific item</div>;
};

export default SpecificItem;
