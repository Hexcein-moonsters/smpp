function add_splash_text(){
    console.log('added splash text')
    var login_app = document.querySelector('.login-app')
    var splash_text_element = document.createElement('div')
    login_app.prepend(splash_text_element)
    splash_text_element.classList.add('splashtextcontainer')
    splash_text_element.innerHTML = `<div class='splashtext'>${get_splash_text()}</div>`
}
let splashtexts = [
    `It even works under water!`,
    `Hoelang is een chinees.`,
    `404 Splashtext not found`,
    `Don't Smartschool and drive kids!`,
    `Home-made!`,
    `Pythagoras was used in this`,
    `Like that smash button!`,
    `What DOES the fox say?`,
    `Supercalifragilisticexpialidocious!`,
    `Hottentotententententoonstellingstereintjes`,
    `Not on steam!`,
    `Made in Belgium!`,
    `De L in frans staat voor leuk!`,
    `Doesn't contain nuts!`,
    `Glutenfree!!!`,
    `Colorblind approved!`,
    `Not vegan!`,
    `Never gonna give you up ;)`,
    `The cake is a lie!`,
    `I know what you did...`,
    `+1000 aura`,
    `What in the skibidi sigma?!`,
    `-3083870 aura points`,
    `Join de discord!`,
    `2 + 2 = 5`,
    `2 * 3 = 4`,
    `Listen to the Arctic Monkeys!`,
    `Global chat before GTA VI???`,
    `Water your plant(s)!`,
    `Check out Snake++!`,
    `Je suis une baguette`,
    `Dikke BMW!`,
    `Mand!`,
    `Net pindakaas gegeten dus...`,
    `BINGO!`,
    `GEKOLONISEERD!`,
    `Its free real estate`,
    `Europapa!`,
    `Made by Sprksoft!`,
    `Made by Lukas`,
    `Made by Bjarne`,
    `Made by Sibe`,
    `Not made in China!`,
    `How did we get here?`,
    `Aboo?!`,
    `Check out Insym!`,
    `Do your homework!`,
    `Look mom I'm in the splashtext!`,
    `[Insert funny splashtext]`,
    `Totally not ripping off Minecraft!`,
    `Yippieeee`,
    `Chop Suey!`,
    `Bayo Yayo Bayo Yayo!`,
    `AAAAAAAAA!!!`,
    `Is tHaT a sUpRA?!?!`,
    `English or Spanish?`,
    `Jennifer eet matrassen! WTF?`,
    `Listen to Amélie Farren!`,
    `"How to exit VIM???"`,
    `It's either Spanish or vanish`,
    `Are you hacking??`,
    `One eyed fighting Kirby :%s/\\(.*\\)`,
    `Shout it out :so`,
    `:3`,
    `Ma aleee ik word gekilled door ne kerstboom!`,
    `<s>SQL</s> Squil`,
    `undefined is not a function`,
    undefined

]
function get_splash_text() {
    return splashtexts[Math.floor(Math.random() * splashtexts.length)]
}
if (window.location.href.split('/')[3]=="login"){
    add_splash_text()
}
