$(document).ready(function(){
    var questions={
        "Animals": ["turtle" , "dragon","sheep","snake","monkey","penguin","giraffe","butterfly","eagle","goat","dolphin","hippo","lizard","kangaroo","beetle","camel","cow"],
        "Buildings": ["1236","226"],
        "Places": ["bedroom","bathroom","restaurant","shopping","kitchen","store","caridor","classroom","library","playgrond","supermarket","hair salon"],
        "Kitchen": ["123","22"],
        "Personal": ["phone","credit card","headphones","suitcase","watch","money","purse","wallet","newspaper","id caed","flaslight","book"],
        "Sports": ["cycling","wrestling","swimming","badminton","skiing","running","golf","skateboarding","boxing","volleyball","tennis","bowling","cricket"],
        "Nature": ["tornado","lake","island","snow","flower","the moon","volcano","planet","rainbow","the sun","clouds","desert","mountain","stars","wind"],
        "Music": ["1237","227"],
        "Jobs": ["policemen","nurse","teacher","dancer","computer technician","cashier","hairdresser","doctor","mechanic","graphic designer","receptionist" ,"politician","electrician",'farmer'],
        "Colors": ["1234","224"],
        "Clothes": ["tshirt","suit", "belt","pants","dress","ring","skirt","shirt","shoes","glasses","hat","watch","bag","sweater","umbrella"],
        "Body": ["1235","225"],
        "Food": ["chicken","candy","ketchup","chocolate","hamburger","bread","eggs","sushi","wine","pepper","stake","lemonade","kebabs","pizza","waffle","spaghetti","cheeseburger","cheese","bread rolls","fried eggs"],
        "Fruits": ["banana","apple","cherry","blueberry","blackberry","coconut","nectarine","peach","passion fruit","watermelon","strawberry","quince","pineapple"],
        "Vegetables": ["carrots","cabbage","garlic","mushrooms","cucumber","peaches","tomatoes","broccoli","pepper","rice","avocado","Pumpkin","olive"],
        "Transport": ["bike","ambulance","motorbike","tracktor","escalator","helicopter","skateboard","moped","train","plane","scooter","rocket"],
        "Things": ["broken leg","224"],
        "Thigs": ["broken leg","224"],
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
       
    $(".li").click(function(){
        $(".container").empty()
        var hangman_img="<div class='hangman_img'></div>"
        var finding_word=`<div class='finding_word'></div>`
        var letters = `<div class='letters'></div>`
        $(".container").append(hangman_img,finding_word,letters)
        Getletters("A","Z")
        for(i in letter_arr){
            var letters_spans=`<button class='letters_spans'>${letter_arr[i]}</button>`
            $(".letters").append(letters_spans)
        }
            var questions_arr=questions[$(this).text()]
                var word=Math.floor(Math.random() * (questions_arr.length))
                var selected_word=questions_arr[word]
                for(var i=0;i<selected_word.length;i++){
                    var words_letters=`<span class='words_letters ${selected_word[i]}'>_</span>`
                    $(".finding_word").append(words_letters)
                }
                console.log(word, questions_arr[word])
                $(".letters_spans").click(function(){
                    $(this).prop("disabled",true)
                    $(this).css("opacity",0.5)
                    var current_text=$(this).text().toLowerCase()
                    if(selected_word.includes(current_text)){
                        $(`.${current_text}`).text(current_text)
                    }
                    console.log($(this).text(),selected_word,current_text)
                })
            
    })
   
    
    }
   
         
       })