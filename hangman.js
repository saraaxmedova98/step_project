$(document).ready(function() {
    var questions = {
        Animals: [
            "turtle",
            "dragon",
            "sheep",
            "snake",
            "monkey",
            "penguin",
            "giraffe",
            "butterfly",
            "peacock butterfly",
            "eagle",
            "goat",
            "dolphin",
            "hippo",
            "lizard",
            "kangaroo",
            "beetle",
            "camel",
            "cow",
        ],
        Buildings: [
            "villa",
            "garage",
            "zoo",
            "house",
            "park",
            "factory",
            "stadium",
            "church",
            "castle",
            "tunnel",
            "movie theater",
            "airport",
            "hospital",
            "apartment",
            "pet store",
            "florist",
        ],
        Places: [
            "bedroom",
            "bathroom",
            "restaurant",
            "shopping",
            "monuments",
            "kitchen",
            "store",
            "book shop",
            "caridor",
            "classroom",
            "library",
            "playground",
            "supermarket",
            "cafe",
            "service station",
            "church",
        ],
        Kitchen: [
            "spoon",
            "bowl",
            "toaster",
            "mixer",
            "glass",
            "jug",
            "microwave",
            "saucepan",
            "teapot",
            "frying pan",
            "plate",
            "bottle",
            "cleaver",
            "kettle",
            "peeler",
            "tray",
            "bowl",
            "spoon",
            "knife",
            "spatula",
        ],
        Personal: [
            "phone",
            "headphones",
            "suitcase",
            "watch",
            "money",
            "purse",
            "wallet",
            "newspaper",
            "id card",
            "flaslight",
            "book",
            "laptop",
            "mug",
            "key",
            "brush",
            "bed",
            "credit card",
        ],
        Sports: [
            "cycling",
            "wrestling",
            "swimming",
            "badminton",
            "skiing",
            "running",
            "golf",
            "figure skating",
            "skateboarding",
            "boxing",
            "volleyball",
            "tennis",
            "bowling",
            "cricket",
        ],
        Nature: [
            "tornado",
            "lake",
            "island",
            "snow",
            "flower",
            "the moon",
            "volcano",
            "planet",
            "rainbow",
            "the sun",
            "clouds",
            "desert",
            "mountain",
            "stars",
            "wind",
            "sea",
            "ocean",
            "sun",
            "water vapor",
        ],
        Music: [
            "accordion",
            "piano",
            "violin",
            "banjo",
            "drums",
            "clarinet",
            "flute",
            "piccolo",
            "gong",
            "electric guitar",
            "viola",
            "bugle",
            "cymbals",
            "organ",
            "trombone",
            "saxophone",
            "maracas",
        ],
        Jobs: [
            "policemen",
            "nurse",
            "teacher",
            "dancer",
            "cashier",
            "designer",
            "doctor",
            "office clerk",
            "hairdresser",
            "mechanic",
            "receptionist",
            "politician",
            "farmer",
            "computer technician",
            "electrician",
            "secretary",
        ],
        Colors: [
            "red",
            "yellow",
            "green",
            "pink",
            "blue",
            "purple",
            "brown",
            "white",
            "black",
            "orange",
            "pea green",
            "grey",
            "aquamarine",
            "crimson",
            "olive",
            "lime",
            "silver",
            "maroon",
        ],
        Clothes: [
            "tshirt",
            "suit",
            "belt",
            "pants",
            "dress",
            "ring",
            "skirt",
            "shirt",
            "shoes",
            "glasses",
            "hat",
            "sun hat",
            "watch",
            "bag",
            "sweater",
            "umbrella",
            "stockings",
            "panties",
        ],
        Body: [
            "shoulder",
            "mouth",
            "forehead",
            "neck",
            "head",
            "chin",
            "face",
            "forearm",
            "knee",
            "foot",
            "finger nail",
            "thumb",
            "stomach",
            "chest",
            "arm",
            "finger",
            "elbow",
            "toe",
            "heel",
            "calf",
            "ear",
        ],
        Food: [
            "chicken",
            "candy",
            "ketchup",
            "chocolate",
            "hamburger",
            "bread",
            "eggs",
            "sushi",
            "tuna steak",
            "wine",
            "pepper",
            "stake",
            "lemonade",
            "kebabs",
            "pizza",
            "waffle",
            "spaghetti",
            "bread rolls",
            "cheeseburger",
            "cheese",
            "fried eggs",
        ],
        Fruits: [
            "banana",
            "cherry",
            "blueberry",
            "blackberry",
            "coconut",
            "nectarine",
            "peach",
            "passion fruit",
            "watermelon",
            "strawberry",
            "quince",
            "pineapple",
            "apple",
        ],
        Vegetables: [
            "carrots",
            "cabbage",
            "garlic",
            "mushrooms",
            "cucumber",
            "peaches",
            "green pepper ",
            "tomatoes",
            "broccoli",
            "pepper",
            "rice",
            "avocado",
            "pumpkin",
            "olive",
            "lettuce",
        ],
        Transport: [
            "bike",
            "ambulance",
            "motorbike",
            "tracktor",
            "escalator",
            "helicopter",
            "cement mixer",
            "skateboard",
            "moped",
            "train",
            "plane",
            "scooter",
            "rocket",
            "bicycle",
        ],
        Subjects: [
            "algebra",
            "geometry",
            "biology",
            "physics",
            "math",
            "chemistry",
            "music",
            "computer science",
            "geography",
            "art",
            "literacy",
            "geography",
            "arithmetic",
            "english",
        ],
        Computer: [
            "keyboard",
            "mouse",
            "microphone",
            "monitor",
            "printer",
            "camera",
            "speakers",
            "web camera",
            "scanner",
            "headphones",
            "case",
            "chip",
            "joystick",
            "hard drive",
        ],
    };

    var word;
    var lives;
    var score = 0;
    var list_length = 0
    var questions_arr;
    var selected_word;
    var questions_arr_equal;
    var word_list_text

    function generateQuestions() {
        var select_content =
            "<div class='content_container'><div class='select_content' ><h1 class='select_content_h1'>Select Content</h1><div class='select_content_p'></div></div></div>";
        var ul = "<div class='words_container'></div>";
        $(".container").append(select_content);
        $(".container").append(ul);

        for (i in questions) {
            var words_lists = `<button class='words_lists ${i} '>${i}</button>`;
            $(".words_container").append(`${words_lists}`);

            $(".words_lists").hover(
                function() {
                    var li_text = $(this).text();
                    $(".select_content_h1").text(li_text);
                    $(".select_content_p").text(questions[li_text]);
                },
                function() {
                    $(".select_content_h1").text("Select Content");
                    $(".select_content_p").text("");
                }
            );
        }
        $(`.${word_list_text}`).prop("disabled", true)
        $(`.${word_list_text}`).css("opacity", 0.2);
    }

    function randomWordContainer() {
        var finding_word = `<div class='finding_word'></div>`;
        var letters = `<div class='letters'></div>`;
        var next_btn = `<div class='next_btn_container'><button class='next_btn'>NEXT WORD<i class="fas fa-arrow-right"></i>  </button></div>`;
        $(".container").append(finding_word, letters, next_btn);
    }

    function wordsLetters() {
        word = Math.floor(Math.random() * questions_arr_equal.length);
        selected_word = questions_arr_equal[word];
        questions_arr_equal.splice(word, 1)
        for (var i = 0; i < selected_word.length; i++) {
            if (selected_word.indexOf(" ") == -1) {
                var words_letters = `<span class='words_letters ${selected_word[i]}'>_</span>`;
            } else {
                var words_letters = `<span class='words_letters ${selected_word[i]}'>_</span>`;
                $(".words_letters").eq(selected_word.indexOf(" ")).text("");
                $(".words_letters")
                    .eq(selected_word.indexOf(" "))
                    .css("background-color", "transparent");
            }
            $(".finding_word").append(words_letters);
        }
    }
    var letter_arr = [];

    function Getletters(first, second) {
        var i = first.charCodeAt(0),
            j = second.charCodeAt(0);
        for (; i <= j; ++i) {
            letter_arr.push(String.fromCharCode(i));
        }
        return letter_arr;
    }

    function letterButtons() {
        var letter_arr = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ];

        for (i in letter_arr) {
            var letters_spans = `<button class='alphabet_btns ${letter_arr[i]}'>${letter_arr[i]}</button>`;
            $(".letters").append(letters_spans);
        }
    }

    function choosedRandomWord(randomWord) {
        if (selected_word.includes(randomWord)) {
            $(`.${randomWord}`).text(randomWord);
            $(`.${randomWord}`).addClass(`exist`);
            $(`.${randomWord}`).css("color", `${generateRandomColor()}`);
            $(`.words_letters`).removeClass(`${randomWord}`);
        } else {
            lives -= 1;
            $(".remaining").text(lives);
        }
    }

    function CssStyles() {
        lives = 11;
        $("#hangMan").css("display", "block");
        $(".remaining").text(lives);
        $(".indicator").css("display", "block");
        $(".shaft").css({ transform: "rotate(0deg)" });
        $(".pole").css({ opacity: 0, height: "195px", top: "5px" });
        $(".shaft").css("opacity", 0);
        $(".rope").css({ opacity: 0, top: 0 });
        $(".man").css({ display: "none", top: "37px" });
        $(".face").css("opacity", 0);
        $(".hands").css("opacity", 0);
        $(".legs").css("opacity", 0);
        $(".container").empty();
    }

    function winnerCase() {
        if (selected_word.indexOf(" ") == -1) {
            if ($(".exist").length == selected_word.length && lives > 0) {
                score += 1;
                list_length += 1
                $(".alphabet_btns").prop("disabled", true).css("opacity", 0.5);
                $(".next_btn").css("display", "block");
                $(`.words_letters`).removeClass(`exist`);
                $(".score b").text(score);
            }
        } else {
            if ($(".exist").length == selected_word.length - 1 && lives > 0) {
                score += 1;
                list_length += 1

                $(".alphabet_btns").prop("disabled", true).css("opacity", 0.5);
                $(".next_btn").css("display", "block");
                $(`.words_letters`).removeClass(`exist`);
                $(".score b").text(score);
            }
        }
        if (list_length == questions_arr.length && questions_arr_equal.length == 0) {
            setTimeout(() => {
                $(".continueBtn").css("display", "block")
                $(".container").html("<h1 class = 'congratulation_text'>Congratulations )) Do you want to continue second section?</h1>");
                $("#hangMan").css("display", "none");
                list_length = 0


            }, 2000);
        }

    }

    function decreasingLives() {
        if (lives == 9) {
            $(".pole").css("opacity", 1);
        }
        if (lives == 7) {
            $(".shaft").css("opacity", 1);
        }
        if (lives == 6) {
            $(".rope").css("opacity", 1);
        }
        if (lives == 4) {
            $(".man").css("display", "block");
        }
        if (lives == 3) {
            $(".face").css("opacity", 1);
        }
        if (lives == 2) {
            $(".hands").css("opacity", 1);
        }
        if (lives == 1) {
            $(".legs").css("opacity", 1);
        }
        if (lives == 0) {
            const sound = new Audio(`audio/lose.wav`);
            sound.play();
            $(".shaft").css({ transform: "rotate(10deg)" });
            $(".rope").animate({ top: "25px" }, 50);
            $(".man").animate({ top: "64px" }, 50);
            $(".eyes").css("display", "inline-block");
            $(".mouth").css("display", "inline");
            $(".pole").animate({
                    height: "212px",
                    top: "-9px",
                },
                50
            );
            $(".alphabet_btns").prop("disabled", true).css("opacity", 0.5);
            $("#gameOver").css("display", "block");
            $(".indicator").css("display", "none");
        }
        if (lives <= 0) {
            for (var i = 0; i < selected_word.length; i++) {
                $(".words_letters").eq(i).text(selected_word[i]);
                $(".words_letters").css("color", "#ff0000");
            }
        }
    }

    function generateRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        return `rgb(${r},${g},${b})`;
    }

    function startAgain() {
        $(".words_lists").click(function() {
            word_list_text = $(this).text()
            lives = 11;
            $(".maxTry").text(lives);
            $(".score b").text(score);
            CssStyles();
            randomWordContainer();
            // Getletters("A", "Z");
            letterButtons();
            questions_arr = questions[$(this).text()];
            questions_arr_equal = [...questions_arr]
            wordsLetters();
            $(".alphabet_btns").click(function() {
                $(this).prop("disabled", true);
                $(this).css("opacity", 0.2);
                console.log(selected_word);
                var current_text = $(this).text().toLowerCase();
                choosedRandomWord(current_text);
                winnerCase();
                decreasingLives();
            });
            $(".next_btn").click(function() {
                $(this).css("display", "none");
                $(".words_letters").remove();
                $(".pole").css("opacity", 0);
                $(".shaft").css("opacity", 0);
                $(".rope").css("opacity", 0);
                $(".man").css("display", "none");
                lives = 11;
                $(".remaining").text(lives);
                $(".alphabet_btns").prop("disabled", false).css("opacity", 1);
                wordsLetters();
            });
        });
    }
    $(document).keypress(function(e) {
        var uppercase = e.key.toUpperCase();
        var lowercase = e.key.toLowerCase()
        $(`.${uppercase}`).prop("disabled", true);
        $(`.${uppercase}`).css("opacity", 0.2);
        choosedRandomWord(lowercase);
        winnerCase();
        decreasingLives();
    });
    $(".startBtn").click(function() {
        $(this).css("display", "none");
        generateQuestions();
        startAgain();
    });
    $("#gameOver").click(function() {
        score = 0;
        list_length = 0
        questions_arr_equal = [...questions_arr]
        $(this).css("display", "none");
        $("#hangMan").css("display", "none");
        $(".container").html("");
        generateQuestions();
        startAgain();
    });
    $(".continueBtn").click(function() {
        $(this).css("display", "none");
        $(".container").html("");
        generateQuestions()
        startAgain()
    })
});