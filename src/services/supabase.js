import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qqigocdjjulnplhyngtb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxaWdvY2RqanVsbnBsaHluZ3RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyOTI4ODEsImV4cCI6MjAxNDg2ODg4MX0.1OlUSNo09ROtHbfPQ3rmVKob2Idtq5dyXds3KM23a40";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
