const PIXI = require("pixi.js");

const app = new PIXI.Application({
  width: 256,
  height: 256,
  backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);

PIXI.Loader.shared.add("./ferris.png").load(setup);

function setup() {
  const Sprite = PIXI.Sprite;

  const ferris1 = new Sprite(
    PIXI.Loader.shared.resources["./ferris.png"].texture
  );
  ferris1.x = 100;
  ferris1.y = 100;

  const ferris2 = new Sprite(
    PIXI.Loader.shared.resources["./ferris.png"].texture
  );
  ferris2.x = 166;
  ferris2.y = 166;

  ferris1.scale.set(0.9);
  ferris2.scale.set(0.7);
  ferris2.anchor.set(0.5);

  app.stage.addChild(ferris1);
  app.stage.addChild(ferris2);

  app.ticker.add((delta) => {
    ferris1.rotation -= 0.01 * delta;
    ferris2.rotation += 0.01 * delta;
  });
}
