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
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useUserData } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { RatesProps, ReviewProps } from "..";
import {
  DEFAULT_FEEDBACK_VALUES,
  FeedbackValues,
  feedbackSchema,
} from "../../data";
import Rating from "./rating";
import { toast } from "@/components/ui/use-toast";

export default function ReviewCard({
  className,
  currentFeedback,
  setUserReviews,
  setRates,
  max,
  setIsOpen,
}: {
  className?: string;
  currentFeedback?: ReviewProps;
  setUserReviews: React.Dispatch<React.SetStateAction<ReviewProps[] | null>>;
  setRates?: React.Dispatch<React.SetStateAction<RatesProps[] | null>>;
  max?: number;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { userId, fullName, email } = useUserData();
  const defaultValues = useMemo(
    () =>
      currentFeedback
        ? {
            feedback: currentFeedback.feedback,
            rate: currentFeedback.rate,
            email,
            fullName,
          }
        : {
            ...DEFAULT_FEEDBACK_VALUES,
            email: email || "",
            fullName: fullName || "",
          },
    [currentFeedback, email, fullName]
  );

  const form = useForm<FeedbackValues>({
    resolver: zodResolver(feedbackSchema),
    mode: "onBlur",
    defaultValues: defaultValues,
  });

  function onSubmit(data: FeedbackValues) {
    if (
      (fullName && data.fullName !== fullName) ||
      (email && data.email !== email)
    ) {
      return toast({
        description:
          "le nom ou l'email ne correspondent pas à ceux de votre compte, veuillez ne pas les modifier.",
        variant: "destructive",
      });
    }
    if (currentFeedback) {
      setUserReviews((prev) =>
        prev
          ? prev.map((el) =>
              el.id === currentFeedback.id
                ? {
                    ...currentFeedback,
                    rate: data.rate,
                    feedback: data.feedback,
                  }
                : el
            )
          : null
      );
      toast({
        description: "Votre retour a été modifié avec succès, merci !",
        variant: "success",
      });
      if (setIsOpen) {
        setIsOpen(false);
      }
    } else {
      const feedbackId = Math.floor(Math.random() * 10000) + 1;
      const newFeedback = {
        ...data,
        id: feedbackId,
        userId: userId,
        date: format(new Date(), "yyyy-MM-dd"),
      };

      setUserReviews((prev) =>
        prev && max
          ? [newFeedback, ...prev].slice(0, max)
          : prev
          ? [newFeedback, ...prev]
          : [newFeedback]
      );
      if (setRates) {
        setRates((prev) =>
          prev
            ? [...prev, { rate: data.rate, id: feedbackId }]
            : [{ rate: data.rate, id: feedbackId }]
        );
      }
      form.resetField("feedback");
      form.resetField("rate");
      toast({
        description: "Votre retour a été soumis avec succès, merci !",
        variant: "success",
      });
    }
  }

  return (
    <Card className={cn("h-fit", className)}>
      <CardHeader>
        <CardTitle>Retour d'information</CardTitle>
        <CardDescription>
          Vos commentaires nous intéressent ! Veuillez remplir le formulaire
          ci-dessous.
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
                      disabled={!!defaultValues?.fullName}
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
                      disabled={!!defaultValues?.email}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid md:grid-cols-[1fr_300px] gap-4">
              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem className="h-full">
                    <FormLabel>Retour d'information</FormLabel>
                    <FormControl>
                      <Textarea
                        autoComplete="off"
                        className={cn(
                          "h-[160px] md:h-[260px]",
                          form.getFieldState("feedback").error &&
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
                name="rate"
                render={({ field }) => (
                  <FormItem className="h-full">
                    <FormLabel>La note</FormLabel>
                    <FormControl>
                      <Rating rate={field.value} setRate={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto" type="submit">
              Envoyer le retour d'information
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
