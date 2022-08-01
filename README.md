# ABN Movies @ The Movies
This is the repo for the ABN Movies application which is put together using Vue 3 and generated with vue cli's vue create app. 

Using Gitflow, when a PR is created, a build is then generated with Chromatic to test each component for changes. If some are detected, then they will require checking by another member of the team.

Upon accepting these changes, the PR can then be approved by the reviewer from Chromatic to Github. Once this happens, the PR can then be merged to main which is then picked up by Heroku.

This change is then deployed to the staging environment for testing.

# Environments
Storybook [Storybook ABN Movies](https://62e41e8b345ad62f3a746c3f-nzoiyocyvu.chromatic.com/)
Staging [ABN Movies Staging](https://abn-movies.herokuapp.com/)

# Developing
To develop with the application, first clone the project and then cd in to the project directory with `cd abn-movies` and then run `yarn` to fetch all the dependencies.

To start creating components, run `yarn serve`  which will then watch for file changes and then using HMR (Hot Module Replacement) to update the browser without having to refresh. 

## Storybook

This application uses [Chromatic](https://www.chromatic.com/) to create a new Storybook build whenever work is pushed to Github. Using a Github action, this then triggers a deployment to Storybook which can then be viewed [Storybook ABN Movies](https://62e41e8b345ad62f3a746c3f-nzoiyocyvu.chromatic.com/)

You can test a storybook build by running `yarn build-storybook`

## Staging - Heroku

The application static pages are built and then deployed as a static folder on a heroku instance. A build is triggered whenever a push to main occurs and then shortly after, the static web pages can be viewed at [ABN Movies Staging](https://abn-movies.herokuapp.com/)

If you need to view the logs and have the Heroku CLI, then you can see them by using the heroku cli command `heroku logs --tail --app abn-movies`

### Linting
Linting rules have been set up and so when a commit occurs, the linter with check the files for consistency. 

Run `yarn lint` to lint the files and check for problems. 

### SCSS
The project uses SCSS to compile javascript. Some root and main scss files can be found in the assets folder in the root directory. 

### Global Style Dependencies
The styles are loaded through a single entry point rather than including them in many files. This is done in the vue.config.js for running the main web application and in the .storybook/main.js file. 

The main styles from Bootstrap and the core assets styles are then available without including them again in the components.

### Component Structure
Each component should consist of the three files to complete the styles, html, javascript and storybook requirements. Please not that the folder should be a capital letter and then there should be an index.vue inside which is the component itself.

The files for a component include;

/ComponentName
 - index.vue
 - ComponentName.stories.js
 - styles.scss

### Importing Files
For importing files from one another, you can use the @ prefix to a path which starts at /src. So this means that the path @/components/ComponentName resolves to /src/components/ComponentName

So for example, you can write;

    import ComponentName from '@/components/ComponentName'
Not then that you don't need to add index.vue to the path. Since it is the index in each folder, it will resolve to that file by default.

Any child components that this depends on can further be added to a nested folder and then referenced by the parent.

## Atomic Design
I like to work with the Atomic Design method and so splitting the components up in to Atoms, Molecules, Organisms, Templates & Pages. For more information, see [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

## Bootstrap
This application is using the fundementals of the Bootstrap library so that I can leverage some useful mixins from there.
