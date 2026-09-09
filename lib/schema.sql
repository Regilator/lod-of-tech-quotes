create table if not exists categories (id uuid primary key default gen_random_uuid(), name text unique not null, enabled boolean default true);
create table if not exists quotes (id uuid primary key default gen_random_uuid(), text text not null, author text default 'Lod of Tech', category_id uuid references categories(id), image_url text, average_rating numeric default 0, created_at timestamptz default now());
create table if not exists favorites (user_id text not null, quote_id uuid references quotes(id) on delete cascade, created_at timestamptz default now(), primary key(user_id, quote_id));
create table if not exists ratings (user_id text not null, quote_id uuid references quotes(id) on delete cascade, rating int check(rating between 1 and 5), review text, created_at timestamptz default now(), primary key(user_id, quote_id));
insert into categories (name) values ('Love'),('Romantic'),('Psychological'),('Sonnets'),('Religious'),('Cultural'),('Lyrical'),('Sad'),('Emotional'),('Comforting'),('Motivational') on conflict do nothing;

