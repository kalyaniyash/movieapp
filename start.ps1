# Quick Start Script for EPITA Movie App
Write-Host "🎬 Starting EPITA Movie Application..." -ForegroundColor Cyan

# Check if Docker is running
try {
    docker --version | Out-Null
    Write-Host "✅ Docker is available" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker is not running or not installed!" -ForegroundColor Red
    Write-Host "Please install Docker Desktop from: https://www.docker.com/products/docker-desktop" -ForegroundColor Yellow
    exit 1
}

# Start the application
Write-Host "`n🚀 Building and starting containers..." -ForegroundColor Yellow
docker-compose up -d --build

# Wait a moment for containers to start
Write-Host "`n⏳ Waiting for services to start..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

# Check container status
Write-Host "`n📊 Container Status:" -ForegroundColor Cyan
docker-compose ps

Write-Host "`n🎉 Application should be running!" -ForegroundColor Green
Write-Host "🌐 Frontend (React):  http://localhost:3000" -ForegroundColor Cyan
Write-Host "🔧 Backend (API):     http://localhost:8080" -ForegroundColor Cyan
Write-Host "🗄️  PostgreSQL:       localhost:5432" -ForegroundColor Cyan
Write-Host "🍃 MongoDB:          localhost:27017" -ForegroundColor Cyan

Write-Host "`n📝 Useful commands:" -ForegroundColor Yellow
Write-Host "• View logs:          docker-compose logs -f" -ForegroundColor White
Write-Host "• Stop application:   docker-compose down" -ForegroundColor White
Write-Host "• Restart:            docker-compose restart" -ForegroundColor White

Write-Host "`nPress any key to view logs..." -ForegroundColor Green
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
docker-compose logs -f
