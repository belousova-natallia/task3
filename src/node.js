class Node {
	constructor(data, priority) {
this.data = data;
this.priority = priority;
this.parent = null;
this.left = null;
this.right = null;

	}

appendChild(node) {
if (this.left === null) {
	this.left = node;
	this.left.parent = this;
}
else if (this.right === null && this.left !== null){
	this.right = node;
	this.right.parent = this;
}	
else {
	this.left = this.left;
	this.right = this.right};


}
	removeChild(node) {
if(this.left === node){
	node.parent = null;
	this.left = null;
	
}

else if(this.right === node){
	this.right = null;
	node.parent = null;
}
else if(this.left !== node && this.right !== node){
	throw new Error("Данные некорректны");
}

	}

	remove() {
if(this.parent !== null){
	this.parent.removeChild(this);
}
	}

	swapWithParent() {

if (this.parent === null){
	return;
}

 if(this.parent.parent !==null){
	if (this === this.parent.left && this.parent === this.parent.parent.left){

	this.parent.parent.left = this;
	this.parent.parent.left.left = this.parent;
	this.parent = this.parent.parent;

}

else if (this === this.parent.left && this.parent === this.parent.parent.right){
	this.parent.parent.right = this;
	this.parent.parent.right.left = this.parent;
	this.parent = this.parent.parent;
}

}

else if (this.parent.parent === null && this === this.parent.left ){
	if(this.left){
		this.parent.left = this.left
	}
	this.left = this.parent;
	this.parent.parent = this;
	
	if(this.parent.right){
	this.parent.right.parent = this;
	this.right = this.parent.right;
	}

	
}
else if(this.parent.parent === null && this === this.parent.right){
	this.right = this.parent;
	this.parent.parent = this;
	this.parent.right = this.right;
	if(this.parent.left){
	this.parent.left.parent = this;
	this.left = this.parent.left;
}
}
/*
this.parent = this.parent.parent;
this.left = this.parent.left;
this.right = this.parent.right;
this.parent.parent = this;
this.parent.left = this.left;
this.parent.right = this.right;
*/
}
}
module.exports = Node;
