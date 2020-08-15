const d = document, w = window;

export default function scrollTopBtn(btn){

    const $scrollBtn= d.querySelector(btn);

    w.addEventListener('scroll', e => {

        let scrolTop = w.pageYOffset || d.documentElement.scrollTop;
        if(scrolTop > 600){
            $scrollBtn.classList.remove('hidden');
        }else {
            $scrollBtn.classList.add('hidden');
        }
    });
    d.addEventListener('click', e => {
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: 'smooth',
                top: 0
            })
        }
    });

}