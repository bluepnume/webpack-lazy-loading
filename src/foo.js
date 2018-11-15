
export function foo() {
    console.log('foo123');

    import('./bar').then(function(mod) {
        mod.lazyBar();
    });

    import('./baz').then(function(mod) {
        mod.lazyBaz();
    });
}

export function lazyFoo() {
    console.log('lazyfoo123');
}