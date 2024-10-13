class Events {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    trigger(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => {
                callback();
            });
        }
    }

    off(eventName) {
        delete this.events[eventName];
    }
}

module.exports = Events;