// Including crypto module
const crypto = require('crypto');

// Implementing pbkdf2 with all its parameters
const pbkdf2 = () => {
	// Generate a random salt
	//const salt = crypto.randomBytes(16).toString('hex');
	const salt = 'f8b8af5be8c54defc5a4f4cee06d2a87'
	
	// Generate a random key of aes-128-cbc with 128-bit 
	const key = crypto.pbkdf2Sync('qwertyAzerty', salt, 1000, 16, 'sha512');
	//const key = crypto.pbkdf2Sync('qwertyazerty', salt, 2048, 128, 'sha512');
	// Return the salt and key
	return {
		salt: salt,
		key: key
	};
	/*const key = crypto.pbkdf2Sync('qwertyazerty', salt, 1000, 32, 'sha256').toString('hex');
	// Return the salt and key
	return {
		salt,
		key
	};*/
};

module.exports = pbkdf2;
//console.log(pbkdf2());
//console.log(pbkdf2().key.toString('hex'));
