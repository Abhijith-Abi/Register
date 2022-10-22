import React from "react";
import { useForm } from "react-hook-form";
import "../../App.css";

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <p className="title">Registration Form</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    {...register("first_name")}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    {...register("last_name")}
                    placeholder="Last Name"
                />
                <input
                    type="number"
                    {...register("phone")}
                    placeholder="Phone number"
                />
                <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                />
                {errors.email && (
                    <span style={{ color: "red" }}>*Email* is mandatory </span>
                )}
                <input
                    type="text"
                    {...register("education")}
                    placeholder="Education Detials"
                />
                <input
                    type="text"
                    {...register("adress")}
                    placeholder="Address"
                />
                <input type="date" {...register("adress")} placeholder="Date" />

                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
}
export default Form;
