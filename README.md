#Rea Robot Simulator

A toy robot simulator written in Node.js 
It moving on a square tabletop with dimension 5 units x 5 units.

## Installation & usage

#### System Dependencies & Configuration

To run the app, you'll need:

* [Node.js](https://nodejs.org/en/download/), an open-source, cross-platform runtime environment for developing server-side web applications.     
* [npm](https://www.npmjs.com/), a package manager for the Node.js server platform. Node.js comes with npm installed.   

Next,
download this directory from GitHub. Open your command prompt and point to the directory to install the it.
Make sure you are connect to network. 

You can change the ```instructions.txt``` 's content by refer Instruction command format section

```sh
$ npm install
$ npm start  
or
$ node bin/ReaRobot.js {your instructions text file with extension .txt}
```

## Instruction command format

The simulator only accepts .txt files, with one command per line. The commands available are:

- **PLACE X, Y, DIRECTION :** Place the robot on the table.eg: ```PLACE 0,1,NORTH```.
If you are put out of the table top. It will show the error, eg: ```PLACE 0,-1,NORTH```.
When the robot place successfully, It will show the success message also.

- **MOVE:** Move the robot one unit in the direction it is facing
If the robot move out of the table. It will also show the error and tell you which number of step cause the robot move out of the box.
- **LEFT:** Turn the robot left
- **RIGHT:** Turn the robot right
- **REPORT:** Report the current position and direction of the robot,  ```Output:3,3,NORTH```.

The table is a 5x5 grid, and any command that would result in the robot being off the table will show the error message to you.

## Dependencies

When you run ```npm install```, it will auto install this dependencies.
- [cli-color](https://github.com/medikoo/cli-color)

##Tests
```
npm install -g jasmine
```

### Run application with test data
Test input files are available in ```testData```. 
```
node bin/ReaRobot.js testData/commands_1.txt
node bin/ReaRobot.js testData/commands_2.txt
node bin/ReaRobot.js testData/commands_3.txt
node bin/ReaRobot.js testData/commands_4.txt
node bin/ReaRobot.js testData/commands_5.txt
node bin/ReaRobot.js testData/commands_6.txt
```

### Run test
```
npm test
```