#!/bin/bash


# Run backend server 
java -jar "$(pwd)/reportspam/build/libs/reportspam-0.0.1-SNAPSHOT.jar" &

# Run front end

cd "$(pwd)/reportspamUI" 
echo $(pwd)
ng serve
