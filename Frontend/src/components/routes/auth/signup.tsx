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
import { Link } from "react-router-dom";
import { DEFAULT_SIGNUP_VALUES, SignupValues, signupSchema } from "./data";

export default function Signup() {
  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
    defaultValues: DEFAULT_SIGNUP_VALUES,
  });

  function onSubmit(data: SignupValues) {
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
          Back to home Page
        </Link>
        <div className="flex-1 flex justify-center items-center py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mx-auto grid w-full max-w-[340px] gap-6">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">S'inscrire</h1>
                  <p className="text-balance text-muted-foreground">
                    Entrez vos informations pour créer un compte et profiter de
                    tous nos services
                  </p>
                </div>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom Complet</FormLabel>
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
                          Numéro de téléphone{" "}
                          <span
                            className={cn(
                              "text-muted-foreground ml-1",
                              form.getFieldState("telephone").error &&
                                "text-destructive/80"
                            )}
                          >
                            {`(Non requis)`}
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
                        <FormLabel>Mot de passe</FormLabel>
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
                    S'inscrire
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Vous avez déjà un compte ?{" "}
                  <Link to="/login" className="underline font-semibold">
                    Connexion
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
