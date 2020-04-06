$(document).ready(function(){
    var questions={
        "Animals": ["turtle" , "dragon","sheep","snake","monkey","penguin","giraffe","butterfly","eagle","goat","dolphin","hippo","lizard","kangaroo","beetle","camel","cow"],
        "Buildings": ["house","apartment"],
        "Places": ["bedroom","bathroom","restaurant","shopping","kitchen","store","caridor","classroom","library","playgrond","supermarket"],
        "Kitchen": ["123","22"],
        "Personal": ["phone","credit card","headphones","suitcase","watch","money","purse","wallet","newspaper","flaslight","book"],
        "Sports": ["cycling","wrestling","swimming","badminton","skiing","running","golf","skateboarding","boxing","volleyball","tennis","bowling","cricket"],
        "Nature": ["tornado","lake","island","snow","flower","the moon","volcano","planet","rainbow","the sun","clouds","desert","mountain","stars","wind"],
        "Music": ["1237","227"],
        "Jobs": ["policemen","nurse","teacher","dancer","computer technician","cashier","hairdresser","doctor","mechanic","designer","receptionist" ,"politician","electrician",'farmer'],
        "Colors": ["red","yellow","green","pink","blue","purple","brown","white","black","grey","orange"],
        "Clothes": ["tshirt","suit", "belt","pants","dress","ring","skirt","shirt","shoes","glasses","hat","watch","bag","sweater","umbrella"],
        "Body": ["1235","225"],
        "Food": ["chicken","candy","ketchup","chocolate","hamburger","bread","eggs","sushi","wine","pepper","stake","lemonade","kebabs","pizza","waffle","spaghetti","cheeseburger","cheese","bread rolls","fried eggs"],
        "Fruits": ["banana","apple","cherry","blueberry","blackberry","coconut","nectarine","peach","passion fruit","watermelon","strawberry","quince","pineapple"],
        "Vegetables": ["carrots","cabbage","garlic","mushrooms","cucumber","peaches","tomatoes","broccoli","pepper","rice","avocado","Pumpkin","olive"],
        "Transport": ["bike","ambulance","motorbike","tracktor","escalator","helicopter","skateboard","moped","train","plane","scooter","rocket"],
        "Things": ["broke","224"],
        "Thigs": ["broken","broog"],
    }
    $(".startBtn").click(function() {
          $(this).toggle(500);
          generateQuestions()
    })
  
    function generateQuestions(){
        var select_content="<div class='content_container'><div class='select_content' ><h2 class='h2'>Select Content</h2><div class='p'></div></div></div>"
        var ul = "<ul class='ul'></ul>"
        $(".container").append(select_content)
        $(".container").append(ul)
        for (i in questions){
            var q=`<li class='li ${i}'>${i}</li>`
            $(".ul").append(`${q}`)
            $(".li").hover(function(){
                var li_text= $(this).text()
                $(".h2").text(li_text)
                $(".p").text(questions[li_text])
            })
        }
        var letter_arr=[]
        function Getletters(first,second){
            var i=first.charCodeAt(0),j=second.charCodeAt(0)
            for(;i<j;++i){
                letter_arr.push(String.fromCharCode(i))
            }
            return letter_arr;
        }
       var score=0;
       var lives=11;
       var questions_arr;
       var selected_word;
       $(".remaining").text(lives)
       $(".maxTry").text(lives)
    $(".li").click(function(){
        $("#hangMan").css("display","block")
        $(".pole").css("opacity", 0)
        $(".shaft").css("opacity", 0)
        $(".rope").css("opacity", 0)
        $(".man").css({"display": "none","top":"50px"})
        $(".face").css("opacity", 0)
        $(".hands").css("opacity", 0)
        $(".legs").css("opacity", 0)
        $(".container").empty()
        var hangman_img="<div class='hangman_img'></div>"
        var finding_word=`<div class='finding_word'></div>`
        var letters = `<div class='letters'></div>`
        var next_btn=`<div class='next_btn_container'><button class='next_btn'>NEXT WORD<i class="fas fa-arrow-right"></i>  </button></div>`
        var game_over=`<div class='game_over_container'><button class='game_over'>GAME OVER <i class="far fa-sad-cry"></i> </button></div>`
        $(".container").append(hangman_img,finding_word,letters,next_btn,game_over)
        Getletters("A","Z")
        for(i in letter_arr){
            var letters_spans=`<button class='letters_spans'>${letter_arr[i]}</button>`
            $(".letters").append(letters_spans)
        }
                questions_arr=questions[$(this).text()]
                var word;
                function wordsLetters(){
                     word=Math.floor(Math.random() * (questions_arr.length))
                    selected_word=questions_arr[word]
                    console.log(selected_word)
                    for(var i=0;i<selected_word.length;i++){
                        var words_letters=`<span class='words_letters ${selected_word[i]}'>_</span>`
                        // if(selected_word.indexOf(" ") != -1){
                        //     $(".words_letters").eq(selected_word.indexOf(" ")).removeClass("words_letters")
                        //    console.log( $(".words_letters").eq(selected_word.indexOf(" ")),selected_word.indexOf(" "))
                        // }
                        $(".finding_word").append(words_letters)
                        // return words_letters;
                    }
                   }
                wordsLetters()
                console.log(word, questions_arr[word])
                
                $(".letters_spans").click(function(){
                    $(this).prop("disabled",true)
                    $(this).css("opacity",0.5)
                    var current_text=$(this).text().toLowerCase()
                    if(selected_word.includes(current_text)){
                        $(`.${current_text}`).text(current_text)
                        $(`.${current_text}`).addClass(`exist`)
                        $(`.words_letters`).removeClass(`${current_text}`)
                    }
                    else{
                        lives -=1
                        
                    }
                    if(lives==9){
                        $(".pole").css("opacity", 1)
                    }
                    if(lives ==7){
                        $(".shaft").css("opacity", 1)
                    }
                    if(lives ==6){
                        $(".rope").css("opacity", 1)
                    }
                    if(lives == 4){
                        $(".man").css("display", "block")
                    }
                    if(lives == 3){
                        $(".face").css("opacity", 1)
                    }
                    if(lives == 2){
                        $(".hands").css("opacity", 1)
                    }
                    if(lives == 1){
                        $(".legs").css("opacity", 1)
                    }
                    if(lives == 0){
                        $(".shaft").css({"transform":"rotate(10deg)"})
                        $(".rope").css({"top":"25px"})
                        $(".man").css({"top":"75px"})
                        $(".eyes").css("display","inline-block")
                        $(".mouth").css("display","inline")
                        $(".pole").css({
                            "height":"252px","top": "-9px"
                    })

                        $(".letters_spans").prop("disabled",true).css("opacity",0.5)
                        $(".game_over").css("display", "block")
                        
                    }
                    console.log(lives)
                    $(".remaining").text(lives)
                    if($(".exist").length == selected_word.length && lives > 0){
                        score +=1
                       console.log("yoy win")
                       $(".letters_spans").prop("disabled",true).css("opacity",0.5)
                       $(".next_btn").css("display", "block")
                       $(`.words_letters`).removeClass(`exist`)
                       
                    }
                })
                $(".next_btn").click(function(){
                    // generateQuestions()
                    $(".words_letters").remove()
                    $(".pole").css("opacity", 0)
                    $(".shaft").css("opacity", 0)
                    $(".rope").css("opacity", 0)
                    $(".man").css("display", "none")
                    // $("#hangMan").css("display","none")
                    lives=11
                    $(".remaining").text(lives)
                    $(".letters_spans").prop("disabled",false).css("opacity",1)
                    console.log(word,selected_word,score)
                    wordsLetters()
                    $(this).css("display", "none")
                })
                $(".game_over").click(function(){
                    $(this).css("display", "none")
                    $(".shaft").css({"transform":"rotate(0deg)"})
                    $(".rope").css({"top":"0px"})
                    $(".man").css({"top":"0px"})
                    $(".eyes").css("display","none")
                    $(".mouth").css("display","none")
                    $(".pole").css({
                        "height":"245px","top": "0px"
                })
                    $("#hangMan").css("display","none")
                    $(".container").empty()
                    generateQuestions()
                })

            
    })
   
    
    }
   
         
       })