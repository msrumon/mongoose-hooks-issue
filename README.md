# Issue with `pre()` hook with Mongoose

This sample repository has a simple layout of a VERY IMPORTANT use-case of any production applcation - hashing users' passwords before saving it to database. Using **NestJS**, I am hereby demonstrating that using `pre()` hook of [Mongoose](https://mongoosejs.com) library doesn't trigger the code inside.

## Setup

Clone this repository. Then run

```bash
npm i
```

to install all the dependencies. Then run

```bash
nest start
```

to build the app and spin up a server to serve the app.

> Default port is `3003`.
