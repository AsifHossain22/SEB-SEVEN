//* Abstraction - OOP - 3

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
abstract class AbstractMediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class MyAbstractMediaPlayer extends AbstractMediaPlayer {
  play(): void {
    console.log("Play 'Abstract' music");
  }
  pause(): void {
    console.log("Pause 'Abstract' music");
  }
  stop(): void {
    console.log("Stop 'Abstract' music");
  }
}

const MyAbstractPlayer1 = new MyAbstractMediaPlayer();
MyAbstractPlayer1.play();
MyAbstractPlayer1.pause();
MyAbstractPlayer1.stop();
