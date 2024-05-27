all: build run clean

build:
	docker build -t jekyll:latest .

run:
	docker run -it \
		--net=host \
		--name jekyll \
		--ulimit nofile=1024:524288 \
		--mount type=bind,source=$(shell pwd),target=/site \
		jekyll:latest

clean:
	docker container rm jekyll
	docker rmi jekyll:latest

attach:
	-docker exec -it jekyll /bin/bash