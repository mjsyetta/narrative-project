let currentStanza = 0;
let paragraphs;
let phrase = "";
let intro = true;
let intro2 = false;
let credits1 = false;
let credits2 = false;
let arrowshow = true;

let curtainopen3 = false;
let dooropen4 = false;
let response = false;
let windowopen6 = false;
let text8 = false;


let flip14 = true;
let flipcount14 = 0;
let framecount14 = 0;

//load font
let url = "https://fonts.googleapis.com/css2?family=Jacquard+24&display=swap";
let ravenfont;

//load sounds
let audiotest;
let ambience;
let sound0;
let sound1;
let sound2;
let sound3;
let sound4;
let sound5;
let sound6;
let sound7;
let sound8;
let sound9;
let sound10;
let sound11;
let sound12;
let sound13;

//load images
let headphones;
let rightarrow;
let curtain;
let doorclose;
let dooropen;
let windowclose;
let windowopen;
let raven;
let bust;
let cloud;
let cloud2;
let eyes;
let noai;


//create cloud objects
let c1 = {
    x: 177,
    y: 455,
    display: function() {
        image(cloud, this.x, this.y);
    },
    move: function() {
        if (flip14) {
            this.x += 1;
            this.y -= 1;
        } else {
            this.x -= 1;
            this.y += 1;
        }
    }
};
let c2 = {
    x: 482,
    y: 422,
    display: function() {
        image(cloud2, this.x, this.y);
    },
    move: function() {
        if (flip14) {
            this.x += 1;
            this.y += 1;
        } else {
            this.x -= 1;
            this.y -= 1;
        }
    }
};
let c3 = {
    x: -448,
    y: 402,
    display: function() {
        image(cloud2, this.x, this.y);
    },
    move: function() {
        if (flip14) {
            this.x -= 1;
            this.y -= 1;
        } else {
            this.x += 1;
            this.y += 1;
        }
    }
};
let c4 = {
    x: -194,
    y: 532,
    display: function() {
        image(cloud2, this.x, this.y);
    },
    move: function() {
        if (flip14) {
            this.y += 1;
        } else {
            this.y -= 1;
        }
    }
};
let c5 = {
    x: 781,
    y: 256,
    display: function() {
        image(cloud2, this.x, this.y);
    },
    move: function() {
        if (flip14) {
            this.x -= 1;
            this.y -= 1;
        } else {
            this.x += 1;
            this.y += 1;
        }
    }
};

let clouds = [c1, c2, c3, c4, c5];

//create curtain object
let curt = {
    x: 600,
    y: -100,
    display: function() {
        image(curtain, this.x, this.y);
    },
    move: function() {
        this.x += 3;
    }
}

async function setup() {
    //load font
    font = await loadFont(url);
    ravenfont = await loadFont('./assets/drac.ttf');

    //load and parse .txt file
    fullText = await loadStrings('./assets/theRaven.txt');
    fullText = fullText.join('\n');
    paragraphs = fullText.split('\n\n');

    //load sound effects
    audiotest = await loadSound('./assets/audiotest.mp3');
    ambience = await loadSound('./assets/ambience.mp3');
    sound0 = await loadSound('./assets/sound0.mp3');
    sound1 = await loadSound('./assets/sound1.mp3');
    sound2 = await loadSound('./assets/sound2.mp3');
    sound3 = await loadSound('./assets/sound3.mp3');
    sound5 = await loadSound('./assets/sound5.mp3');
    sound6 = await loadSound('./assets/sound6.mp3');
    sound7 = await loadSound('./assets/sound7.mp3');
    sound9 = await loadSound('./assets/sound9.mp3');
    sound10 = await loadSound('./assets/sound10.mp3');
    sound11 = await loadSound('./assets/sound11.mp3');
    sound12 = await loadSound('./assets/sound12.mp3');
    sound13 = await loadSound('./assets/sound13.mp3');

    //load images
    headphones = await loadImage('./assets/headphones.png');
    rightarrow = await loadImage('./assets/rightarrow.png');

    curtain = await loadImage('./assets/curtain.png');

    dooropen = await loadImage('./assets/dooropen.png');
    doorclose = await loadImage('./assets/doorclose.png');

    windowopen = await loadImage('./assets/windowopen.png');
    windowclose = await loadImage('./assets/windowclose.png');

    raven = await loadImage('./assets/raven.png');
    bust = await loadImage('./assets/bust.png');

    cloud = await loadImage('./assets/cloud.png');
    cloud2 = await loadImage('./assets/cloud2.png');

    eyes = await loadImage('./assets/eyes.gif');

    noai = await loadImage("./assets/noai.png");

    ambience.play();
    createCanvas(1000, 800);
}

