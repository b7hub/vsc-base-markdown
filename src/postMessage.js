const vscode = typeof acquireVsCodeApi !== "undefined" && acquireVsCodeApi();

class Poster {
  constructor() {
    this.initData();
    this.initListener();
  }

  initData() {
    this.subscriberMap = new Map();
  }

  initListener() {
    window.addEventListener("message", (event) => {
      const message = event.data;

      const subscriber = this.subscriberMap.get(message.command)

      if (!subscriber) return;

      subscriber(message);
    });
  }

  post(message = {}) {
    vscode && vscode.postMessage({
      ...message,
      command: "vsc-base-markdown",
    });
  }

  subscribe(command, handler) {
    this.subscriberMap.set(command, handler);
  }
}


export default Poster;
export const instance = new Poster();