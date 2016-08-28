
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
	throw new Error("чыап");
}


//var arrayForShift = this.heap.arrayNodes.slice();

function SortByPriority(a, b){
	if(a.priority < b.priority) return 1;
	else return -1;
}

 this.heap.arrayNodes.sort(SortByPriority);
 var result = (this.heap.arrayNodes).slice(0,1);


this.heap.pop();

//(this.heap.arrayNodes).sort(SortByPriority);
if((this.heap.arrayNodes).length < 4){
//(this.heap.arrayNodes).splice(0,1);
}


 

return result[0].data;

	}

	size() {
		
return this.heap.arrayNodes.length;
	}

	isEmpty() {
		if (this.heap.arrayNodes.length === 0) return true;
		else return false;
		
	}
}

module.exports = PriorityQueue;
