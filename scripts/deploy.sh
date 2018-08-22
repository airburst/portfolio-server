# Find and remove the docker container
docker stop mover-api && docker rm mover-api
echo "\n-------------------------\nmover-api container removed\n-------------------------\n"

# Find and remove the docker image
docker rmi -f eclipse-metamover-server
echo "\n---------------------\neclipse-metamover-server image removed\n---------------------\n"

# Pull and run new image
docker run -d \
  --name mover-api \
  -p3001:3001 \
  -e "LOG_FILE=logs/metamover.log" \
  -e "LOG_LEVEL=info" \
  -v /home/mark/metamover/files:/usr/app/files \
  -v /home/mark/metamover/logs:/usr/app/logs \
  airburst/eclipse-metamover-server:latest

# List running containers
clear
echo "\n-----------------\nNew image running\n-----------------\n"
docker ps