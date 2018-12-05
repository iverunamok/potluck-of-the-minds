# Potluck of the Minds

A website for the potluck of the minds event in Missoula.

### TOC

- [Todo](/docs/todo)
- [Contribute](/docs/CONTRIBUTING.md)

#### Getting started

- [Clone the repo](git@github.com:iverunamok/potluck-of-the-minds.git)
- cd into potluck-of-the-minds
- run `yarn install`

#### Testing Changes in Development

- if necessary run `git fetch`
- checkout the testing branch, i.e `git checkout <branch-name>`
- if the PR signals that a install is necessary -> `yarn install`
- run the dev server -> `npm run dev`, this will run a local version of `webpack-dev-server` by default on - [localhost:8080](localhost:8080)

#### Testing Changes for Production Locally

- if necessary run `git fetch`
- checkout the testing branch, i.e `git checkout <branch-name>`
- if the PR signals that a install is necessary -> `yarn install`
- run the build script -> `npm run build`, this will run webpack and produce a `build` folder at the root of the project.
- to start server run `node server.js` or `yarn start`

#### Recaptcha

Added prod site and `localhost:8000` to domains in recaptcha, it will not recognize other domains

To manage:
[Recaptcha](https://www.google.com/recaptcha/)
[Developer Site](https://developers.google.com/recaptcha/docs/v3)

#### [Prod Site](https://www.potluckoftheminds.com/)




