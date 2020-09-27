# ✨ Contributing to TECH PHANTOMS OFFICIAL WEBSITE
We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## ✨ Steps to follow

# NOTE:
All PRs will be merged to `development` branch. Periodically, our members will clean the code before merging to master branch. 
So it might be possible that you dont see the exact result on the production website.

Send PR to `development` branch only.

### 1. Fork it

You can get your own fork/copy of [community-website](https://github.com/Ninja-Developers/Tech_Phantoms_website) by using the <kbd><b>Fork</b></kbd> button.

 [![Fork Button](https://help.github.com/assets/images/help/repository/fork_button.jpg)](https://github.com/Ninja-Developers/Tech_Phantoms_website)

### 2. Clone it

You need to clone (download) it to local machine using

```sh
$ git clone https://github.com/<YOUR_USERNAME>/Tech_Phantoms_website.git
```

> This makes a local copy of repository in your machine.

Once you have cloned the repository, move to that folder first using change directory command.

```sh
# This will change directory to a folder community-website
$ cd Tech_Phantoms_website
```

Move to this folder for all other commands.

### 3. Set it up

Run the following commands to see that *your local copy* has a reference to *your forked remote repository* in Github :octocat:

```sh
$ git remote -v
origin  https://github.com/<YOUR_USERNAME>/Tech_Phantoms_website.git (fetch)
origin  https://github.com/<YOUR_USERNAME>/Tech_Phantoms_website.git (push)
```

Now, lets add a reference to the original [community-website](https://github.com/Ninja-Developers/Tech_Phantoms_website) repository using

```sh
$ git remote add upstream https://github.com/Ninja-Developers/Tech_Phantoms_website
```

> This adds a new remote named ***upstream***.

See the changes using

```sh
$ git remote -v
origin    https://github.com/<YOUR_USERNAME>/Tech_Phantoms_website.git (fetch)
origin    https://github.com/<YOUR_USERNAME>/Tech_Phantoms_website.git (push)
upstream  https://github.com/Ninja-Developers/Tech_Phantoms_website.git (fetch)
upstream  https://github.com/Ninja-Developers/Tech_Phantoms_website.git (push)
```

### 4. Sync it

**If  you are a contributor, we recommend you to sync with development branch**
**Always keep your local copy of repository updated with the original repository.**
Before making any changes and/or in an appropriate interval, run the following commands *carefully* to update your local repository.

```sh
# Fetch all remote branches and/or tags from the remote repository and delete any deleted remote branches
$ git fetch --all --prune

# Switch to `development` branch
$ git checkout development

# Reset local `development` branch to match `upstream` repository's `development` branch
$ git reset --hard upstream/development

# Push changes to your forked `community-website` repo
$ git push origin development
```

### 5. You're Ready to Go

Once you have completed these steps, you are ready to start contributing by checking our Issues and creating [pull requests](https://github.com/Ninja-Developers/Tech_Phantoms_website/pulls).



### 6. Create a new branch
When you are working on a feature for the website, we recommend that you create a branch with following convention
Whenever you are going to make contribution. Please create seperate branch using command and keep your `development` branch clean and most stable version of your project (i.e. synced with remote branch).

```sh
# It will create a new branch with name feature-<FEATURE YOU ARE WORKING ON> and switch to that branch
$ git checkout -b feature-<FEATURE YOU ARE WORKING ON>
#Example
#$ git checkout -b feature-eventsPage
```


Create a separate branch for contribution and try to use same name of branch as of your contributing feature.

To switch to desired branch

```sh
# To switch from one branch to other
$ git checkout <BRANCH NAME>
#Example
#$ git checkout feature-eventsPage
```

To add the changes to the branch. Use

```sh
# To add all files to branch feature-<YOUR FEATURE>
$ git add .
```

Type in a message relevant for the code reviewer using

```sh
# This message get associated with all files you have changed
$ git commit -m 'relevant message'
```

Now, Push your awesome work to your remote repository using

```sh
# To push your work to your remote repository
$ git push -u origin <BRANCH NAME>
#Example
#$ git push -u origin feature-<YOUR FEATURE>
```

Finally, go to your repository in browser and click on `compare and pull requests`.
Then add a title and description to your pull request that explains your precious effort.

## Guidelines

- Issues will be assigned on a first come, first serve basis. You just have to comment on the issue, asking to be assigned, and it will be done if found fit.
- Preferably, you cannot work on any issue that is not assigned to you.
- In case you want to submit an improvement to an existing feature or section, we prefer that you create an issue, describing in details your improvement. This will help others to analyze your contribution.
- If you have anything else in mind, create an issue and please wait for it to be assigned to you. You can then start working on it and create a PR.
- All PRs must be made from a Branch. Create a separate branch for every Issue you are working upon and once found fit, make a PR.
- If you have no idea what are issues or PRs, please do refer to this link

**Make sure your code works before submitting it :D**

## ✨ Running it locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ✨ Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## ✨ Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## ✨ We Develop with Github
We use github to host code, to track issues and feature requests, as well as accept pull requests.

## ✨ We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests
Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## ✨ Any contributions you make will be under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## ✨ Report bugs using Github's [issues](https://github.com/briandk/transcriptase-atom/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](); it's that easy!

## ✨ Write bug reports with detail, background, and sample code


**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People *love* thorough bug reports. I'm not even kidding.

## ✨ Use a Consistent Coding Style
I'm again borrowing these from [Facebook's Guidelines](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)

* 2 spaces for indentation rather than tabs
* You can try running `npm run lint` for style unification

## ✨ License
By contributing, you agree that your contributions will be licensed under its MIT License.

## ✨ References
This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)

🌟 STAR AND FORK THE REPOSITORY FOR YOUR FUTURE REFERENCE.🌟
