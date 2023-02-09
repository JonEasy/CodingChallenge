#!/bin/bash


cd "$(pwd)/reportspam"

# Run backend server 

# buildDir="build"
if [[ ! -d build ]]; then 
  echo "yes"
  chmod +x gradlew
  ./gradlew build
fi
java -jar "$(pwd)/reportspam/build/libs/reportspam-0.0.1-SNAPSHOT.jar" &

# Front End
cd ../reportspamUI
ng serve

