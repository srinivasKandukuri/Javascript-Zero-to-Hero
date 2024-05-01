/*
Liskov Substitution Principle (LSP):
Subtypes should be substitutable for their base types without affecting the correctness of the program.
In JavaScript, this means that derived classes should be able to replace their base classes without changing the behavior of the program.
Ensuring that subclasses adhere to the same contract and don't violate the expected behavior of the base class helps maintain LSP.

*/



// EX:1

//wrong
class Bird{
    fly(){

    }
}


class Eagle extends Bird{
    dive(){

    }
}


const eagle = new Eagle();
eagle.fly();
eagle.dive();

class Penguin extends Bird(){
    // Problem : can't fly!
}


// Correct way
class Bird {
    layEgg(){
        //...
    }
}

class FlyingBird{
    fly(){

    }
}


class Eagle extends Bird {
    layEgg(){
        //..
    }
}




// EX:2

class MediaPlayer {
    play() {
        // Play media
    }
}

class AudioPlayer extends MediaPlayer {
    play() {
        // Play audio
    }
}

class VideoPlayer extends MediaPlayer {
    play() {
        // Play video
    }
}
