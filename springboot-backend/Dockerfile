FROM maven:latest

# copy our application in
COPY . /build

# change the working directory to where we are building
# the application
WORKDIR /build

# use maven to build the application
RUN mvn clean package

# create a new build stage from the Java image
# which has java installed already
FROM java:8

EXPOSE 8080

# change the working directory to where the application
# is going to be installed
WORKDIR /opt/backend

# copy the JAR file that was created in the previous
# build stage to the application folder in this build stage
COPY --from=0 /build/target/docker-backend.jar backendapp.jar

# create an entrypoint to run the application
ENTRYPOINT ["/usr/bin/java", "-jar", "backendapp.jar"]