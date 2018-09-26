const token = localStorage.getItem('my-jwt');

if (!token) {
	window.location = '/login';
}