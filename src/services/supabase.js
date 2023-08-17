import { createClient } from "@supabase/supabase-js";

// Project url
export const supabaseUrl = "https://rutnmiivrkdtruxjaekq.supabase.co";

// API Key
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1dG5taWl2cmtkdHJ1eGphZWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzOTM2OTgsImV4cCI6MjAwNjk2OTY5OH0.LrrElAt3FzJoCuRVqV33ylndOVmi0uo8lBVuh4P_NrE";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
