'use strict';

document.addEventListener('DOMContentLoaded', function() {
    updateBtn('fib');
    updateBtn('pell');
    updateBtn('trib');
}, false);

function updateBtn(source) {
    var upper = source[0].toUpperCase() + source.slice(1, source.length);
    var sliderVal = document.getElementById(source + 'Slider').value;
    document.getElementById('gen' + upper).innerHTML = 'Generate ' + upper + '(' + sliderVal + ')';
}

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

var fib = function() {
    var n = document.getElementById('fibSlider').value;
    var node = document.querySelector('.red');
    node.innerHTML = "";
    
    var tree = fibHelper(n);
    node.appendChild(tree.html);
    node.setAttribute('style', 'width: ' + (220 / n * Math.pow(1.8, n)) + 'px;');
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
    var n = document.getElementById('pellSlider').value;
    var node = document.querySelector('.green');
    node.innerHTML = "";
    
    var tree = pellHelper(n);
    node.appendChild(tree.html);
    node.setAttribute('style', 'width: ' + (230 / n * Math.pow(1.8, n)) + 'px;');
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
    var n = document.getElementById('tribSlider').value;
    var node = document.querySelector('.blue');
    node.innerHTML = "";
    
    var tree = tribHelper(n);
    node.appendChild(tree.html);
    node.setAttribute('style', 'width: ' + (300 / n * Math.pow(1.9, n)) + 'px;');
}
