/* 
  alert ==> user ke kono akta kicu janano.
  confirm ==> user ke kono akta kicu ask kore. je tumi ki eta korte cao naki cao na. Then use ki response kortece sheta diye onk kicu kora jete pare.
  prompt ==> User er kas theke input er maddome kicu akta neya.
*/

const ammoComing = () => {
    alert('Ammo is coming. Start study now.')
}
const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bKash kore de')
    }
    else {
        alert('dure giya mor');
    }
}
const askName = () => {
    const name = prompt('What is your name?')
    if (name) {
        console.log(name);
    }
}