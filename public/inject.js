  
    function injectCapchat(id){

        let div = document.getElementById(id);
        div.setAttribute("class","flex flex-row");

        let divPrinci = document.createElement("div");
        divPrinci.setAttribute("id","divPrinci");
        divPrinci.setAttribute("class","divPrinci static flex flex-col m-auto block m-5 p-2 bg-gray-200 shadow-md");
        divPrinci.setAttribute("style","display: flex;")
        div.appendChild(divPrinci);

        let hint = document.createElement("div");
        hint.setAttribute("id","hint");
        hint.setAttribute("class","m-auto text-xl font-normal font-sans mb-4");
        divPrinci.appendChild(hint);

        let div1 = document.createElement("div");
        div1.setAttribute("class","flex flex-row w-full");
        divPrinci.appendChild(div1);

        let div2 = document.createElement("div");
        div2.setAttribute("class","w-24");
        div1.appendChild(div2);

        let div3 = document.createElement("div");
        div3.setAttribute("class","block");
        div2.appendChild(div3);

        let blocHorloge = document.createElement("div");
        blocHorloge.setAttribute("class","bloc-horloge");
        div3.appendChild(blocHorloge);

        let temps = document.createElement("div");
        temps.setAttribute("id","temps");
        temps.setAttribute("class","font-normal font-sans");
        blocHorloge.appendChild(temps);

        let horloge = document.createElement("canvas");
        horloge.setAttribute("id","horloge")
        horloge.setAttribute("width","65");
        horloge.setAttribute("height","400");
        horloge.setAttribute("class","border-2 border-gray-400 rounded-sm");
        blocHorloge.appendChild(horloge);

        let grille = document.createElement("div");
        grille.setAttribute("id","grille");
        div1.appendChild(grille);

        let grid = document.createElement("div");
        grid.setAttribute("class","grid grid-cols-4 ml-12 mt-4");
        grille.appendChild(grid);

        for(let i=1; i<9; i++){
            let img = document.createElement("img");
            img.setAttribute("id",i)
            img.setAttribute("onclick","verifChat(parseInt(this.id))");
            img.setAttribute("class","shrink-img rounded-md shadow-sm hover:shadow-md border border-gray-300");
            grid.appendChild(img);
        }

        let div4 = document.createElement("div");
        div4.setAttribute("class","m-auto mt-5")
        divPrinci.appendChild(div4);

        let btnRefresh = document.createElement("button");
        btnRefresh.setAttribute("id","btn1");
        btnRefresh.setAttribute("class","focus:outline-none text-white font-bold text-sm py-2.5 px-5 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg");
        btnRefresh.setAttribute("onclick","refresh(); ");
        btnRefresh.innerText = "Rafra??chir";
        div4.appendChild(btnRefresh)

        let divFailed = document.createElement("div");
        divFailed.setAttribute("id","divFailed");
        divFailed.setAttribute("class","m-auto static flex flex-col m-auto block m-5 p-2 bg-gray-200 shadow-md");
        divFailed.setAttribute("style","display: none;");
        div.appendChild(divFailed);

        let p1 = document.createElement("p");
        p1.setAttribute("class","font-normal font-sans");
        p1.innerText = "La v??rification du Cap'Chat a ??chou??.";
        divFailed.appendChild(p1);

        let divbtn =document.createElement("div");
        divbtn.setAttribute("class","m-auto mt-5");
        divFailed.appendChild(divbtn);
        

        let btnRestart = document.createElement("button");
        btnRestart.setAttribute("class", "focus:outline-none text-white font-bold text-sm py-2.5 px-5 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg");
        btnRestart.setAttribute("onclick","restart();");
        btnRestart.innerText = "Recommencer"
        divbtn.appendChild(btnRestart);

        let divSuccess = document.createElement("div");
        divSuccess.setAttribute("id","divSuccess");
        divSuccess.setAttribute("class","m-auto static flex flex-col m-auto block m-5 p-2 bg-gray-200 shadow-md p-8");
        divSuccess.setAttribute("style","display: none;");
        div.appendChild(divSuccess);

        let btnSuccess = document.createElement("button");
        btnSuccess.setAttribute("id","successBtn");
        btnSuccess.setAttribute("class","m-auto static flex flex-row m-auto block m-5 p-2 bg-white hover:shadow-lg rounded-lg shadow-md");
        //btnSuccess.setAttribute("onclick","close2("+window.endLink+");")
        divSuccess.appendChild(btnSuccess);

        let p2 = document.createElement("p");
        p2.setAttribute("class","mr-4 font-normal font-sans mt-1 text-xl")
        p2.innerText = "Cap'Chat valid??.";
        btnSuccess.appendChild(p2);

        let divCheck = document.createElement("div");
        divCheck.setAttribute("class","w4rAnimated_checkmark");
        btnSuccess.appendChild(divCheck);

        //this svg animation below doesn't work, in the capchat page directly it does though
        let svg = document.createElement("svg");
        svg.setAttribute("version","1.1");
        svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
        svg.setAttribute("viewBox","0 0 130.2 130.2");
        divCheck.appendChild(svg);

        let circle = document.createElement("circle");
        circle.setAttribute("class","path circle");
        circle.setAttribute("fill","none");
        circle.setAttribute("stroke","#000000");
        circle.setAttribute("stroke-width","8");
        circle.setAttribute("stroke-miterlimit","10");
        circle.setAttribute("cx","65.1");
        circle.setAttribute("cy","65.1");
        circle.setAttribute("r","62.1");
        svg.appendChild(circle);

        let polyline = document.createElement("polyline");
        polyline.setAttribute("class","path check");
        polyline.setAttribute("fill","none");
        polyline.setAttribute("stroke","#000000");
        polyline.setAttribute("stroke-width","8");
        polyline.setAttribute("stroke-linecap","round");
        polyline.setAttribute("stroke-miterlimit","10");
        polyline.setAttribute("points","100.2,40.2 51.5,88.8 29.8,67.5 ");
        svg.appendChild(polyline);

        //let script = document.createElement("script")
        //script.setAttribute("src","http://127.0.0.1:8080/horloge.js")
        //div.appendChild(script);

    }