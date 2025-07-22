import gsap from 'gsap';

// Animation for the main
//fait une timeline pour les animations qui sont déja faites
const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });
tl.from("h1", { y: -100, opacity: 0 })
    .from("#pp", {duration: 2, x: -100, rotation: 90, opacity: 0, ease: "power2.out"})
    //faire gauche et droite en même temps
    .from("#gauche", {duration: 1, x: -100, opacity: 0, ease: "power2.out"})
    .from("#droite", {duration: 1, x: 100, opacity: 0, ease: "power2.out"}, "<")
    .from("footer", { duration: 2, y: 100, opacity: 0, ease: "power2.out" });