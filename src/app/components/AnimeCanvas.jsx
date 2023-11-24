import anime from "animejs";

const paleColors = [
  "rgba(219, 237, 255, OPACITY)", // Tailwind blue-100
  "rgba(255, 240, 231, OPACITY)", // Tailwind orange-100
  "rgba(255, 245, 232, OPACITY)", // Tailwind yellow-100
  "rgba(237, 250, 244, OPACITY)", // Tailwind green-100
  "rgba(245, 243, 255, OPACITY)", // Tailwind indigo-100
  "rgba(237, 233, 254, OPACITY)", // Tailwind purple-100
  "rgba(253, 242, 248, OPACITY)", // Tailwind pink-100
];

export default function AboutSection() {
  const cursor = {
    x: 0,
    y: 0,
  };
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    });
    const canvas = document.getElementById("animeCanvas");
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const bubbles = [];

    for (let i = 0; i < 50; i++) {
      const randomColor = paleColors[
        Math.floor(Math.random() * paleColors.length)
      ].replace("OPACITY", (Math.random() * 0.9 + 0.1).toString());

      bubbles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 100,
        swing: Math.random() * 1 + 0.1,
        radius: Math.random() * 300 + 10,
        speed: Math.random() + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: randomColor,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        const distance = Math.sqrt(
          (b.x - cursor.x) ** 2 + (b.y - cursor.y) ** 2
        );
        const maxCursorEffectRadius = 300; // change this value as needed
        if (distance < maxCursorEffectRadius) {
          const dx = b.x - cursor.x;
          const dy = b.y - cursor.y;
          // console.log("Distance:", distance, "DX:", dx, "DY:", dy);
          const adjustFactor = 0.01; // this determines how quickly the bubble moves away
          b.x += dx * adjustFactor;
          b.y += dy * adjustFactor;
        }
        ctx.beginPath();
        ctx.arc(
          b.x - b.radius / 3,
          b.y - b.radius / 3,
          b.radius / 4,
          0,
          2 * Math.PI
        );
        const gradient = ctx.createRadialGradient(
          b.x,
          b.y,
          0,
          b.x,
          b.y,
          b.radius
        );
        gradient.addColorStop(0, b.color.replace("OPACITY", "1"));
        gradient.addColorStop(0.5, b.color.replace("OPACITY", "0.5"));
        gradient.addColorStop(1, b.color.replace("OPACITY", "0"));
        ctx.fillStyle = gradient;

        ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;

        ctx.fill();

        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        if (b.y < -100) {
          b.y = canvas.height + 100;
          b.x += Math.sin(b.y * 0.01) * b.swing; // Adjusted the multiplier
        }
      }

      anime({
        targets: bubbles,
        y: function (b) {
          return b.y - b.speed;
        },
        x: function (b) {
          return b.x + Math.sin(b.y * 0.01) * b.swing; // Adjusted the multiplier
        },
        duration: 10,
        easing: "linear",
        complete: animate,
      });
    }

    animate();

    return () => {
      anime.remove(bubbles);
      document.removeEventListener("mousemove", (e) => {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
      });
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
}
