# Database Setup Instructions

## PostgreSQL Setup for Movies Database

1. **Install PostgreSQL** (if not already installed)
   - Download from https://www.postgresql.org/download/
   - Install with default settings

2. **Create Database and Table**

```sql
-- Connect to PostgreSQL as superuser
-- Create database
CREATE DATABASE epita_movies;

-- Connect to the epita_movies database
\c epita_movies;

-- Create movies table
CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_date DATE,
    author VARCHAR(255),
    type VARCHAR(100),
    poster TEXT,
    backdrop_poster TEXT,
    overview TEXT,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO movies (title, release_date, author, type, poster, backdrop_poster, overview) VALUES
('The Matrix', '1999-03-31', 'The Wachowskis', 'Top Rated', 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', 'https://image.tmdb.org/t/p/original/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg', 'A computer hacker learns about the true nature of reality.'),
('Inception', '2010-07-16', 'Christopher Nolan', 'Top Rated', 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg', 'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg', 'A thief enters people dreams to steal secrets.'),
('The Hangover', '2009-06-05', 'Todd Phillips', 'Comedy', 'https://image.tmdb.org/t/p/w500/lkKFmuclsyncRpBJgUxPoNt1LTy.jpg', 'https://image.tmdb.org/t/p/original/uluhlXqOPSxbibDz3WbMd8dPl0l.jpg', 'Three friends wake up after a bachelor party.'),
('Stranger Things', '2016-07-15', 'Duffer Brothers', 'Netflix Originals', 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg', 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg', 'Kids encounter supernatural forces in a small town.');
```

3. **Update .env file with your PostgreSQL credentials**
   - Update DB_PASSWORD with your PostgreSQL password
   - Update DB_NAME to "epita_movies"

## MongoDB Setup (for Users)

MongoDB should be running on localhost:27017. The application will automatically create the "epita" database and users collection.

## Starting the Applications

1. **Start Backend:**
   ```bash
   cd c:\EPITA\Front-end\adv-js
   npm install
   npm start
   ```

2. **Start Frontend:**
   ```bash
   cd c:\EPITA\Front-end\FEA
   npm install
   npm start
   ```

The backend will run on http://localhost:8080
The frontend will run on http://localhost:3000
