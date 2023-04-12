class LinkedList {
    constructor() {
        this._head = null;
        this._size = null;
    }

    append(value) {
        const item = new Node(value);
        if (this._head === null) { 
            this._head = item;
        } else {
            this.tail().nextNode = item;
        }
        this._size ++;
    }

    prepend(value) {
        const item = new Node(value, this._head);
        this._head = item;
        this._size ++;        
    }

    size() {
        return this._size;
    }

    head() {
        return this._head;
    }

    tail() {
        let item = this.at(this._size - 1);
        return item;
    }

    at(index) {
        if (index < 0 || index >= this._size) return null;
        let item = this._head;
        for (let i = 0; i < index; i++) {
            item = item.nextNode;
        }
        return item;
    }

    pop() {
        let item = this.at(this._size - 2);
        item.nextNode = null;
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
        let str = '';
        while (item !== null) {
            str += `( ${item.value} ) -> `;
            item = item.nextNode;
        }        
        return str + 'null';
    }

    insertAt(value, index) {
        if (index === 0) this.append(value);
        let prevItem = this.at(index - 1);   
        if (prevItem === null) return null;     
        prevItem.nextNode = new Node(value, prevItem.nextNode);
        this._size ++;
    }

    removeAt(index) {
        if (index === 0) return this._head = this._head.nextNode;
        let prevItem = this.at(index - 1);
        if (prevItem === null) return null;
        prevItem.nextNode = prevItem.nextNode.nextNode;
        this._size --;
    }
}

class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
