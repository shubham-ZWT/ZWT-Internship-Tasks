import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseClient: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient => {
  if (!supabaseClient) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase environment variables. Please set SUPABASE_URL and SUPABASE_ANON_KEY in .env");
    }

    supabaseClient = createClient(supabaseUrl, supabaseKey);
  }

  return supabaseClient;
};