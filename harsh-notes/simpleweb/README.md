# README
## Build and Run the Image Generated

This is a simple docker project which dockerizes a nodejs web server. The below sections show how to build an image out of the Dockerfile and then create containers out of it.
### Build the Image:
To generate the image using the Dockerfile, run the below command:

`docker build -t <docker_id>/simpleweb .`

Replace the docker_id with your docker_id. This will create an image with the tag simpleweb.

### Start and Execute the container:
To start a container out of the generated image and execute it, run the below command:

`docker run -p 8080:8000 <docker_id>/simpleweb`

This will run the container and connect the port 8080 of the local machine to the port 8000 inside the container.

To test it, go to [localhost:8080](http://localhost:8080/) and the output will be visible.
