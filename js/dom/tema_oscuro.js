const d = document;
const ls = localStorage;

export default function darkTheme(btn, classDark) {

    const $themeBtn = d.querySelector(btn),
          $selctors = d.querySelectorAll('[data-dark]');

    let moon = '🌙',
        sun = '☀️';    
        
    const lighMode = () => {
        $selctors.forEach(el => el.classList.remove(classDark));
            $themeBtn.textContent = moon;
            ls.setItem('theme','light');
    };
    const darkMode = () => {
        $selctors.forEach(el => el.classList.add(classDark));
            $themeBtn.textContent = sun;
            ls.setItem('theme', 'dark');
    };

d.addEventListener('click', e => {
    if(e.target.matches(btn)){
        if($themeBtn.textContent === moon){
            darkMode();
        }else {
           lighMode();
        }
    }    
});
d.addEventListener('DOMContentLoaded', e => {
    if(ls.getItem('theme') === null) ls.setItem('theme','light');

    if(ls.getItem('theme') === 'light') lighMode();

    if(ls.getItem('theme') === 'dark') darkMode();
});
};