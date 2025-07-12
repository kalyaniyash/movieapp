# Docker Management Scripts for EPITA Movie App

Write-Host "🐳 EPITA Movie App - Docker Management" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

function Start-App {
    Write-Host "`n🚀 Starting the complete application..." -ForegroundColor Green
    Write-Host "This will start:" -ForegroundColor Yellow
    Write-Host "  • PostgreSQL Database (port 5432)" -ForegroundColor White
    Write-Host "  • MongoDB Database (port 27017)" -ForegroundColor White
    Write-Host "  • Backend API (port 8080)" -ForegroundColor White
    Write-Host "  • Frontend React App (port 3000)" -ForegroundColor White
    Write-Host ""
    
    docker-compose up -d --build
    
    Write-Host "`n✅ Application started successfully!" -ForegroundColor Green
    Write-Host "🌐 Frontend: http://localhost:3000" -ForegroundColor Cyan
    Write-Host "🔧 Backend API: http://localhost:8080" -ForegroundColor Cyan
    Write-Host "📊 View logs: docker-compose logs -f" -ForegroundColor Yellow
}

function Stop-App {
    Write-Host "`n🛑 Stopping the application..." -ForegroundColor Red
    docker-compose down
    Write-Host "✅ Application stopped!" -ForegroundColor Green
}

function Show-Status {
    Write-Host "`n📋 Application Status:" -ForegroundColor Yellow
    docker-compose ps
}

function Show-Logs {
    Write-Host "`n📝 Application Logs:" -ForegroundColor Yellow
    docker-compose logs -f
}

function Reset-App {
    Write-Host "`n🔄 Resetting application (removing all data)..." -ForegroundColor Red
    $confirmation = Read-Host "Are you sure? This will delete all data! (y/N)"
    if ($confirmation -eq 'y' -or $confirmation -eq 'Y') {
        docker-compose down -v
        docker system prune -f
        Write-Host "✅ Application reset complete!" -ForegroundColor Green
    } else {
        Write-Host "❌ Reset cancelled." -ForegroundColor Yellow
    }
}

# Menu
Write-Host "`nAvailable commands:" -ForegroundColor Yellow
Write-Host "1. Start-App     - Start the complete application" -ForegroundColor White
Write-Host "2. Stop-App      - Stop the application" -ForegroundColor White
Write-Host "3. Show-Status   - Show container status" -ForegroundColor White
Write-Host "4. Show-Logs     - Show application logs" -ForegroundColor White
Write-Host "5. Reset-App     - Reset everything (dangerous!)" -ForegroundColor White
Write-Host ""
Write-Host "Example usage: Start-App" -ForegroundColor Green
