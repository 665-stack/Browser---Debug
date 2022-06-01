const getUserDigit = () => {
    const userinput = prompt('How much money you spent for your crush ever. Let us know for nothing.');
    const parseUserInput = parseInt(userinput);
    const result = parseUserInput + 200;
    alert(result)
}

