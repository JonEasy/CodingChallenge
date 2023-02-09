@echo off

set appDir=%cd%


cd %appDir%\reportspam
if not exist build (
  .\gradlew build
)
start java -jar  build\libs\reportspam-0.0.1-SNAPSHOT.jar
:: pause 10
cd ..\reportspamUI
ng serve
