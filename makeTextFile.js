var fs = require('fs'); 

var str = ''; 

for (var i = 0, line = 0; i < process.argv[3]; i ++) {
	if (line < 10) {
		str = str + String.fromCharCode(Math.floor(Math.random() * 25) + 97); 
		line ++; 
	} else {
		line = 0;
		str = str + '\n' + String.fromCharCode(Math.floor(Math.random() * 25) + 97);  
	}
}

fs.writeFileSync(process.argv[2], str); 
