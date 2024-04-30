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
import { Link } from "react-router-dom";
import { DEFAULT_LOGIN_VALUES, LoginValues, loginSchema } from "./data";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { MoveLeft } from "lucide-react";

export default function Login() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: DEFAULT_LOGIN_VALUES,
  });

  function onSubmit(data: LoginValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
      <div className="flex flex-col p-4 min-h-screen">
        <Link to="/" className="hover:underline flex items-center gap-2">
          <MoveLeft />
          Retour à la page d'accueil
        </Link>
        <div className="flex-1 flex justify-center items-center py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mx-auto grid w-full max-w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">Connexion</h1>
                  <p className="text-balance text-muted-foreground">
                    Entrez votre email ci-dessous pour vous connecter à votre
                    compte
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
                        <FormLabel>Mot de passe</FormLabel>
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
                    Connexion
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Vous n&apos;avez pas de compte ?{" "}
                  <Link to="/signup" className="underline font-semibold">
                    Inscrivez-vous
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
