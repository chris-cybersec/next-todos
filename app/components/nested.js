"use client";

import { useRouter } from "next/navigation";
import { deleteOne } from "../actions";

const Nested = ({ id }) => {
  const router = useRouter();
  const handler = async(id) => {
    // console.log(id);
    
    await deleteOne(id)
    router.refresh();
    router.push("deleted")
  };

  return <input type="checkbox" onClick={() => handler(id)} />;
};

export default Nested;
