FROM public.ecr.aws/docker/library/node:18

WORKDIR /phase2-repo

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]