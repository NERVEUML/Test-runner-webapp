# Running on local Machine
Assume anything after a "$" you can copy into a terminal to run
## For MAC OS

### PREP :
* Do you have hombrew ? ( try: typing the word brew in terminal)
  - if not $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* then install node by:
  - $ brew install node
* verify node is installed ( if npm dose not work you might need to brew install 
  - $ node -v 
  - $ npm -v
* As long as you get version numbers from that you are all set 
### BUILDING FOR RUNINNG 
* now clone this repo with git:
  - $ git clone git@github.com:NERVEUML/Test-runner-webapp.git
  - change to the adirectory with $ cd Test-runner-webapp
  - run $ npm install -g serve browserify 
  - if it fails you can try it with sudo 
* run $ npm install 
* run $ npm run build 
### RUN ON MACHINE
* finally $ npm run start
