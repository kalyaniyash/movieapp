# Test Backend-Frontend Connection Script for Windows

Write-Host "Testing Backend-Frontend Connection..." -ForegroundColor Green

Write-Host "`n1. Testing Backend Health..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "http://localhost:8080/movies" -Method GET -ErrorAction Stop
    Write-Host "✓ Backend is running and responding" -ForegroundColor Green
} catch {
    Write-Host "✗ Backend not running on port 8080 or not responding" -ForegroundColor Red
    Write-Host "Make sure to start the backend with: npm start" -ForegroundColor Cyan
}

Write-Host "`n2. Testing User Registration..." -ForegroundColor Yellow
try {
    $body = @{
        username = "testuser"
        email = "test@example.com"
        password = "testpass123"
        city = "TestCity"
        street = "TestStreet"
    } | ConvertTo-Json

    $response = Invoke-RestMethod -Uri "http://localhost:8080/users/register" -Method POST -Body $body -ContentType "application/json" -ErrorAction Stop
    Write-Host "✓ Registration endpoint working" -ForegroundColor Green
} catch {
    Write-Host "✗ Registration endpoint not working: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`n3. Testing User Login..." -ForegroundColor Yellow
try {
    $loginBody = @{
        email = "test@example.com"
        password = "testpass123"
    } | ConvertTo-Json

    $response = Invoke-RestMethod -Uri "http://localhost:8080/users/login" -Method POST -Body $loginBody -ContentType "application/json" -ErrorAction Stop
    Write-Host "✓ Login endpoint working" -ForegroundColor Green
} catch {
    Write-Host "✗ Login endpoint not working: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`nConnection test complete!" -ForegroundColor Green
Write-Host "`nNext Steps:" -ForegroundColor Cyan
Write-Host "1. Make sure MongoDB is running (for user authentication)" -ForegroundColor White
Write-Host "2. Make sure PostgreSQL is running (for movies data)" -ForegroundColor White
Write-Host "3. Start backend: cd adv-js && npm start" -ForegroundColor White
Write-Host "4. Start frontend: cd FEA && npm start" -ForegroundColor White
