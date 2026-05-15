-- Migration: add tags array column to posts
ALTER TABLE posts ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}';

-- Update existing seed articles with relevant tags
UPDATE posts SET tags = ARRAY['NinjaTrader', 'NinjaScript', 'Backtesting', 'Futuros CME', 'Tutorial', 'Instalación']
WHERE slug = 'guia-completa-ninjatrader-trading-algoritmico';

UPDATE posts SET tags = ARRAY['Trading Algorítmico', 'Ventaja estadística', 'Backtesting', 'Automatización', 'Gestión emocional']
WHERE slug = 'que-es-trading-algoritmico';

UPDATE posts SET tags = ARRAY['NinjaTrader', 'MetaTrader 5', 'Comparativa', 'Futuros', 'Forex', 'NinjaScript vs MQL5']
WHERE slug = 'ninjatrader-vs-metatrader-5-comparativa';

UPDATE posts SET tags = ARRAY['Estrategia', 'Backtesting', 'Gestión de riesgo', 'Drawdown', 'Profit factor', 'NinjaScript']
WHERE slug = 'como-disenar-estrategia-trading-algoritmico';
