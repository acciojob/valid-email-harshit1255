function validEmail(str) {
  //your JS code here.
	if(str.charAt(0)==='@' || str.charAt(str.legth-1)==='.'
	  || !str.includes('@') || !str.includes('.')
	  ||str.length===0 || str.indexOf('@')>str.indexOf('.'))
		return false;
	return true;
	
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
