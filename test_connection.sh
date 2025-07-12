#!/bin/bash

echo "Testing Backend-Frontend Connection..."

echo "1. Testing Backend Health..."
curl -X GET http://localhost:8080/movies 2>/dev/null || echo "Backend not running on port 8080"

echo "2. Testing User Registration..."
curl -X POST http://localhost:8080/users/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"testpass123","city":"TestCity","street":"TestStreet"}' \
  2>/dev/null || echo "Registration endpoint not working"

echo "3. Testing User Login..."
curl -X POST http://localhost:8080/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"testpass123"}' \
  2>/dev/null || echo "Login endpoint not working"

echo "Connection test complete!"
