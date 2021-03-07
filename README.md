# NimbusUi

## PRE-REQ:

### Ensure docker with kubernetes is installed. (If not, install from here: https://www.docker.com/products/docker-desktop)
```batch
docker -v
```
// should output: Docker version 20.10.2, build 2291f61 (or something newer)

Create an account on docker.com with free subscription

Ensure you sign-in when you lauch docker desktop

### Ensure node is installed (if not, install from here: https://nodejs.org/en/download/)
```batch
node -v
```
// should output: v14.15.4 (or newer)
#### install latest angular-cli
```batch
npm install -g @angular/cli
ng --version
```
// should output: angular cli: 11.1.1 (or something newer)

### Ensure vscode editor is installed. (if not, install from here: https://code.visualstudio.com/)
#### Install the following extensions on VSCode:
Docker - by Microsoft

Kubernetes - by Microsoft

Remote - WSL - by Microsoft


## SETUP:
```batch
git clone https://github.com/shahraship/nimbus-ui.git
cd nimbus-ui
npm i
docker-compose build
docker-compose up
docker build -t nginx-angular -f nginx.dockerfile .
```


## RUN (in 2 separate terminals one after the other one):
```batch
ng build --watch --delete-output-path false
docker run -p 8080:80 -v dist:/usr/share/nginx/html
```

## SOME HANDY COMMANDS
```batch
docker ps -a // this will list all the available containers
docker rm [container id] // this will remove the container
docker stop [container id] // this will stop the container
docker system prune // this will remove all dangling images
docker images // this will list all the images we've on our machine
docker rmi [img id] // this will remove the image
```
