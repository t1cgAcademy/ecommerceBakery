# Ecommerce Bakery
This project is an ongoing project being developed during T1CG WebDev meetups
held every second Wesdnesday of every month.

We hope to have meetup participants to review, play, and contribute to the project.

Below are some instructions and guidelines to help get you started.

Happy Coding :tada: :rocket: :metal:

-----

## Next Meetups' Task List
- [ ] Finish React FE Views (Home, Shop, Contact)
- [ ] Boiler Plate Node BE API and Create First Route to Get Shop Products
- [ ] Install MongoDB and Connect to API

-----

## Installation Guide

*Note*: When working with __Windows__ always install as administrator.

*Note*: All links will take you to websites with steps on how to install.

*Note*: If you run into errors, __Google__ is every developers best friend to help troubleshoot! Also your human best developer friends are great troubleshooting resources :hand:

Mac | Windows | Purpose
------------ | -------------
1. Install [Homebrew](https://brew.sh/) :beers: | 1. Install [Chocolatey](https://chocolatey.org/) :cake: | Package Manager for Installing Almost Everything!
2. [Install Node with Homebrew](https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew ) | 2. [Install Node with Chocolatey](https://chocolatey.org/packages/nodejs.install) | Installing Node will allow our machines to run javascript code as well install the O' So Important NPM (Node Package Manager)!
3. Install an IDE ([atom](https://atom.io/) or [visual studio code](https://code.visualstudio.com/))| Install an IDE ([atom](https://atom.io/) or [visual studio code](https://code.visualstudio.com/))| Allow us to manipulate and edit our source code as well as provide extra tools to support and ease programming work flows.
4. Install create-react-app `npm i create-react-app -g` | 4. Install create-react-app `npm i create-react-app -g` | Allow you to run create-react-app software.
5. [Install MongoDB with Homebrew](https://dbamohsin.wordpress.com/2017/05/02/installing-mongodb-on-a-mac-with-homebrew/) | 5. [Install MongoDB with Chocolatey](https://kjng.github.io/2017/05/17/mongodb-windows.html) <-- This guide is great to get you started but forgets an important step, the command to actually install mongo.  It's `choco install mongodb`| The database software we will be using for this application.
6. Intall Git with Homebrew `brew install git` | 6. [Intall Git with Chocolatey](https://www.jamessturtevant.com/posts/5-Ways-to-install-git-on-Windows/#using-chocolatey) | Git is our version control tool allowing us store our source code online and locally while also adding tooling for collaboration and historical versioning.
7. Clone this repository `git clone https://github.com/t1cgAcademy/ecommerceBakery.git` | Clone this repository `git clone https://github.com/t1cgAcademy/ecommerceBakery.git` | Now you have a version of the project source code on your local machine :smile:

---
## Git Guide

##### CREATE REPOSITORIES
Start a new repository or obtain one from an existing URL
```
$ git init [project-name]
Creates a new local repository with the specified name
$ git clone [url]
Downloads a project and its entire version history
```
##### CONFIGURE TOOLING
Configure user information for all local repositories
```
$ git config --global user.name "[name]"
Sets the name you want attached to your commit transactions
$ git config --global user.email "[email address]"
Sets the email you want attached to your commit transactions
$ git config --global color.ui
autoEnables helpful colorization of command line output
```
##### MAKE CHANGES
Review edits and craft a commit transaction
```
$ git status
Lists all new or modified files to be committed
$ git add [file]
Snapshots the file in preparation for versioning
$ git add . or $ git add -A
Snapshots all the files in preparation for versioning
$ git reset [file]
Unstages the file, but preserve its contents
$ git diff
Shows file differences not yet staged
$ git diff --staged
Shows file differences between staging and the last file version
$ git commit -m "[descriptive message]"
Records file snapshots permanently in version history
```
##### GROUP CHANGES
Name a series of commits and combine completed efforts
```
$ git branch
Lists all local branches in the current repository
$ git branch -b [branch-name]
Creates a new branch and switches you to that branch
$ git checkout [branch-name]
Switches to the specified branch and updates the working directory
$ git merge [branch]
Combines the specified branch’s history into the current branch
$ git branch -d [branch-name]
Deletes selected branch
```
##### SYNCHRONIZE CHANGES
Register a repository bookmark and exchange version history
```
$ git push [branch]
Uploads all local branch commits to GitHub
$ git pull
Downloads bookmark history and incorporates changes
$ git fetch [branch]
Downloads all history from the repository bookmark
$ git merge [branch]
Combines bookmark’s branch into current local branch
```
---
