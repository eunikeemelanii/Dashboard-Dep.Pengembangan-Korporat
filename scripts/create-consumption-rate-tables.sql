-- Create the main consumption rate table
CREATE TABLE consumption_rates (
  id SERIAL PRIMARY KEY,
  factory INTEGER NOT NULL,
  product VARCHAR(255) NOT NULL,
  raw_material VARCHAR(255) NOT NULL,
  consumption_rate DECIMAL(10, 3) NOT NULL,
  unit VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the history/audit table for non-destructive updates
CREATE TABLE consumption_rate_history (
  id SERIAL PRIMARY KEY,
  consumption_rate_id INTEGER NOT NULL,
  factory INTEGER NOT NULL,
  product VARCHAR(255) NOT NULL,
  raw_material VARCHAR(255) NOT NULL,
  old_rate DECIMAL(10, 3),
  new_rate DECIMAL(10, 3) NOT NULL,
  unit VARCHAR(50) NOT NULL,
  updated_by VARCHAR(255) DEFAULT 'system',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (consumption_rate_id) REFERENCES consumption_rates(id)
);

-- Create indexes for better query performance
CREATE INDEX idx_factory ON consumption_rates(factory);
CREATE INDEX idx_raw_material ON consumption_rates(raw_material);
CREATE INDEX idx_product ON consumption_rates(product);
