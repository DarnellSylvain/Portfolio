const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

imagemin(["images/*.{jpg,png}"], {
	destination: __dirname + "/images/",
	plugins: [
		imageminWebp({
			quality: 75,
			resize: {
				width: 1000,
				height: 0,
			},
		}),
	],
}).then(() => {
	console.log("Images optimized");
});
