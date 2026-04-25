import os
from dotenv import load_dotenv
from supabase import create_client, Client

# Load environment variables from .env file
load_dotenv()

SUPABASE_URL = os.environ.get("SUPABASE_URL")
# Note: Scrapers require the Service Role Key to bypass RLS policies
SUPABASE_SERVICE_KEY = os.environ.get("SUPABASE_SERVICE_KEY")

if not SUPABASE_URL or not SUPABASE_SERVICE_KEY:
    print("Warning: SUPABASE_URL or SUPABASE_SERVICE_KEY is not set.")

supabase: Client = create_client(SUPABASE_URL or "", SUPABASE_SERVICE_KEY or "")
