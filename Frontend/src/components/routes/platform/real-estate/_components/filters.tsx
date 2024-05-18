import Ranger from "@/components/shared/ranger";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { CATEGORIES } from "@/data/db";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import {
  DEFAULT_SEARCH_VALUES,
  MAX_PRICE,
  MIN_PRICE,
  SearchValues,
  searchSchema,
  type SelectSearchSchemaKeys,
} from "../data";

const Filters = ({
  className,
  cardClassName,
}: {
  className?: string;
  cardClassName?: string;
}) => {
  const form = useForm<SearchValues>({
    resolver: zodResolver(searchSchema),
    mode: "all",
    defaultValues: DEFAULT_SEARCH_VALUES,
  });

  const onSelectChange = (field: SelectSearchSchemaKeys, num: number) => {
    form.setValue(field, num);
    form.watch(field, num);
  };

  function onSubmit(data: SearchValues) {
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
    <FormProvider {...form}>
      <form
        className={cn("w-full flex flex-col gap-4", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Card className={cn("w-full", cardClassName)}>
          <CardHeader>
            <CardTitle>Trouvez instantanément!</CardTitle>
            <CardDescription>
              Saisissez le titre de votre bien et trouvez-le en un instant.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="search"
                render={({ field }) => (
                  <FormItem className="relative flex-1">
                    <FormControl className="relative z-20">
                      <Input
                        type="search"
                        placeholder="Saisissez le titre..."
                        className={cn(
                          "w-full appearance-none bg-transparent pl-8 shadow-none",
                          form.getFieldState("search").error &&
                            "border-destructive placeholder:text-destructive/60 text-destructive"
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <Search className="absolute left-2.5 top-[3px] h-4 w-4 text-muted-foreground" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trier Par Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger
                          className={cn(
                            "w-full mt-2",
                            form.getFieldState("type").error &&
                              "border-destructive placeholder:text-destructive/60 text-destructive"
                          )}
                        >
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tous</SelectItem>
                          <SelectItem value="vente">Vente</SelectItem>
                          <SelectItem value="location">Location</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <h4 className="text-lg font-semibold mt-2">Recherche par Prix</h4>
              <Ranger
                setMaxValue={(num: number) => {
                  onSelectChange("priceRange.1", num);
                }}
                setMinValue={(num: number) => {
                  onSelectChange("priceRange.0", num);
                }}
                minValue={"priceRange.0"}
                maxValue={"priceRange.1"}
                min={MIN_PRICE}
                max={MAX_PRICE}
                stepBy={1000}
              />
              <FormField
                control={form.control}
                name="sortPriceBy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trier Par</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(e) => {
                          field.onChange(e);
                        }}
                        defaultValue={field.value}
                      >
                        <SelectTrigger
                          className={cn(
                            "w-full mt-2",
                            form.getFieldState("sortPriceBy").error &&
                              "border-destructive placeholder:text-destructive/60 text-destructive"
                          )}
                        >
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="random">Aléatoire</SelectItem>
                          <SelectItem value="low-to-high">
                            Prix: Du Plus Bas au Plus Haut
                          </SelectItem>
                          <SelectItem value="high-to-low">
                            Prix: Du Plus Haut au Plus Bas
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="priceRange"
                render={({ field }) => {
                  const ITEMS = [
                    { value: "0-5000000", label: "Tous" },
                    { value: "0-500000", label: "-500000DA" },
                    { value: "500000-1000000", label: "500000DA - 1000000DA" },
                    {
                      value: "1000000-3000000",
                      label: "1000000DA - 3000000DA",
                    },
                    { value: "3000000-5000000", label: "+3000000DA" },
                  ];
                  return (
                    <FormItem>
                      <Label>Plage de Prix</Label>
                      <FormControl>
                        <Select
                          onValueChange={(e) => {
                            field.onChange(e.split("-").map((el) => +el));
                            onSelectChange(
                              "priceRange.0",
                              e === "all" ? 0 : +e.split("-")[0]
                            );
                            onSelectChange(
                              "priceRange.1",
                              e === "all" ? 0 : +e.split("-")[1]
                            );
                          }}
                        >
                          <SelectTrigger
                            className={cn(
                              "w-full mt-2",
                              form.getFieldState("sortPriceBy").error &&
                                "border-destructive placeholder:text-destructive/60 text-destructive"
                            )}
                            onBlur={() => field.onBlur()}
                          >
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            {ITEMS.map(({ label, value }) => (
                              <SelectItem key={value} value={value}>
                                {label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <h4 className="text-lg font-semibold mt-2">
                Filtrer par Taille m²
              </h4>
              <FormField
                control={form.control}
                name="sortSizeBy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trier Par</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(e) => {
                          field.onChange(e);
                        }}
                        defaultValue={field.value}
                      >
                        <SelectTrigger
                          className={cn(
                            "w-full mt-2",
                            form.getFieldState("sortSizeBy").error &&
                              "border-destructive placeholder:text-destructive/60 text-destructive"
                          )}
                        >
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="random">Aléatoire</SelectItem>
                          <SelectItem value="low-to-high">
                            Taille: Du Plus Bas au Plus Haut
                          </SelectItem>
                          <SelectItem value="high-to-low">
                            Taille: Du Plus Haut au Plus Bas
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sizeRange"
                render={({ field }) => {
                  const ITEMS = [
                    { value: "0-1000", label: "Tous" },
                    { value: "0-50", label: "-50 m²" },
                    { value: "50-100", label: "50 m² - 100 m²" },
                    {
                      value: "100-200",
                      label: "100 m² - 200 m²",
                    },
                    { value: "200-500", label: "200 m² - 500 m²" },
                    { value: "500-1000", label: "+500 m²" },
                  ];
                  return (
                    <FormItem>
                      <FormLabel>Trier Par Taille</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(e) => {
                            field.onChange(e.split("-").map((el) => +el));
                          }}
                        >
                          <SelectTrigger
                            className={cn(
                              "w-full mt-2",
                              form.getFieldState("sizeRange").error &&
                                "border-destructive placeholder:text-destructive/60 text-destructive"
                            )}
                          >
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            {ITEMS.map(({ label, value }) => (
                              <SelectItem key={value} value={value}>
                                {label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <h4 className="text-lg font-semibold mt-2">
                Filtre par Catégories
              </h4>
              <FormField
                control={form.control}
                name="categories"
                render={() => (
                  <FormItem className="grid grid-cols-2 gap-2 space-y-0">
                    {CATEGORIES.map(({ id, name }) => (
                      <FormField
                        key={id}
                        control={form.control}
                        name="categories"
                        render={({ field }) => {
                          return (
                            <FormItem key={id}>
                              <FormControl>
                                <Checkbox
                                  className="hidden"
                                  checked={field.value?.includes(id)}
                                  onCheckedChange={(checked: boolean) => {
                                    return checked
                                      ? field.onChange([...field.value, id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel
                                className={cn(
                                  "flex flex-row justify-center items-center space-x-3 space-y-0 p-3 border rounded-md",
                                  field.value?.includes(id) &&
                                    "bg-primary border-primary"
                                )}
                              >
                                {name}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="justify-end gap-1 mt-4">
            <Button variant={"ghost"}>Reset</Button>
            <Button type="submit">Search</Button>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
};

export default Filters;
