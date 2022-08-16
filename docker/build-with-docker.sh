docker build . -t slet-mig
docker run --rm -it -v $(pwd)/build:/app/build slet-mig