import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase project URL and anonymous public key
const supabaseUrl = 'https://fuuimebjfyjltklszjex.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1dWltZWJqZnlqbHRrbHN6amV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2NTQwMDgsImV4cCI6MjAzNzIzMDAwOH0.ZSY7iOelzOlkG-IvxoyYHaOQpQEOag42dcqHriCzV4s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
