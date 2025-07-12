-- Create movies table
CREATE TABLE IF NOT EXISTS movies (
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

-- Insert sample movie data
INSERT INTO movies (title, release_date, author, type, poster, backdrop_poster, overview) VALUES
('The Matrix', '1999-03-31', 'The Wachowskis', 'Top Rated', 
 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', 
 'https://image.tmdb.org/t/p/original/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg', 
 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.'),

('Inception', '2010-07-16', 'Christopher Nolan', 'Top Rated', 
 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg', 
 'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg', 
 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.'),

('The Hangover', '2009-06-05', 'Todd Phillips', 'Comedy', 
 'https://image.tmdb.org/t/p/w500/lkKFmuclsyncRpBJgUxPoNt1LTy.jpg', 
 'https://image.tmdb.org/t/p/original/uluhlXqOPSxbibDz3WbMd8dPl0l.jpg', 
 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night.'),

('Stranger Things', '2016-07-15', 'Duffer Brothers', 'Netflix Originals', 
 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg', 
 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg', 
 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments.'),

('The Office', '2005-03-24', 'Greg Daniels', 'Comedy', 
 'https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg', 
 'https://image.tmdb.org/t/p/original/7XTHsIhkhiWXUaMbQvbAaMRr28L.jpg', 
 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes.'),

('Breaking Bad', '2008-01-20', 'Vince Gilligan', 'Top Rated', 
 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', 
 'https://image.tmdb.org/t/p/original/xf9wuDcqlUPWABQI1TjrgV2Es1. jpg', 
 'A high school chemistry teacher diagnosed with terminal lung cancer teams up with a former student.'),

('The Conjuring', '2013-07-19', 'James Wan', 'Horror', 
 'https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg', 
 'https://image.tmdb.org/t/p/original/jKv5iOfYY36OhbvL7dPnbktjE6Z.jpg', 
 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence.'),

('House of Cards', '2013-02-01', 'Beau Willimon', 'Netflix Originals', 
 'https://image.tmdb.org/t/p/w500/dA9phJOkpVdoq44xb1yBVdgT69.jpg', 
 'https://image.tmdb.org/t/p/original/xWKPTFRo3WvP7kEBUjhJzSLJCbr.jpg', 
 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.'),

('Planet Earth', '2006-03-05', 'David Attenborough', 'Documentaries', 
 'https://image.tmdb.org/t/p/w500/5rF6Ow6WKs1KXrEOuNeLbzDaE8P.jpg', 
 'https://image.tmdb.org/t/p/original/q4RmLCM1koXfCpnNhJdM9uFq6s.jpg', 
 'A groundbreaking wildlife documentary series that captures the beauty and wonder of our planet.'),

('Avengers: Endgame', '2019-04-26', 'Russo Brothers', 'Trending', 
 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg', 
 'https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg', 
 'After the devastating events of Infinity War, the universe is in ruins.');

-- Print success message
SELECT 'Movies table created and sample data inserted successfully!' as status;
