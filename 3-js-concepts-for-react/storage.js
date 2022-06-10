localStorage.setItem('userId', 3233233);

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    // set localStorage
    if (id && value) {
        localStorage.setItem(id, value)
    }

    // clear input field
    idInput.value = '';
    valueInput.value = '';
}
// amra kinto just choto choto key value ei local storage rakte pari amon ta ne. caile array, object o rakte pari. array or object rakte caile JSON.stringify kore rakte hobe.
const arr = [23, 32, 44, 2323, 33, 55];
const obj = {
    name: 'shahin',
    id: '23',
    family: {
        sisterName: 'mim',
        motherName: 'shirin',
        fatherName: 'milon'
    },
    favItem: ['mobile', 'laptop', 'computer']
}
localStorage.setItem('array', JSON.stringify(arr))
localStorage.setItem('object', JSON.stringify(obj))