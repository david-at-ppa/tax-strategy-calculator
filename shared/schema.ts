import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Define the tax calculation request schema
export const taxCalculationSchema = z.object({
  filingStatus: z.enum(["single", "married", "marriedSeparate", "headOfHousehold"]),
  state: z.string(),
  visaRestrictions: z.enum(["no", "yes", "unknown"]),
  w2Income: z.number().min(0),
  llcProfit: z.number().min(0),
  sCorpProfit: z.number().min(0),
  capitalGains: z.number().min(0),
  rothConversion: z.number().min(0),
  otherIncome: z.number().min(0),
  itemizedDeductions: z.number().min(0),
});

export type TaxCalculationRequest = z.infer<typeof taxCalculationSchema>;

// Define the tax calculation history table for tracking calculations
export const taxCalculations = pgTable("tax_calculations", {
  id: serial("id").primaryKey(),
  userId: text("user_id"),
  date: text("date").notNull(),
  inputs: jsonb("inputs").notNull(),
  results: jsonb("results").notNull(),
});

export const insertTaxCalculationSchema = createInsertSchema(taxCalculations).pick({
  userId: true,
  date: true,
  inputs: true,
  results: true,
});

export type InsertTaxCalculation = z.infer<typeof insertTaxCalculationSchema>;
export type TaxCalculation = typeof taxCalculations.$inferSelect;

// Keep the original users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
