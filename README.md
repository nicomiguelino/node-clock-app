# A clock app written using Node and Webpack

Building a simple clock app using Node and a build system, cause
why not?

## Deploying as a Screenly Edge App

[Screenly Edge Apps][1] allows users to deploy their web app to their digital
signage players without the need for hosting.

### Prep work

```bash
$ npm install
$ npm run build
```

Running `npm run build` will create a directory called `dist/`.

### Creating an Edge App (if you haven't done yet)

```bash
$ screenly edge-app create --name $EDGE_APP_NAME \
  --path dist/ --in-place
```

### Uploading and promoting the Edge App

```bash
$ screenly edge-app upload --path dist/
$ screenly edge-app version promote \
  --revision $REVISION_NUMBER \
  --channel candidate
  --path dist/
```

### Final steps

Now you can add the Edge App you your active playlist.





[1]: https://www.screenly.io/blog/2023/08/30/introducing-edge-apps/
