@echo off

set appDir=%cd%

start java -jar  reportspam\build\libs\reportspam-0.0.1-SNAPSHOT.jar

cd %appDir%\reportspamUI
echo "hello"
ng serve
