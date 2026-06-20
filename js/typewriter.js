/* ============================================================
   TYPEWRITER.JS — Hero Typewriter Effect
   ============================================================ */

class Typewriter {
  constructor(el, words, opts = {}) {
    this.el       = el;
    this.words    = words;
    this.speed    = opts.speed    ?? 80;
    this.delete   = opts.delete   ?? 50;
    this.pause    = opts.pause    ?? 2000;
    this.wordIdx  = 0;
    this.charIdx  = 0;
    this.deleting = false;
    this._tick();
  }

  _tick() {
    const word    = this.words[this.wordIdx % this.words.length];
    const current = this.deleting
      ? word.slice(0, this.charIdx--)
      : word.slice(0, this.charIdx++);

    this.el.textContent = current;

    let delay = this.deleting ? this.delete : this.speed;

    if (!this.deleting && this.charIdx > word.length) {
      delay = this.pause;
      this.deleting = true;
    } else if (this.deleting && this.charIdx < 0) {
      this.deleting = false;
      this.charIdx  = 0;
      this.wordIdx++;
      delay = 400;
    }

    setTimeout(() => this._tick(), delay);
  }
}

window.Typewriter = Typewriter;
