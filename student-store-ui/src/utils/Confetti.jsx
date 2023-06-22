import confetti from "canvas-confetti";

const count = 200;
const defaults = {
  origin: { y: 0.7 },
};

const fire = async (
  particleRatio,
  opts
) => {
  await confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
};

const Confetti = async () => {
  await fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
};

export default Confetti;