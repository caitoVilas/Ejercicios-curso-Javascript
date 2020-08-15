const d = document, w = window;

export default function responsiveMedia(id,mq,mobileContent, desktopContext){

    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        if(e.matches) {
            d.getElementById(id).innerHTML = desktopContext;
        } else {
            d.getElementById(id).innerHTML = mobileContent;
        }
    }
    breakpoint.addListener(responsive);
    responsive(breakpoint);
}