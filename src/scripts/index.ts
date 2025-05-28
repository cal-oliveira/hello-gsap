import gsap from "gsap";

gsap.to("box", {
  x: 300, // Move 300px no eixo x
  duration: 2, // Dura 2 segundos
  ease: "power1.out", // Tipo de aceleração
});
