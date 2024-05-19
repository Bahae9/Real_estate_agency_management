import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { DEFAULT_SIGNUP_VALUES, SignupValues, signupSchema } from "./data";
import { useAuth } from "@/components/contexts/auth-context";

export default function Signup() {
  const navigate = useNavigate();
  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: DEFAULT_SIGNUP_VALUES,
  });
  const { token } = useAuth();
  if (token) {
    return <Navigate to={"/"} />;
  }
  function onSubmit(data: SignupValues) {
    fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(
              error.message || "Failed to sign up. Please try again later."
            );
          });
        }
        return response.json();
      })
      .then(() => {
        toast({
          description: "Sign up successful! You can now log in.",
          variant: "success",
        });
        navigate("/login");
      })
      .catch((e) => {
        toast({
          description: e.message,
          variant: "destructive",
        });
      });
  }
  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col p-4 min-h-screen">
        <Link to="/" className="hover:underline flex items-center gap-2">
          <MoveLeft />
          Back to home page
        </Link>
        <div className="flex-1 flex justify-center items-center py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mx-auto grid w-full max-w-[340px] gap-6">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">Sign Up</h1>
                  <p className="text-balance text-muted-foreground">
                    Enter your information to create an account and enjoy all
                    our services
                  </p>
                </div>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="off"
                            className={cn(
                              form.getFieldState("fullName").error &&
                                "border-destructive placeholder:text-destructive/60 text-destructive"
                            )}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telephone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Phone Number{" "}
                          <span
                            className={cn(
                              "text-muted-foreground ml-1",
                              form.getFieldState("telephone").error &&
                                "text-destructive/80"
                            )}
                          >
                            {`(Optional)`}
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="off"
                            className={cn(
                              form.getFieldState("telephone").error &&
                                "border-destructive placeholder:text-destructive/60 text-destructive"
                            )}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="off"
                            className={cn(
                              form.getFieldState("email").error &&
                                "border-destructive placeholder:text-destructive/60 text-destructive"
                            )}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            className={cn(
                              form.getFieldState("password").error &&
                                "border-destructive placeholder:text-destructive/60 text-destructive"
                            )}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Sign Up
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="underline font-semibold">
                    Log In
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block h-screen">
        <img
          src="/backgrounds/login.jpg"
          alt="Image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
