#!/usr/bin/env bash

# Abre o Docker Compose
gnome-terminal --title="Docker Compose" -- bash -c "docker compose up; exec bash"

# Abre o Quarkus (Carregando o SDKMAN explicitamente)
gnome-terminal --title="Backend" -- bash -c "source \"$HOME/.sdkman/bin/sdkman-init.sh\" && cd backend && sdk env && ./gradlew quarkusDev; exec bash"

gnome-terminal --title="FrontEnd" -- bash -c "cd frontend && npm run dev; exec bash"
