'use strict';

document.addEventListener('DOMContentLoaded', function() {
    var red = document.createElement('div');
    var green = document.createElement('div');
    var blue = document.createElement('div');
    var style = document.createElement('link');
    
    style.setAttribute('href', 'style.css');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');
    document.head.appendChild(style);
    document.title = 'Recursion';
    
    red.setAttribute('class', 'red box');
    document.body.appendChild(red);
    
    fib(11, document.querySelector('.red'));
    
    green.setAttribute('class', 'green box');
    document.body.appendChild(green);
    
    pell(11, document.querySelector('.green'));
    
    blue.setAttribute('class', 'blue box');
    document.body.appendChild(blue);
    
    trib(11, document.querySelector('.blue'));
}, false);

function fibHelper(n) {
    var value;
    var div = document.createElement('div');
    
    if (n < 2) {
        if (n === 0) value = 0;
        else if (n === 1) value = 1;
        
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);
    } else {
        var left = fibHelper(n - 1);
        left.html.setAttribute('class', 'tree-left');
        var right = fibHelper(n - 2);
        right.html.setAttribute('class', 'tree-right');
        
        value = left.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);
        
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}

var fib = function(n, node) {
    var tree = fibHelper(n);
    node.appendChild(tree.html);
}

function pellHelper(n) {
    var value;
    var div = document.createElement('div');
    
    if (n < 2) {
        if (n === 0) value = 0;
        else if (n === 1) value = 1;
        
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);
    } else {
        
        var left = pellHelper(n - 1);
        left.html.setAttribute('class', 'tree-left');
        var right = pellHelper(n - 2);
        right.html.setAttribute('class', 'tree-right');
        
        value = 2 * left.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);
        
        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}

var pell = function(n, node) {
    var tree = pellHelper(n);
    node.appendChild(tree.html);
}

function tribHelper(n) {
    var value;
    var div = document.createElement('div');
    
    if (n < 3) {
        if (n === 0) value = 0;
        else if (n === 1) value = 1;
        else if (n === 2) value = 2;
        
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p);
    } else {
        
        var left = tribHelper(n - 1);
        left.html.setAttribute('class', 'tree-left');
        var center = tribHelper(n - 2);
        center.html.setAttribute('class', 'tree-center');
        var right = tribHelper(n - 3);
        right.html.setAttribute('class', 'tree-right');
        
        value = left.value + center.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p);
        
        div.appendChild(left.html);
        div.appendChild(center.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div };
}

var trib = function(n, node) {
    var tree = tribHelper(n);
    node.appendChild(tree.html);
}
