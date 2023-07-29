export class Message {
  text: string;
  user: string;

  constructor({ text, user }: { text: string; user: string }) {
    this.text = text;
    this.user = user;
  }

  toString() {
    return JSON.stringify({
      text: this.text,
      user: this.user,
    });
  }
}
