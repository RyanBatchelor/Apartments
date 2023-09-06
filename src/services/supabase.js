
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sojcznaecezwznqehgbx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvamN6bmFlY2V6d3pucWVoZ2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMjA0MjksImV4cCI6MjAwOTU5NjQyOX0.XNJlV0Gm1WWeUzMZb8y__odvcO-6N2A-4uVn3vB2JbU"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;