function draw() {
    background("black");
    imageMode(LEFT);

    if (arrowshow) {
        image(rightarrow, 925, 700, 50, 50);
    }

    // Style the text.
    fill("white");
    textAlign(LEFT);
    textFont(font);

    if (intro) {
        textSize(150);
        text("The Raven", 40, 50, 900);

        textSize(50);
        text("by Edgar Allen Poe", 40, 200, 900);

        text("M.J. Shaffer", 40, 475);
        text("Narrative Media - LMC 6310", 40, 525);

    } else if (intro2) {

        textSize(50);
        text("This narrative is best experienced with headphones.", 50, 50, 900);

        image(headphones, 462.5, 112.5, 75, 75);

    } else if (credits1) {
        image(eyes, 250, 200, 500, 400)

    } else if (credits2) {
        textSize(150);
        text("The End.", 40, 50, 900);

        image(noai, 30, 200, 500, 500);

        textSize(45);
        text("No AI was used in the making of this project.", 40, 710);
        textSize(30);
        text("Momento mori.", 40, 760);

    } else {

        if (currentStanza >= 10) {
            textSize(52);
            fill(255, 0, 0, (currentStanza - 8) * 8 + random(-5, 5));
            text(`Sometimes I hear it calling out to me from the night. It knows her name. It has learned to mimic her voice. I cannot escape it. My only solace is sleep, and I can barely manage a few hours a night. Curse this raven, this Nevermore! I pray it drowns itself in the river or breaks its wings upon a stone! Oh, Lenore, my dear sweet Lenore! If only I could wake from this nightmare, wrapped safely in your arms.
But your limbs are cold and shriveled now, just like the claws of this Nevermore, and the hands of Death coming for me too. I will welcome him when he comes. Anything to escape this hell I'm living! Nevermore! Nevermore! Nevermore!`, 0, 0, 1000);

        }

        textSize(40);
        fill("white");
        textAlign(LEFT);
        text(phrase, 40, 50, 900);

        imageMode(LEFT);

        if (currentStanza == 2) {
            let x = map(mouseX, 0, 1000, 100, 0);
            let y = map(mouseY, 0, 800, 100, 0);
            fill(y * 2 + x + random(-15, 15), y + random(-15, 15), 0);

            text("dying ember", 308, 184);
            fill("white");
        }

        if (currentStanza == 3) {
            curt.display();
            if (curtainopen3) {
                curt.move();
            }
        }

        if (currentStanza == 4) {
            if (!dooropen4) {
                image(doorclose, 625, 150, 300, 425);
            } else {
                image(dooropen, 625, 150, 300, 495);
                text("Darkness there and nothing more.", 40, 650, 900);
            }
        }

        if (currentStanza == 5) {
            fill(150, 255, 255, random(90, 110));
            textSize(50);
            text("\"Lenore?\"", 400, 440);


            if (response) {
                textSize(75);
                fill(180, 0, 0, random(110, 140));
                textFont(ravenfont);
                text("\"Lenore!\"", 400, 550);

                textFont(font);
                textSize(40);
                fill('white');
                text("—Merely this and nothing more.", 40, 600)
            }

        }

        if (currentStanza == 7) {
            if (!windowopen6) {
                image(windowclose, 600, 250, 330, 266);
            } else {
                image(windowopen, 522, 234, 487, 297);
                image(raven, 675, 325, 200, 200);
                text("when, with many a flirt and flutter,\nIn there stepped a stately Raven\nof the saintly days of yore;\nNot the least obeisance made he; \nnot a minute stopped or stayed he;\nBut, with mien of lord or lady, \nperched above my chamber door—\nPerched upon a bust of Pallas \njust above my chamber door—\nPerched, and sat, and nothing more.", 40, 100, 900)
            }
        }

        if (currentStanza == 8 && text8) {
            textSize(90);
            fill(180, 0, 0, random(110, 140));
            textFont(ravenfont);
            text("\"Nevermore!\"", 300, 610);

        }

        if (currentStanza == 9) {

            image(bust, 550, 144, 450, 512);
        }

        if (currentStanza == 10) {
            textSize(90);
            fill(180, 0, 0, random(140, 180));
            textFont(ravenfont);
            text("\"Nevermore.\"", 300, 610);
        }

        if (currentStanza == 12) {
            textSize(90);
            fill(180, 0, 0, random(160, 200));
            textFont(ravenfont);
            text("\"Nevermore.\"", 300, 610);
        }

        if (currentStanza == 14) {

            textSize(90);
            fill(180, 0, 0, random(160, 200));
            textFont(ravenfont);
            text("\"Nevermore.\"", 300, 610);

            //draw clouds
            tint(255, 240);

            for (i = 0; i < clouds.length; i++) {


                if (mouseX >= clouds[i].x - 60 && mouseX <= clouds[i].x + 60 && mouseY >= clouds[i].y - 60) {
                    clouds[i].x += 8;
                    clouds[i].y += 8;
                }
                if (mouseX <= clouds[i].x + cloud2.width + 60 && mouseX >= clouds[i].x + cloud2.width - 60 && mouseY >= clouds[i].y - 60) {
                    clouds[i].x -= 8;
                    clouds[i].y += 8;
                }

                if (mouseY >= clouds[i].y - 40) {
                    clouds[i].y += 1;
                }

                clouds[i].display();

                if (framecount14 % 10 == 0 && i % 2 == 0) {
                    clouds[i].move();
                } else if (framecount14 % 25 == 0 && i % 2 == 1) {
                    clouds[i].move();
                }
            }

            noTint();

            if (flipcount14 > 75) {
                flip14 = !flip14;
                flipcount14 = 0;
            }

            flipcount14++;
            framecount14++;

        }

        if (currentStanza == 15) {
            textSize(90);
            fill(180, 0, 0, random(200, 220));
            textFont(ravenfont);
            text("\"Nevermore.\"", 300, 610);
        }

        if (currentStanza == 16) {
            textSize(90);
            fill(180, 0, 0, random(220, 225));
            textFont(ravenfont);
            text("\"Nevermore.\"", 300, 610);
        }

        if (currentStanza == 17) {
            textSize(90);
            fill(180, 0, 0);
            textFont(ravenfont);
            text("\"Nevermore.\"", 300, 610);
        }

    }

}

