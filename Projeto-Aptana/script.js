/**
 * 
 */
/*
function assina() {
	
		  var rsa = new RSAKey();
		  rsa.readPrivateKeyFromPEMString(document.prvkey1.value);
		  var hashAlg = document.form1.hashalg.value;
		  var hSig = rsa.signString(document.msgsigned.value, hashAlg);
		  document.form1.siggenerated.value = linebrk(hSig, 64);
		
}


*/


/*
//função assina() funcionando!
function assina() {
  var rsa = new RSAKey();
  rsa.readPrivateKeyFromPEMString(document.form1.prvkey1.value);
  var hashAlg = document.form1.hashalg.value;
  var hSig = rsa.signString(document.form1.msgsigned.value, hashAlg);
  document.form1.siggenerated.value = linebrk(hSig, 64);
}

*/

function geraChaves(){
	
	var rsaKeypair = KEYUTIL.generateKeypair("RSA", 1024);
	var pk = rsaKeypair[0];
	document.form1.chave.value = linebrk(pk, 64);
	
}