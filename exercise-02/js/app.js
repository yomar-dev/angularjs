var app = angular.module('universityApp', []);

app.controller('teacherCtrl', function(){
    this.teacher = teacherData;
});

var teacherData = {
	name: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	age: 47,
	image: "img/juancarlos.jpg"
}