import { useForm } from "react-hook-form";
import { Input } from "@core/components/input/Input";
import { Button } from "@/core/components";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@core/components"

import { useSignUpMutation } from "@api/services/authApi";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const signUpMutation = useSignUpMutation();

    const registerSubmitHandler = async (data: any) => {
        try {
            console.log(data);
            await signUpMutation.mutateAsync(data);

            console.log("User registered successfully");
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return (
        <form
            className="w-10/12 md:w-8/12 mx-auto"
            onSubmit={handleSubmit(registerSubmitHandler)}
        >
            <h1 className="text-3xl">Register into Swift Transit</h1>
            <div className="mb-4">
                <Input
                    label="Username"
                    type="text"
                    placeholder="Enter your username"
                    {...register("username", { required: "Username is required" })}
                />
                {errors.username && (
                    <p className="text-red-500">{errors.username.message as ReactNode}</p>
                )}
            </div>
            <div className="mb-4">
                <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                    <p className="text-red-500">{errors.email.message as ReactNode}</p>
                )}
            </div>

            <div className="mb-4">
                <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                    <p className="text-red-500">{errors.password.message as ReactNode}</p>
                )}
            </div>

            <div className="mb-4">
                <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm Password"
                    {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                    <p className="text-red-500">{errors.password.message as ReactNode}</p>
                )}
            </div>
            <Button type="submit" className="bg-slate-800 text-white">
                {signUpMutation.isLoading ? "Registering..." : "Register"}
            </Button>

            <div className="my-3">
                Or <Link to="/login">Login instead</Link>
            </div>
        </form>
    );
}

export default Register;