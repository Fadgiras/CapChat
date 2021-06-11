let addr = "http://127.0.0.1:8080/"
    let allText
    let maxNeutral = 13
    let maxSpec = 14
    
    let penalty = 5000	
    var t = 30000;
    var initT=t;

    var done

    const divId = document.getElementById("divPrinci")
    const divId2 = document.getElementById("divFailed")
    const divId3 = document.getElementById("divSuccess")
    
    let neutralID = arrGenerator(maxNeutral)
    if (neutralID.length > maxNeutral) neutralID.splice(0, neutralID.length - maxNeutral);

    let specID = arrGenerator(maxSpec)
    if (specID.length > maxSpec) specID.splice(0, specID.length - maxSpec);
    //console.log("bouh1")
    //neutralID.forEach(Element => console.log(Element))
    //specID.forEach(Element => console.log(Element))

    function arrGenerator(max){
        let arr = new Array(max)
        for(let i=1; i<max+1;i++){
            arr.push(parseInt(i))
        }
        return arr
    }

    function getName(id) {
        var fullPath = document.getElementById(id).src;
        //var filename = fullPath.replace(/^.*[\\\/]/, '');
        // or, try this, 
        var filename = fullPath.split("/").pop();
   
        return parseInt(filename);
    }

    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
    
    function readTextFile(file) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    allText = rawFile.responseText;
                    //console.log(allText)
                }
            }
        }
        rawFile.send(null);
    }

    readTextFile(addr+"hint");
    let textArray = allText.split('\n')
    let pickedNeutral = new Array(7);
    let pickedSpec = new Array(1);
    //console.log(allText)
    //console.log(textArray[i])

    function load(){
        //console.log("bouh2")
        pickedNeutral=getRandom(neutralID, 7)
        pickedSpec=getRandom(specID, 1)
        
        //pickedNeutral.forEach(Element => console.log(Element))
        //console.log('--------------------------------------')
        //pickedSpec.forEach(Element => console.log(Element))

        var chosen = new Array(8);

        pickedNeutral.forEach(Element => chosen.push(addr+"neutre/"+Element))
        pickedSpec.forEach(Element => chosen.push(addr+"singulier/"+Element))
        //document.getElementById("1").setAttribute("src", addr+"singulier/"+Element);

        //chosen.forEach(Element => console.log(Element))

        shuffle(chosen)
        //console.log(pickedSpec)
        //console.log(chosen)

        for(let i=0; i<8; i++){
            document.getElementById(i+1).setAttribute("src", chosen[i])
        }
        //document.getElementById("1").setAttribute("src", addr+"singulier/"+id)
        
        document.getElementById("hint").innerText = (textArray[pickedSpec[0]-1])

        //window.t=30000
        //var reloader = setInterval('load()',window.t);

    }

    function verifChat(id){
        let name = getName(id)
        if(parseInt(pickedSpec[0])==name){
            console.log("bouh")
            //for (const img of document.getElementsByClassName("shrink-img")){
            //    img.style.display = 'none'
            //}
            clearInterval(reloader);
            clearTimeout(window.t);
            done()
            switchDiv(divId, divId3)  
        }else{
            reload()
        }
        //console.log(name)
        //console.log(pickedSpec[0])
    }

    function reload(){
        let rPenalty=window.initT-penalty*window.loop
        if(window.initT-penalty*window.loop<=0){
            //console.log("bouh1")
            done();
            switchDiv(divId, divId2)
            clearTimeout(window.t)
            clearInterval(reloader)
        }
        else if((window.initT-penalty*loop)<0){
            //console.log("bouh2")
            rPenalty=0
        }
        else{
            //console.log("bouh3")
            load();
            clearTimeout(window.t)
            clearInterval(reloader)
            loop++;
            setTimer(rPenalty)
            reloader = setInterval('reload()',rPenalty);
            clearMouseEvent()
        }
        //console.log("loop:",loop)
    }

    function refresh(){
        load();
        clearTimeout(window.t)
        clearInterval(reloader)
        setTimer(window.initT)
        //console.log("bouh", window.initT)
        reloader = setInterval('reload()',window.initT);
        clearMouseEvent()
    }

    function done(){
        for (const img of document.getElementsByClassName("shrink-img")){
            img.style.pointerEvents = "none";
        }
        if(window.autoRedirect){
            reloader = setInterval("close2("+window.endLink+")",2200)
            //console.log(window.endLink)
        }
    }
    
    function switchDiv(from, to){
        from.style.display='none'
        to.style.display='flex'
    }

    function restart(){
        switchDiv(divId2, divId)
        clearTimeout(window.initT)
        clearInterval(window.initT)
        clearTimeout(window.t)
        clearInterval(reloader)
        loop=1
        restartMouseEvent()
        refresh()
    }

    function clearMouseEvent(){
        for (const img of document.getElementsByClassName("shrink-img")){
            img.style.pointerEvents = "auto";
        }
    }

    function restartMouseEvent(){
        for (const img of document.getElementsByClassName("shrink-img")){
            img.style.pointerEvents = "initial";
        }
    }

    function close1(){
        divId3.style.display="none"
    }

    function close2(str){
        divId3.style.display="none";
        window.location.href=str;
    }

    document.getElementById("successBtn").addEventListener('click',() => {
        close2(window.endLink)
    })
    /*
    function switchDivProto(){
        //TODO This also blinks, ffs
        if(divId.style.display=='flex'){
            divId.style.display='none'
            divId2.style.display='flex'
        }
        else if(divId2.style.display=='flex'){
            divId.style.display='flex'
            divId2.style.display='none'
        }

        //TODO Know why those things below blink AF
        //divId.style.display = (divId.style.display == 'flex' ? 'none' : 'flex')
        //divId2.style.display = (divId2.style.display == 'none' ? 'flex' : 'none')
    }*/

    var loop = 1
    var reloader = setInterval('reload()',window.initT);
    window.onload = document.getElementById("btn1").click()
    //setTimer(window.initT-penalty*window.loop);
