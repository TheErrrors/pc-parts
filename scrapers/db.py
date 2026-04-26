import os
from dotenv import load_dotenv
from supabase import create_client, Client

# Load environment variables from .env file
load_dotenv()

SUPABASE_URL = os.environ.get("SUPABASE_URL")
# Note: Scrapers require the Secret Key to bypass RLS policies
SUPABASE_SECRET_KEY = os.environ.get("SUPABASE_SECRET_KEY")

if not SUPABASE_URL or not SUPABASE_SECRET_KEY:
    print("Warning: SUPABASE_URL or SUPABASE_SECRET_KEY is not set.")

supabase: Client = create_client(SUPABASE_URL or "", SUPABASE_SECRET_KEY or "")
