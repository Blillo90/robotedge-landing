-- Migration: add silo and read_time columns to posts
ALTER TABLE posts ADD COLUMN IF NOT EXISTS silo TEXT DEFAULT 'trading-algoritmico';
ALTER TABLE posts ADD COLUMN IF NOT EXISTS read_time INTEGER DEFAULT 5;
