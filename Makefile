all: build run

build:
	docker build -t jekyll:latest .

run:
	docker run --rm -it \
		--net=host \
		--name jekyll \
		--ulimit nofile=1024:524288 \
		--mount type=bind,source=$(shell pwd),target=/site \
		jekyll:latest

clean:
	docker rmi jekyll:latest

attach:
	-docker exec -it jekyll /bin/bash