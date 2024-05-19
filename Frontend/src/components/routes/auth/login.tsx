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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate, useRevalidator } from "react-router-dom";
import { DEFAULT_LOGIN_VALUES, LoginValues, loginSchema } from "./data";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { MoveLeft } from "lucide-react";
import { useAuth } from "@/components/contexts/auth-context";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: DEFAULT_LOGIN_VALUES,
  });
  const navigate = useNavigate();
  const revalidator = useRevalidator();
  const { saveToken, token } = useAuth();
  if (token) {
    return <Navigate to={"/"} />;
  }
  async function onSubmit(data: LoginValues) {
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          error.message ||
            error.detail ||
            "Failed to sign in. Please try again later."
        );
      }
      const responseData = await response.json();
      saveToken(responseData.token);
      const decoded = jwtDecode(responseData.token) as { roles: string };
      if (decoded?.roles === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/");
      }
      revalidator.revalidate();
    } catch (error: any) {
      toast({
        description: error.message,
        variant: "destructive",
      });
    }
  }
  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col p-4 min-h-screen">
        <Link to="/" className="hover:underline flex items-center gap-2">
          <MoveLeft />
          Back to homepage
        </Link>
        <div className="flex-1 flex justify-center items-center py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mx-auto grid w-full max-w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">Login</h1>
                  <p className="text-balance text-muted-foreground">
                    Enter your email below to log in to your account
                  </p>
                </div>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="name@company.com"
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
                            placeholder="••••••••"
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
                    Login
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don't have an account?{" "}
                  <Link to="/signup" className="underline font-semibold">
                    Sign up
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
