CANDY-CATCH
===========
(Play [HERE](http://craigprotzel.github.io/candy-catch/))

#### Built with:
* [p5JS](http://p5js.org/)
* [p5.play](http://p5play.molleindustria.org/)

#### Setup:
* Download an IDE such as:
	* [Visual Studio Code](https://code.visualstudio.com/)
	* [Sublime Text](http://www.sublimetext.com/3)
	* [Brackets](http://brackets.io/)
	* [Atom](https://atom.io/)

* Create initial file structure
	* download this github repo

#### Coding Steps:
* Create the canvas and the main player
	* `createCanvas()`
	* `createSprite()`
	* call `drawSprites()` inside the `draw()` function to display the player
	* tie the position of the player to the position of the mouse

* Create the candies
	* create a `Group` to store the candies, which is similar to an array
	* use a `for loop` to create multiple candies and `add` them into the Group

* Setup collision logic
	* use the `.collide()` method to check when the player hits a candy
	* define a `callback` function that runs when a collision occurs
	* in the `callback`, remove the candy that was hit and increment the score

* Add game mechanics
	* add timer logic
	* add win/lose logic
	* add restart logic

* Extras
	* use a [local host](https://github.com/processing/p5.js/wiki/Local-server) to serve the sketch
	* add images for the player character and the candies
	* add sounds
	* incorporate a "leveling up" when a win occurs
