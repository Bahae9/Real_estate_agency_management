import { z } from "zod";

export const MIN_PRICE = 0;
export const MAX_PRICE = 5000000;
export const MIN_SIZE = 0;
export const MAX_SIZE = 1000;

export const searchSchema = z.object({
  search: z.string().optional(),
  categories: z.array(z.string()),
  type: z.string().optional(),
  sortPriceBy: z.string().optional(),
  priceRange: z.tuple([
    z.number().min(MIN_PRICE).max(MAX_PRICE),
    z.number().min(MIN_PRICE).max(MAX_PRICE),
  ]),
  sortSizeBy: z.string().optional(),
  sizeRange: z.tuple([
    z.number().min(MIN_SIZE).max(MAX_SIZE),
    z.number().min(MIN_SIZE).max(MAX_SIZE),
  ]),
});
export type SearchValues = z.infer<typeof searchSchema>;
export type SelectSearchSchemaKeys = "priceRange.0" | "priceRange.1";

export const DEFAULT_SEARCH_VALUES: SearchValues = {
  search: "",
  categories: [],
  type: "",
  sortPriceBy: "",
  priceRange: [MIN_PRICE, MAX_PRICE],
  sortSizeBy: "",
  sizeRange: [MIN_SIZE, MAX_SIZE],
};
