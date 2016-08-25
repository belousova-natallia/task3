
const MaxHeap = require('./max-heap.js');

class PriorityQueue {

	constructor(maxSize) {
		if(maxSize){
	this.maxSize = maxSize;
} else {
	this.maxSize = 30;


};
this.heap = new MaxHeap();
//this.arrayQueue = [];
	}

	push(data, priority) {
if(this.heap.arrayNodes.length === this.maxSize) {
	throw new Error;
};

this.heap.push(data, priority);

	}

	shift() {
if(this.heap.arrayNodes.length === 0){
	throw new Error;
}


//var arrayForShift = this.heap.arrayNodes.slice();

function SortByPriority(a, b){
	if(a.priority <= b.priority) return 1;
	else return -1;
}

 this.heap.arrayNodes.sort(SortByPriority);


//this.heap.arrayNodes = this.heap.arrayNodes.slice(0, this.heap.arrayNodes.length -2 );
 this.heap.pop();

 //this.heap.arrayNodes = this.heap.arrayNodes.slice(1);

 //for(var i = 0; i < this.heap.arrayNodes.length; i++){
//dataByPriority[i] = arrayForShift[i].data;

 //};
 //this.heap.pop();


//this.heap.arrayNodes.unshift(this.heap.arrayNodes[this.heap.arrayNodes.length -1]);
//this.heap.arrayNodes.pop();
return this.heap.detachRoot().data;

	}

	size() {
return this.heap.arrayNodes.length;
	}

	isEmpty() {
		if (this.heap.arrayNodes.length === 0) return true;
		else return false;
		
	}
}

module.exports = PriorityQueue;const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {

	}

	push(data, priority) {

	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
