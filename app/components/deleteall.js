"use client";

import { useRouter } from "next/navigation";
import { deleteAll } from "../actions";

const DeleteAll = () => {
  const router = useRouter()
  const handler = async () => {
    await deleteAll();
    router.refresh()
  };

  return <div onClick={handler}>delete All</div>;
};

export default DeleteAll;
