const clickBtn = () => {
    const userCommand = confirm('Do you want to see the location of your website?');
    if (userCommand === true) {
        console.log(location.href);
    }
    else {
        return;
    }

}