#!/bin/sh
# Tunggu MySQL ready sebelum start server
until nc -z -v -w30 db 3306
do
  echo "Menunggu database..."
  sleep 5
done

echo "Database siap, menjalankan server"
node index.js
