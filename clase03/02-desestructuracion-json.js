const misRedes = {
	facebook: "https://facebook.com/mio",
	youtube: "https://youtube.com/mio",
	linkedin: "https://linkedin.com/mio"
}

/*
const facebook = misRedes.facebook;
const youtube = misRedes.youtube;
const linkedin = misRedes.linkedin;
*/

// let {facebook="no tiene", youtube="no tiene", linkedin="no tiene",instantgram="no tiene"} = misRedes);

let facebook,youtube,linkedin,instantgram;

({facebook="no tiene", youtube="no tiene", linkedin="no tiene",instantgram="no tiene"} = misRedes);

console.log(`Mis redes: ${facebook} ${youtube} ${linkedin} ${instantgram}`);

const tusRedes = {
	facebook: "https://facebook.com/tuyo",
	youtube: "https://youtube.com/tuyo",
	linkedin: "https://linkedin.com/tuyo",
	instantgram: "https://instantgram.com/tuyo"
};

({facebook="no tiene", youtube="no tiene", linkedin="no tiene",instantgram="no tiene"} = tusRedes);

console.log(`Tus redes: ${facebook} ${youtube} ${linkedin} ${instantgram}`);


