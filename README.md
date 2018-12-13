# Potluck of the Minds

A website for the potluck of the minds event in Missoula.

### TOC

- [Contribute](/docs/CONTRIBUTING.md)

#### Getting started

- [Clone the repo](git@github.com:iverunamok/potluck-of-the-minds.git)
- cd into potluck-of-the-minds
- run `yarn install`

#### Updating your branch for testing

- if necessary run `git fetch`
- checkout the testing branch, i.e `git checkout <branch-name>`
- if the PR signals that a install is necessary -> `yarn install`

#### Testing Changes in Development

- run the dev server -> `npm run dev`, this will run a local version of `parcel-bundler` by default parcel has hot reloading and serves on - [localhost:1234](localhost:1234)

#### Testing Changes for Production Locally

- run the build script -> `npm run build`, this will run webpack and produce a `dist` folder at the root of the project.
- to start server run `node server.js` or `yarn start`

#### Testing Changes for production remotely

- push the testing branch to heroku -> `git push heroku <branch-name>:master`, this will push up your branch to heroku master
- navigate to the [current production branch](https://still-bayou-37564.herokuapp.com/) 
- hopefully you have heroku command line tools `heroku logs --tail` will give you error output

#### Recaptcha

Added prod site and `localhost:8000` to domains in recaptcha, it will not recognize other domains

To manage:
[Recaptcha](https://www.google.com/recaptcha/)
[Developer Site](https://developers.google.com/recaptcha/docs/v3)

#### [Prod Site](https://www.potluckoftheminds.com/)
