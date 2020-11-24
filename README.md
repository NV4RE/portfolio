## Start

```sh
npm start
```

## Deploy

```sh
npm run build
gsutil rsync -R ./build  gs://portfolio.nv4re.com
```
