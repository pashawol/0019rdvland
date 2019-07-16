 

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const path = 'public/img/';

imagemin([path + '*.{jpg,png}'], "images", {
	use: [
		imageminWebp({quality: 50})
	]
}).then(() => {
	console.log('Images optimized');
});