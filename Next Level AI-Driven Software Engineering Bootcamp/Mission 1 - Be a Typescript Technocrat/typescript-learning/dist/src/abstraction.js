"use strict";
//* Abstraction - OOP - 3
Object.defineProperty(exports, "__esModule", { value: true });
/*
// * Using - Interface
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

class MusicPlayer implements MediaPlayer {
  play() {
    console.log("Play the music");
  }
  pause() {
    console.log("Pause the music");
  }
  stop() {
    console.log("Stop the music");
  }
}

const MyMusicPlayer = new MusicPlayer();
MyMusicPlayer.play();
*/
//* Using - Abstract
class AbstractMediaPlayer {
}
class MyAbstractMediaPlayer extends AbstractMediaPlayer {
    play() {
        console.log("Play 'Abstract' music");
    }
    pause() {
        console.log("Pause 'Abstract' music");
    }
    stop() {
        console.log("Stop 'Abstract' music");
    }
}
const MyAbstractPlayer1 = new MyAbstractMediaPlayer();
MyAbstractPlayer1.play();
MyAbstractPlayer1.pause();
MyAbstractPlayer1.stop();
//# sourceMappingURL=abstraction.js.map