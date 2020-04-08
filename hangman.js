$(document).ready(function(){
    var questions={
        "Animals": ["turtle" , "dragon","sheep","snake","monkey","penguin","giraffe","butterfly","peacock butterfly","eagle","goat","dolphin","hippo","lizard","kangaroo","beetle","camel","cow"],
        "Buildings": ["villa","garage","zoo","house","park","factory","stadium","church","castle","tunnel","movie theater","airport","hospital","apartment","pet store","florist"],
        "Places": ["bedroom","bathroom","restaurant","shopping","monuments","kitchen","store","book shop","caridor","classroom","library","playgrond","supermarket","cafe",'service station',"church"],
        "Kitchen": ["spoon","bowl","toaster","mixer","glass","jug","microwave","saucepan","teapot","frying pan","plate","bottle","cleaver","kettle","peeler","tray","bowl","spoon","knife","spatula"],
        "Personal": ["phone","headphones","suitcase","watch","money","purse","wallet","newspaper","id card","flaslight","book","laptop","mug","key",'brush',"bed","credit card"],
        "Sports": ["cycling","wrestling","swimming","badminton","skiing","running","golf","figure skating","skateboarding","boxing","volleyball","tennis","bowling","cricket"],
        "Nature": ["tornado","lake","island","snow","flower","the moon","volcano","planet","rainbow","the sun","clouds","desert","mountain","stars","wind"],
        "Music": ["accordion","piano","violin","banjo","drums","clarinet","flute","piccolo","gong","electric guitar","viola","bugle","cymbals","organ","trombone","saxophone","maracas"],
        "Jobs": ["policemen","nurse","teacher","dancer","cashier","designer","doctor","office clerk","hairdresser","mechanic","receptionist","politician",'farmer',"computer technician" ,"electrician","secretary"],
        "Colors": ["red","yellow","green","pink","blue","purple","brown","white","black","orange","pea green","grey","aquamarine","crimson","olive","lime","silver","maroon"],
        "Clothes": ["tshirt","suit", "belt","pants","dress","ring","skirt","shirt","shoes","glasses","hat","sun hat","watch","bag","sweater","umbrella","stockings","panties"],
        "Body": ["shoulder","mouth","forehead","neck","ear","head","chin","face","forearm","knee","foot","thumb"],
        "Food": ["chicken","candy","ketchup","chocolate","hamburger","bread","eggs","sushi","tuna steak","wine","pepper","stake","lemonade","kebabs","pizza","waffle","spaghetti","bread rolls","cheeseburger","cheese","fried eggs"],
        "Fruits": ["banana","apple","cherry","blueberry","blackberry","coconut","nectarine","peach","passion fruit","watermelon","strawberry","quince","pineapple"],
        "Vegetables": ["carrots","cabbage","garlic","mushrooms","cucumber","peaches","green pepper ","tomatoes","broccoli","pepper","rice","avocado","pumpkin","olive","lettuce"],
        "Transport": ["bike","ambulance","motorbike","tracktor","escalator","helicopter","cement mixer","skateboard","moped","train","plane","scooter","rocket","bicycle"],
        "Subjects": ["algebra","geometry","biology","physics","math","chemistry","music","information technology","geography","art","literacy",'geography',"arithmetic","english"],
        "Computer": ["keyboard","mouse","microphone","monitor","printer","camera","speakers","web camera","scanner","headphones","case","chip","joystick","hard drive"],
    }
    $(".startBtn").click(function() {
          $(this).css("display","none");
          generateQuestions()
    })
  
    function generateQuestions(){
        var select_content="<div class='content_container'><div class='select_content' ><h1 class='h2'>Select Content</h1><div class='p'></div></div></div>"
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
            },function(){
                $(".h2").text("Select Content")
                $(".p").text("")
            })
        }
        var letter_arr=[]
        function Getletters(first,second){
            var i=first.charCodeAt(0),j=second.charCodeAt(0)
            for(;i<=j;++i){
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
       function CssStyles(){
        $("#hangMan").css("display","block")
        $(".pole").css("opacity", 0)
        $(".shaft").css("opacity", 0)
        $(".rope").css("opacity", 0)
        $(".man").css({"display": "none","top":"50px"})
        $(".face").css("opacity", 0)
        $(".hands").css("opacity", 0)
        $(".legs").css("opacity", 0)
        $(".container").empty()
       }
    $(".li").click(function(){
       CssStyles()
       $(".score b").text(score)
        var hangman_img="<div class='hangman_img'></div>"
        var finding_word=`<div class='finding_word'></div>`
        var letters = `<div class='letters'></div>`
        var next_btn=`<div class='next_btn_container'><button class='next_btn'>NEXT WORD<i class="fas fa-arrow-right"></i>  </button></div>`
        var game_over=`<div class='game_over_container'><button class='game_over'>GAME OVER <i class="far fa-sad-tear"></i></button></div>`
        $(".container").append(hangman_img,finding_word,letters,next_btn,game_over)
        Getletters("A","Z")
        for(i in letter_arr){
            var lowerCaseLetters=letter_arr[i].toLowerCase()
            var letters_spans=`<button class='letters_spans ${letter_arr[i]}'>${letter_arr[i]}</button>`
            $(".letters").append(letters_spans)
        }
                questions_arr=questions[$(this).text()]
                var word;
                function wordsLetters(){
                     word=Math.floor(Math.random() * (questions_arr.length))
                    selected_word=questions_arr[word]
                    console.log(selected_word)
                    for(var i=0;i<selected_word.length;i++){
                        if(selected_word.indexOf(" ") == -1){
                            var words_letters=`<span class='words_letters ${selected_word[i]}'>_</span>`
                        }
                        else{
                            var words_letters=`<span class='words_letters ${selected_word[i]}'>_</span>`
                            $(".words_letters").eq(selected_word.indexOf(" ")).text("")
                        }
                        $(".finding_word").append(words_letters)
                    }
                   }
                wordsLetters()
                function decreasingLives(){
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
                        $(".indicator").css("display", "none")
                    }
                }
                function winnerCase(){
                    $(".remaining").text(lives)
                    if(selected_word.indexOf(" ") == -1){
                    if($(".exist").length == selected_word.length && lives > 0){
                        score +=1
                       $(".letters_spans").prop("disabled",true).css("opacity",0.5)
                       $(".next_btn").css("display", "block")
                       $(`.words_letters`).removeClass(`exist`)
                       $(".score b").text(score)
                       
                    }
                }
                else{
                    if($(".exist").length == selected_word.length-1 && lives > 0){
                        score +=1
                        console.log("yoy win")
                        $(".letters_spans").prop("disabled",true).css("opacity",0.5)
                        $(".next_btn").css("display", "block")
                        $(`.words_letters`).removeClass(`exist`)
                        $(".score b").text(score)
                    }
                }
                }
                function generateRandomColor(){
                    var r=Math.floor(Math.random()*256);
                    var g=Math.floor(Math.random()*256);
                    var b=Math.floor(Math.random()*256)

                    return `rgb(${r},${g},${b})`
                }
                // console.log(generateRandomColor())
                $(".letters_spans").click(function(){
                    $(this).prop("disabled",true)
                    $(this).css("opacity",0.5)
                    console.log(selected_word)
                    var current_text=$(this).text().toLowerCase()
                    if(selected_word.includes(current_text)){
                        $(`.${current_text}`).text(current_text)
                        $(`.${current_text}`).addClass(`exist`)
                        $(`.${current_text}`).css("color",`${generateRandomColor()}`)
                        $(`.words_letters`).removeClass(`${current_text}`)
                    }
                    else{
                        lives -=1
                    }
                    decreasingLives()
                    winnerCase()                   
                })
                $(".next_btn").click(function(){
                    $(".words_letters").remove()
                    $(".pole").css("opacity", 0)
                    $(".shaft").css("opacity", 0)
                    $(".rope").css("opacity", 0)
                    $(".man").css("display", "none")
                    lives=11
                    $(".remaining").text(lives)
                    $(".letters_spans").prop("disabled",false).css("opacity",1)
                    // console.log(word,selected_word,score)
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
                    $(".indicator").css("display", "block")
                    generateQuestions()
                })

                $(document).keypress(function(e){       
                    var lowercase=e.key.toUpperCase()
                    $(`.${lowercase}`).prop("disabled",true)
                     $(`.${lowercase}`).css("opacity",0.5) 
                    if(selected_word.includes(e.key)){
                        $(`.${e.key}`).text(e.key)
                        $(`.${e.key}`).css("color",`${generateRandomColor()}`)
                        $(`.${e.key}`).addClass(`exist`)
                        $(`.words_letters`).removeClass(`${e.key}`)
                    }
                    else{
                        lives -=1   
                    }
                    $(".remaining").text(lives)
                    winnerCase()
                    decreasingLives()
                    })
            
    })
   
    
    }
  
         
       })