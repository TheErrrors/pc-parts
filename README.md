# EliteHubs Seeder

A standalone script to scrape and seed hardware component data from EliteHubs into a Supabase database.

## Setup

1. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   playwright install chromium
   ```

3. Configure Environment Variables:
   Copy `.env.example` to `.env` and fill in your Supabase credentials.
   ```bash
   cp .env.example .env
   ```
   **Note**: Use your Supabase Service Role Key to ensure you have write access to the table.

4. Database Setup:
   Ensure you have a `components` table in your Supabase project. You can run the following SQL snippet in the Supabase SQL Editor:
   ```sql
   CREATE TABLE public.components (
       url TEXT PRIMARY KEY,
       name TEXT NOT NULL,
       category TEXT NOT NULL,
       price NUMERIC,
       is_in_stock BOOLEAN DEFAULT false,
       specs JSONB DEFAULT '{}'::jsonb,
       external_id TEXT,
       created_at TIMESTAMPTZ DEFAULT NOW(),
       updated_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```

5. Configure Collections:
   Edit `collections.txt` to include the EliteHubs collection URLs you want to scrape, along with their respective categories. Use a comma-separated format:
   ```
   URL,Category
   https://elitehubs.com/collections/processors,Processor
   ```

## Usage

**Phase 1: Discovery**
Run `discover.py` to navigate through the collections, expand pagination by clicking "Load More", and collect all product URLs into `queue.json`.
```bash
python discover.py
```

**Phase 2: Extraction**
Run `extractor.py` to parse product data (name, price, stock, specs) using `requests` and `BeautifulSoup`, and upsert it into Supabase.
```bash
python extractor.py
```

If the extractor is interrupted, you can simply run it again. It tracks progress in `processed.txt` and will skip successfully imported URLs.
