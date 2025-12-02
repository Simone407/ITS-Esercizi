#!/bin/bash
# Java 21 LTS Environment Setup
# Source this file to set up Java 21 environment

export JAVA_HOME="/home/its/its/esercizi/JAVA/jdk-21/jdk-21.0.8"
export PATH="$JAVA_HOME/bin:$PATH"

echo "Java 21 LTS environment activated"
echo "JAVA_HOME: $JAVA_HOME"
echo "Java version:"
java -version
