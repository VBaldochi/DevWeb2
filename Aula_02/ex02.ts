namespace ex02 {
    let trab: number;
    let aval: number;
    let exam: number;

    trab = 8;
    aval = 8;
    exam = 7;

    let medp: number = ((trab*2)+(aval*3)+(exam*5))/10;
    console.log(`O aluno obteve média ${medp}`);

    if (medp >= 8 && medp <= 10) {
        console.log('Conceito A');
    } else if (medp >= 7 && medp < 8) {
        console.log('Conceito B')
    } else if (medp >= 6 && medp < 7) {
        console.log('Conceito C')
    } else if (medp >= 5 && medp < 6) {
        console.log('Conceito D')
    } else if (medp >= 0 && medp < 5) {
        console.log('Conceito E')
    };

}