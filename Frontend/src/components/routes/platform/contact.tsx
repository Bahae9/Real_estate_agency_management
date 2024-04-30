import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { ContactValues, DEFAULT_CONTACT_VALUES, contactSchema } from "./data";

export default function Contact() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: DEFAULT_CONTACT_VALUES,
  });

  function onSubmit(data: ContactValues) {
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
    <Card className="w-full overflow-hidden p-0">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="p-10 xl:p-12 bg-center xl:col-span-2 text-background bg-stone-900">
          <div className="h-full flex flex-col gap-12 lg:gap-8 justify-between">
            <div className="space-y-1.5">
              <h2 className="text-3xl font-bold">Contactez-nous</h2>
              <p className="opacity-95 font-normal">
                Nous vous répondrons dès que possible.
              </p>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:gap-16 lg:gap-12 xl:gap-20 2xl:gap-28">
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center space-x-2">
                  <Mail size={22} />
                  <div className="font-meduim text-lg">Email</div>
                </div>
                <div className="opacity-95 font-normal">
                  djaidri.chouaib.24@gmail.com
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center space-x-2">
                  <Phone size={22} />
                  <div className="font-meduim text-lg">Appelez-nous</div>
                </div>
                <div className="opacity-95 font-normal">+213 779354842</div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center space-x-2">
                  <MapPin size={22} />
                  <div className="font-meduim text-lg">Adresse</div>
                </div>
                <div className="opacity-95 font-normal">Algérie, Setif</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full p-2 bg-background"></div>
              <div className="rounded-full p-2 bg-background"></div>
              <div className="rounded-full p-2 bg-background"></div>
              <div className="rounded-full p-2 bg-background"></div>
            </div>
          </div>
        </div>
        <div className="py-4 xl:px-2 xl:pb-0 xl:pt-2 rounded-r-lg">
          <CardHeader>
            <CardTitle>Envoyez-nous un message</CardTitle>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
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
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
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
                </div>
                <FormField
                  control={form.control}
                  name="messagge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          autoComplete="off"
                          className={cn(
                            "min-h-[88px]",
                            form.getFieldState("messagge").error &&
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
                  Envoyer le message
                </Button>
              </CardFooter>
            </form>
          </Form>
        </div>
        <div className="relative w-full min-h-[296px] h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102286.38396965284!2d3.054152350488443!3d36.7597827735983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad6795639515%3A0x4ba4b4c9d0a7e602!2sAlger!5e0!3m2!1sfr!2sdz!4v1714510128784!5m2!1sfr!2sdz"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </Card>
  );
}
