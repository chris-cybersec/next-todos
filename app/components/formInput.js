"use client";

import styles from "@/app/styles/min/FormInput.module.css";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { addTodo } from "../actions";

const FormInput = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    // console.log(data)
    const { todo } = data;

    await addTodo(todo);
    reset();
    router.refresh();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.content}>
        <input
          {...register("todo", { required: true })}
          type="text"
          name="todo"
          placeholder="your Todos..."
          autoComplete="off"
        />
        <input type="submit" value="+" />
      </div>
      {errors.todo && (
        <div className={styles.error}>this field is required!!!</div>
      )}
    </form>
  );
};

export default FormInput;
