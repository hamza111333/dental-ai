import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

// === BASE SCHEMAS ===
export const insertLeadSchema = createInsertSchema(leads).omit({ id: true, createdAt: true });

// === EXPLICIT API CONTRACT TYPES ===
export type Lead = typeof leads.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;

// Request types
export type CreateLeadRequest = InsertLead;

// Response types
export type LeadResponse = Lead;
