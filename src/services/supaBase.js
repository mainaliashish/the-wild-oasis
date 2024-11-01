import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sahazeodmqvpfimbzbso.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhaGF6ZW9kbXF2cGZpbWJ6YnNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzOTU0MDksImV4cCI6MjA0NTk3MTQwOX0.YYsjiyPoAhZSVfOwcMJGsDxuxxU4XBonuHvQqrLKNiw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
