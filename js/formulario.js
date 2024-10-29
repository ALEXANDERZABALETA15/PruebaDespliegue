document.getElementById('btn-registro').onclick = function() {
    document.getElementById('formulario').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
};

document.getElementById('cerrar').onclick = function() {
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
};

document.getElementById('overlay').onclick = function () {
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('overlay').style.display = 'none' ;
};