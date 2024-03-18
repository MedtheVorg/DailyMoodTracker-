<br/>
<br/>
<h1 align="center"> DAILY MOOD TRACKER</h1>

<img src="./src//assets//preview.gif"/>

<br/>
<br/>

# About the project

The objective behind this project is to learn about

-   Docker (containers, images)
-   Vitest (testing)

<br/>
<br/>

# How To Use

-   ### Using Visual Studio Code

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/MedtheVorg/DailyMoodTracker-.git

# Go into the project folder
$ cd dailymoodtracker

# Install dependencies
$ npm install

# Run the dev server
$ npm run dev
```

-   ### Using Docker
    using a CLI run the following commands :

```bash
#clone the docker image from dockerhub
docker pull mohamedlem/dailymoodtracker:dev

#create and run container
docker run --name containername_c -p 5173:5173 mohamedlem/dailymoodtracker:dev

#and that's it

#to stop the container run this command
docker stop containername_c

```

# Docker image

https://hub.docker.com/repository/docker/mohamedlem/dailymoodtracker/general

<br/>
<br/><br/>

# What is docker ?

-   docker uses Containers to run applications in isolated environments with specific dependencies.
-   docker main purpose is to maintain containers

## Virtual machines vs containers

-   VM has its own full operating system running on top of your pc operating system and is typically slower.
-   Containers share the host operating system & typically quicker.

## images

-   blueprint for containers and what they contain :

    -   OS and/or runtime environment
    -   app source code
    -   configuration files ( ex: .env)
    -   commands (for the app to run and work)

-   images are readonly and cannot be modified once they are generated

## containers:

-   containers are runable instances of images
-   they are run in an isolated environment and work independently

## making of images:

-   an image is made of many layers and the layers order matters !
</br>
</br>
<p style="width:100%; text-align:center;font-weight:bold;font-size:20px">Image</p>
<table border="1" style="width:90%; margin-inline:auto; text-align:center;">
<tr>
<td col-span="3" border="2">Dependencies</td>
</tr>
<tr>
<td col-span="3" border="2">Source code</td>
</tr>
<tr>
<td col-span="3" border="2">Parent Image</td>
</tr>
</table>

### Parent image :

-   OS and sometimes runtime environment from Dockerhub.

# create images

```
docker build -t imagename (dockerfilelocation)
```

# create container from image

```
docker run --name containername -p TARGET_PORT:EXPOSED_PORT imagename
```

# run container

```
docker start containername
```

# delete all images / containers / images

docker system prune -a
