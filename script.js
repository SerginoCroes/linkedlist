class LinkedList {
    constructor() {
        this._head = null;
        this._size = null;
    }

    append(value) {
        const item = new Node(value);
        this._size ++;
        if (this._head === null) { 
            this._head = item;
        } else {
            this.tail().nextNode = item;
        }
    }

    prepend(value) {
        const item = new Node(value);
        this._size ++;
        item.nextNode = this._head;
        this._head = item;
    }

    size() {
        return this._size;
    }

    head() {
        return this._head;
    }

    tail() {
        let item = this._head;
        while (item.nextNode !== null) {
            item = item.nextNode;
        }
        return item;
    }

    at(index) {
        let item = this._head;
        let counter = 0;
        while (counter < index && item.nextNode !== null) {
            item = item.nextNode;
            counter ++;
        }
        return item;
    }

    pop() {
        let item = this._head;
        if (item.nextNode === null) {
            this._head = null;
            this._size --;
            return item
        }
        let prevItem = null;
        while (item.nextNode !== null) {
            prevItem = item;
            item = item.nextNode;
        }
        this._size --;
        prevItem.nextNode = null;
        return item;
    }

    contains(value) {
        let item = this._head;
        if (item.value === value) return true;
        while (item.nextNode !== null) {
            item = item.nextNode;
            if (item.value === value) return true;
        }
        return false;
    }

    find(value) {
        let item = this._head;
        let count = 0
        if (item.value === value) return count;
        while (item.nextNode !== null) {
            item = item.nextNode;
            count ++;
            if (item.value === value) return count;
        }
        return null;
    }

    toString() {
        let item = this._head;
        let str = `( ${item.value} ) -> `
        while (item.nextNode !== null) {
            item = item.nextNode;
            str += `( ${item.value} ) -> `
        }
        str += 'null'
        return str;
    }
}

class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

/* class LinkedList {
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
        if (curNode === null) return null;          //no nodes
        let prevNode = null;

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

    insertAt(value, index) {
        let curNode = this._head;
        for (let i = 0; i < index; i++) {
            console.log(curNode);
            if (curNode.nextNode !== null) curNode = curNode.nextNode;
        }
        curNode.nextNode = new Node(value, curNode.nextNode);
    }

    removeAt(index) {

    }
} */