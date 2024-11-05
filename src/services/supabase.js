import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://grtsdcwcfcdzjszrwkdb.supabase.co";

const SUPABASE_API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdydHNkY3djZmNkempzenJ3a2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MDczNTAsImV4cCI6MjA0NjM4MzM1MH0.IrunBBHoXDBRZnYgKh3pn7oA8sRUyl9p9fX79yj14bM";

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export default supabase;