function mouseClicked() {

    //progress frames
    if (
        mouseX >= 925 &&
        mouseX <= 975 &&
        mouseY >= 700 &&
        mouseY <= 750 &&
        arrowshow
    ) {

        if (intro) {
            intro = false;
            intro2 = true;
        } else if (credits1) {
            credits1 = false;
            credits2 = true;
            arrowshow = false;
            ambience.play();
            sound13.pause();

        } else if (currentStanza >= paragraphs.length) {
            credits1 = true;
            sound10.play();

            ambience.pause();
            sound5.pause();
            sound9.pause();
            sound11.pause();
            sound12.pause();
        } else {

            if (intro2) {
                intro2 = false;
            }

            //play sounds & handle arrows for correct stanza
            if (currentStanza == 0) {
                sound0.play();
            }

            if (currentStanza == 1) {
                sound1.play();
            }

            if (currentStanza == 2) {
                sound2.play();
                arrowshow = false;
            }

            if (currentStanza == 3) {
                arrowshow = false;
            }

            if (currentStanza == 4) {
                arrowshow = false;
            }

            if (currentStanza == 5) {
                sound5.play();
            }
            if (currentStanza == 6) {
                arrowshow = false;
            }

            if (currentStanza == 7) {
                arrowshow = false;
            }

            if (currentStanza == 10) {
                sound11.play();
            }

            if (currentStanza == 12) {
                sound12.play()
            }

            if (currentStanza == 14) {
                sound13.play();
            }

            //update phrase
            phrase = paragraphs[currentStanza];


            //move to next stanza on click
            currentStanza++;
        }

    } else if (intro2 &&
        mouseX >= 462 &&
        mouseY >= 112 &&
        mouseX <= 537 &&
        mouseY <= 187
    ) {
        audiotest.play();
    } else if (currentStanza == 3 &&
        !curtainopen3 &&
        (mouseX <= 500 ||
            mouseY <= 700)
    ) {
        curtainopen3 = true;
        arrowshow = true;
        sound7.play();
    } else if (currentStanza == 4 &&
        !dooropen4 &&
        mouseX >= 625 &&
        mouseX <= 925 &&
        mouseY >= 350 &&
        mouseY <= 795) {
        dooropen4 = true;
        arrowshow = true;
        sound3.play();
    } else if (currentStanza == 5 &&
        !response &&
        mouseX >= 400 &&
        mouseX <= 550 &&
        mouseY >= 400 &&
        mouseY <= 475) {
        response = true;
        arrowshow = true;
    } else if (currentStanza == 7 &&
        !windowopen6 &&
        mouseX >= 600 &&
        mouseX <= 935 &&
        mouseY >= 250 &&
        mouseY <= 516
    ) {
        windowopen6 = true;
        arrowshow = true;
        sound6.play();
    } else if (currentStanza == 8 &&
        !text8 &&
        (mouseX <= 500 ||
            mouseY <= 700)
    ) {
        arrowshow = true;
        text8 = true;
        sound9.play();
    }

    if (currentStanza == 9 &&
        mouseX >= 690 &&
        mouseX <= 835 &&
        mouseY >= 186 &&
        mouseY <= 308
    ) {
        sound10.play();
    }
}
