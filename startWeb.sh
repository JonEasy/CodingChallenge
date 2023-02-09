#!/bin/bash


# Run backend server 
cd $(pwd)/reportspam

buildDir="build"
if [! -d "${buildDir}"]; then 
  chmod +x gradlew
  ./gradlew build
fi
java -jar "$(pwd)/reportspam/build/libs/reportspam-0.0.1-SNAPSHOT.jar" &

# # Run front end
cd "../reportspamUI" 
ng serve
