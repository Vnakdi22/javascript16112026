 // Vérifier si un No de carte bancaire est valide 
 /*
 4111-1111-1111-1111 : pas valide car il y a des tirets 
 4111-1111-1111-111  : pas valide car manque un digit 
 4111 1111 1111 1112 : pas valide car le dernier chiffre faux 
 5555 5555 5555 4434 : pas valide car 1 chiffre faux
 1515 1515 1515 8464 : 58 non valide 
 4111 1111 1111 1111 : valide 
 8121 2121 2121 2121 = multiple de dix
*/


 let c = 'abcdefgh';
 for (let i=0; i<8; i++) {
 console.log(c.substring(i, i+1))
 }
 
 for (let i=7 ; i>=0; i--) {
    console.log(c.substring(i,i+1))

 }
 console.log(some%10===0?'Carte valide': 'Carte valide"');




 const numero = '5555 5555 5555 4444';

 for (i = numero.length-1 ; i>=0; i--) {let car = numero.substring(i, i+1)
    console.log(i, car);
 }
 let car = "3"
 console.log('0123456789'.indexOf(car));
 