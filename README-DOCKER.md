# 🎬 EPITA Movie App - Docker Setup

Complete Docker setup for the EPITA Movie application with backend, frontend, and databases.

## 🚀 Quick Start

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running

### Start Everything
```powershell
# Navigate to the project directory
cd "c:\EPITA\Front-end"

# Start the complete application
.\start.ps1
```

## 🏗️ What Gets Started

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend** | http://localhost:3000 | React application |
| **Backend** | http://localhost:8080 | Node.js/Express API |
| **PostgreSQL** | localhost:5432 | Movies database |
| **MongoDB** | localhost:27017 | User authentication |

## 📂 Architecture

```
📦 Docker Setup
├── 🌐 Frontend (React) - Port 3000
├── ⚙️  Backend (Node.js) - Port 8080
├── 🗄️  PostgreSQL - Port 5432
└── 🍃 MongoDB - Port 27017
```

## 🎯 Features Included

- ✅ **User Registration & Authentication**
- ✅ **Movie Browsing by Category**
- ✅ **JWT Token Authentication**
- ✅ **PostgreSQL with Sample Movie Data**
- ✅ **MongoDB for User Management**
- ✅ **CORS Configured**
- ✅ **Hot Reload for Development**

## 🛠️ Management Commands

```powershell
# Start application
docker-compose up -d

# Stop application
docker-compose down

# View logs
docker-compose logs -f

# Restart specific service
docker-compose restart backend

# Rebuild containers
docker-compose up -d --build

# View container status
docker-compose ps
```

## 🔧 Development

### Backend Development
- Code changes in `adv-js/` folder are automatically synced
- Nodemon restarts the server on changes
- Logs: `docker-compose logs -f backend`

### Frontend Development
- Code changes in `FEA/` folder are automatically synced
- React hot reload is enabled
- Logs: `docker-compose logs -f frontend`

## 🗄️ Database Information

### PostgreSQL (Movies)
- **Database:** `epita_movies`
- **User:** `postgres`
- **Password:** `root1234`
- **Sample data:** Movies across different categories

### MongoDB (Users)
- **Database:** `epita`
- **Collection:** `users`
- **Authentication:** None (development)

## 🌍 Environment Variables

All environment variables are configured in `docker-compose.yml`:
- `JWT_SECRET_KEY`: For token signing
- `DB_*`: PostgreSQL connection
- `MONGO_URI`: MongoDB connection

## 🆘 Troubleshooting

### Application won't start
```powershell
# Check Docker is running
docker --version

# Check container status
docker-compose ps

# View error logs
docker-compose logs
```

### Database connection issues
```powershell
# Restart databases
docker-compose restart postgres mongodb

# Check database logs
docker-compose logs postgres
docker-compose logs mongodb
```

### Port conflicts
If ports are already in use, stop other services or modify ports in `docker-compose.yml`

## 🧪 Testing the Setup

```powershell
# Test backend health
curl http://localhost:8080/movies

# Test frontend
# Open browser to http://localhost:3000
```

## 📝 Sample User Flow

1. **Visit** http://localhost:3000
2. **Register** a new account
3. **Login** with credentials
4. **Browse** movies by category
5. **View** movie details

## 🔄 Reset Everything

```powershell
# Stop and remove all data
docker-compose down -v
docker system prune -f

# Start fresh
.\start.ps1
```

---

**Need help?** Check the logs with `docker-compose logs -f` or restart with `docker-compose restart`
