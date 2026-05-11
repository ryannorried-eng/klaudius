CREATE TABLE IF NOT EXISTS leads (
  id            TEXT PRIMARY KEY,
  name          TEXT NOT NULL,
  category      TEXT,
  address       TEXT,
  phone         TEXT,
  email         TEXT,
  region        TEXT,
  status        TEXT DEFAULT 'found',
  created_at    TEXT DEFAULT (datetime('now')),
  updated_at    TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS sites (
  place_id      TEXT PRIMARY KEY REFERENCES leads(id),
  build_path    TEXT,
  vercel_url    TEXT,
  design_system TEXT,
  deployed_at   TEXT
);

CREATE TABLE IF NOT EXISTS outreach (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  place_id      TEXT REFERENCES leads(id),
  channel       TEXT,
  subject       TEXT,
  body          TEXT,
  sent_at       TEXT,
  touch_number  INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS replies (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  place_id      TEXT REFERENCES leads(id),
  received_at   TEXT,
  body          TEXT,
  sentiment     TEXT
);
