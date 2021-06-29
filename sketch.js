var boy1, boy2, boy3, boy4;
var boy2Animation, boy2Animation, boy3Animation, boy4Animation, bgImage, bg;;
var wall, tracker1, tracker2, tracker3, tracker4;

function preload() {

    boy1Animation = loadAnimation("Run__000.png", "Run__001.png",
        "Run__002.png", "Run__003.png",
        "Run__004.png", "Run__005.png",
        "Run__006.png", "Run__007.png",
        "Run__008.png", "Run__009.png");
    boy2Animation = loadAnimation("Run__000.png", "Run__001.png",
        "Run__002.png", "Run__003.png",
        "Run__004.png", "Run__005.png",
        "Run__006.png", "Run__007.png",
        "Run__008.png", "Run__009.png");
    boy3Animation = loadAnimation("Run__000.png", "Run__001.png",
        "Run__002.png", "Run__003.png",
        "Run__004.png", "Run__005.png",
        "Run__006.png", "Run__007.png",
        "Run__008.png", "Run__009.png");
    boy4Animation = loadAnimation("Run__000.png", "Run__001.png",
        "Run__002.png", "Run__003.png",
        "Run__004.png", "Run__005.png",
        "Run__006.png", "Run__007.png",
        "Run__008.png", "Run__009.png");
    bgImage = loadImage("brick_wall.png");
}

function setup() {
    createCanvas(displayWidth - 50, displayHeight - 200);

    bg = createSprite(500, 300)
    bg.addImage("bg", bgImage, displayWidth - 50, displayHeight - 200)
    bg.scale = 5


    boy1 = createSprite(10, 100)
    boy1.addAnimation("boy1Animation", boy1Animation)
    boy1.scale = 0.2
    boy2 = createSprite(10, 220)
    boy2.addAnimation("boy2Animation", boy2Animation)
    boy2.scale = 0.2
    boy3 = createSprite(10, 340)
    boy3.addAnimation("boy3Animation", boy3Animation)
    boy3.scale = 0.2
    boy4 = createSprite(10, 460)
    boy4.addAnimation("boy4Animation", boy4Animation)
    boy4.scale = 0.2

}

function draw() {

    background("bg");

    boy1.velocityX = 0
    boy1.velocityY = 0

    camera.position.x = boy1.x + 400
    camera.position.y = boy1.y + 170


    if (keyIsDown(RIGHT_ARROW)) {
        boy1.velocityX = 5

    }

    if (frameCount % 200 === 0) {
        wall = createSprite(2000, 300, 20, 1000)
    }
    if (frameCount % 15 === 0) {
        boy2.velocityX = random(3, 7)
        boy3.velocityX = random(3, 7)
        boy4.velocityX = random(3, 7)

    }

    if (wall) {
        if (wall.isTouching(boy2)) {
            boy2.velocityX = 0
        }
        if (wall.isTouching(boy3)) {
            boy3.velocityX = 0
        }
        if (wall.isTouching(boy4)) {
            boy4.velocityX = 0
        }
        if (wall.isTouching(boy1)) {
            boy1.velocityX = 0
        }
    }
    drawSprites()
}