import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useUserData } from "@/store";
import { useForm } from "react-hook-form";
import { ProfileValues, profileSchema } from "./data";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

const EditProfile = () => {
  const { fullName, email, phoneNumber } = useUserData();

  const form = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: {
      email: email,
      fullName: fullName,
      telephone: phoneNumber,
    },
  });

  function onSubmit(data: ProfileValues) {
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
    <div className="p-6 md:p-8 min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-60px)] flex justify-center items-center">
      <Card className={"h-fit w-fit"}>
        <CardHeader>
          <CardTitle>Modifier le Profil</CardTitle>
          <CardDescription>
            Utilisez ce formulaire pour mettre à jour vos informations
            personnelles.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-3">
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
                      Numéro de téléphone
                      <span
                        className={cn(
                          "text-muted-foreground ml-1",
                          form.getFieldState("telephone").error &&
                            "text-destructive/80"
                        )}
                      ></span>
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
            </CardContent>
            <CardFooter>
              <Button className="ml-auto" type="submit">
                Mettre à jour le profil
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default EditProfile;
