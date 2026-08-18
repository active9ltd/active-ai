create extension if not exists pgcrypto;
create table if not exists workspaces(id uuid primary key default gen_random_uuid(),name text not null default 'My Workspace',created_at timestamptz not null default now());
create table if not exists products(id uuid primary key default gen_random_uuid(),workspace_id uuid references workspaces(id) on delete cascade,name text not null,source_url text,description text,image_url text,keywords text[] default '{}',created_at timestamptz not null default now());
create table if not exists creatives(id uuid primary key default gen_random_uuid(),workspace_id uuid references workspaces(id) on delete cascade,product_id uuid references products(id) on delete set null,type text not null,status text not null default 'queued',prompt text,output_url text,copy text,created_at timestamptz not null default now());
create table if not exists campaigns(id uuid primary key default gen_random_uuid(),workspace_id uuid references workspaces(id) on delete cascade,name text not null,objective text,budget numeric(12,2),status text not null default 'draft',created_at timestamptz not null default now());
create table if not exists credit_ledger(id uuid primary key default gen_random_uuid(),workspace_id uuid references workspaces(id) on delete cascade,amount integer not null,reason text not null,created_at timestamptz not null default now());
create index if not exists products_workspace_idx on products(workspace_id);
create index if not exists creatives_workspace_idx on creatives(workspace_id);
create index if not exists campaigns_workspace_idx on campaigns(workspace_id);
