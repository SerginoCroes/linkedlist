class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
    }

    append(value) {        
        const newNode = new Node(value);
        if (this._tail !== null) this._tail.nextNode = newNode;
        if (this._head === null) this._head = newNode;
        this._tail = newNode;        
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this._tail !== null) newNode.nextNode = this._head;
        if (this._tail === null) this._tail = newNode;
        this._head = newNode;
    }

    size() {
        if (this._head === null) return 0;
        let curNode = this._head;
        let cnt = 1;
        while (curNode.nextNode !== null) {
            cnt++;
            curNode = curNode.nextNode;
        }
        return cnt;
    }

    head() {
        return this._head;
    }

    tail() {
        return this._tail;
    }

    at(index) {
        let curNode = this._head;
        for (let i = 0; i < index; i++) {
            if (curNode.nextNode === null) return null;
            curNode = curNode.nextNode;
        }
        return curNode;
    }

    pop() {
        let curNode = this._head;
        let retNode = null;
        if (curNode === null) return null;          //no nodes
        if (curNode.nextNode === null) {            //last node
            this._head = null;
            this._tail = null;
            return curNode;
        }
        while (curNode.nextNode.nextNode !== null) { //iterate through nodes
            curNode = curNode.nextNode;
        }
        retNode = curNode.nextNode;
        this._tail = curNode;
        curNode.nextNode = null;
        return retNode;        
    }

    contains(value) {
        let curNode = this._head;
        while (curNode !== null) {
            if (curNode.value === value) return true;
            curNode = curNode.nextNode;
        }
        return false;
    }

    find(value) {
        if (this._head === null) return null;
        let curNode = this._head;
        let cnt = 0;
        while (curNode.value !== value && curNode.nextNode !== null) {
            cnt++;
            curNode = curNode.nextNode;
        }
        if (curNode.value === value) return cnt;
        return null;
    }

    toString() {
        let curNode = this._head;
        let string = '';
        while (curNode !== null) {
            string += `( ${curNode.value} ) -> `
            curNode = curNode.nextNode;
        }
        string += 'null';
        return string;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}