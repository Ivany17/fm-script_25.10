class Stack{
    constructor(maxSize=5, ...args){
        this.maxSize = maxSize;
        this.size = 0;
        for (const argument of args) {
            this.push(argument);
        }
    }
    get size(){
        return this._size;
    }
    get isEmpty(){
        return this._size===0;
    }
    push(argument){
        if(this.size>=this.maxSize){
            throw new RangeError('Stack overflow!');
        }
        this[`_${this.size}`] = argument;
        this._size++;
        return this.size;
    }
    pick(){
        return this[`_${this.size-1}`];
    }
    pop(){
        if(this.isEmpty){
            return;
        }
        const lastItem = this[`_${this.size-1}`];
        delete this[`_${this.size-1}`];
        this._size--;
        return lastItem;
    }
}
const stack1 = new Stack(3);


const options = {
    brackets:{
        '(':')',
        '[':']',
        '{':'}',
    },
    isStrict: false,
}


const checkSequence = (str, options)=>{
    const brackets = options.brackets;
    const stack = new Stack(str.length);
    for (const symbol of str) {
        if(brackets[symbol]){
            stack.push(symbol);
        }
        if(stack.isEmpty){
            return false;
        }
        const lastBracketOfStack = stack.pick();
        const correctBracket = brackets[lastBracketOfStack];
        if(symbol===correctBracket){
            stack.pop();
        }else{
            return false;
        }
    }
    return stack.isEmpty;
}

console.log(checkSequence('()()()()', options));