# syntax=docker/dockerfile:1

FROM ubuntu:latest
LABEL description="SSEC Showcase"

# set working directory
WORKDIR /srv/ssec-showcase

# install dependencies
RUN apt-get update && apt-get -y install git ca-certificates curl gnupg
RUN mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
ENV NODE_MAJOR=20
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt-get update && apt-get -y install nodejs

COPY ./ ./

# install node package dependencies
RUN npm install

EXPOSE 5173

CMD npx vite --host "0.0.0.0" --port 5173
