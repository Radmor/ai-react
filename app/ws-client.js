import io from 'socket.io-client';

class WSClient {
  constructor(wsURL) {
    this.io = io(wsURL);
    this.listeners = {};

    this.io.on('connect', (e) => {
    });

    this.io.on('rooms:added', this.callListeners.bind(this, 'rooms:added'));
    this.io.on('rooms:updated', this.callListeners.bind(this, 'rooms:updated'));
    this.io.on('rooms:deleted', this.callListeners.bind(this, 'rooms:deleted'));
    this.io.on('message:added', this.callListeners.bind(this, 'message:added'));
  }

  on(eventName, callback) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].push(callback);
    } else {
      this.listeners[eventName] = [callback]
    }
  }

  off(eventName, callback) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].filter((listener) => {
        return listener !== callback;
      });
    }
  }

  callListeners(eventName, ...args) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach((listener) => {
        listener.apply(listener, args);
      });
    }
  }

  send(name, data) {
    this.io.emit(name, data);
  }

}

export default new WSClient('ws://devcollege_react.devmerix.com:3000');
