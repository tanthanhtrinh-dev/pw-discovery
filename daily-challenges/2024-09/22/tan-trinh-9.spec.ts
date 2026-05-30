//Javascript
// đếm số từ có trong chuỗi

function countWords(word: string) {
    //Trim
    word = word.trim();

    // Slit word bỏ nhiều hơn 1 khoảng trắng giữa 2 từ
    const words = word.split(/\s+/);

    if (words[0] === '') {
        return 'Số từ: 0'
    }

    return `Số từ: ${words.length}`;

}

console.log(countWords('   '))
console.log(countWords(' Hello  world'))