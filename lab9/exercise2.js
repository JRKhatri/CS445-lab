class Subject{
    observer= {};

    on(act, fn){
        
        if(!(this.observer[act])){
            this.observer[act] = [fn];
        } else {
            this.observer[act].push(fn);
        }

    }
    emit(act, msg){
        
        if(this.observer[act] ){
            this.observer[act].forEach(fn => fn(msg));

        }
    }
    off(act, fn){
        
            this.observer[act] = this.observer[act].filter(elemFn => elemFn !== fn)
    }
}

const subject = new Subject();
subject.on('eat', console.log);
subject.on('study', console.log);

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
subject.emit('study', 'cs445');
//output
// Corn
// foo: Corn
// cs445
// foo: cs445
subject.off('eat', foo);
subject.emit('eat', 'Banana');
//output
//Banana