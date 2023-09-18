// POURQUOI JE N4ARRIVE PAS A creer le bouton COLLER specifique à chaque carte?
// ==> utilsier la fonctin dans une classe ? méthode de classes ?

//Créer des liens à partir des keywords

//Filtrer les data selon les langages

// ne pas prendre l'erreu à la légère concernant le pb du copy2clipboard c peut etre ça le pb !!!
// Idees de fctionnalites en plus : mettre en favoris / création de sa propre carte en rajoutant via un formulaire

const body=document.querySelector("body")
const keywords= document.querySelector("#keywords")
const leftMenuSpan= document.querySelector("#left-menu-span")
const leftMenu= document.querySelector("#left-menu")
const leftMenuWrapper= document.querySelector("#left-menu-wrapper")
const wrapper= document.querySelector("#wrapper")
let cards=document.querySelector("#cards")
let  keywordList=[]
let  keywordLinks=""

const datas = [

    {
        nom : "switch" ,
        definition : ["Si on a une valeur à comparer "] ,
        example : [ "switch (expr) {",
                    "case 'x':",
                    "console.log(sf);",
                    "break;",
                    "case '':",
                    "break;",
                    "default:"] ,
        type : "JS"
    } , 


    {
        nom : "display Niveau 3" ,
        definition : ["Display correspond en fait à deux valeurs,même si on en voit qu'une : " ,
        "La première, valeur interne = de l'élément : inline ou block", "la deuxième, valeur externe = des enfants : flex grid table etc ...",
        "cf. https://la-cascade.io/articles/approfondir-la-propriete-display-les-deux-valeurs-de-display"
    ] ,
        example : ["display : inline/block/flex/","inline-block/inline-flex/inline-grid ;","table,list-items..."] ,
        type : "CSS"
    } ,
    {
        nom : "Alignement du texte" ,
        definition : ["Utiliser text-align et vertical-align"] ,
        example : ["text-align: center;",
        "vertical-align: baseline;"] ,
        type : "CSS"
    } ,
    {
        nom : "section" ,
        definition : ["=>Balise HTML"] ,
        example : ["<section> </section>"] ,
        type : "HTML"
    } ,
    {
        nom : "set" ,
        definition : ["=>Unique set of data"] ,
        example : ["const mySet1 = new Set();"] ,
        type : "JS"
    } ,
    {
        nom : ".getComputedStyle()" ,
        definition : ["=>Récupérer la valeur d'une propriété CSS"] ,
        example : ["window.getComputedStyle(elemnt).propriete" ],
        type : "JS"
    } ,
    {
        nom : "box-sizing" ,
        definition : ["=>To customize box behavior"] ,
        example : ["box-sizing: content-box;", "box-sizing: border-box;" ],
        type : "CSS"
    } ,
    {
        nom : "Dégradés" ,
        definition : ["=>3 types :","linear-gradient","radial-gradient","repeating-linear-gradient( ça fctne avec radial gradient aussi)"],
        example : "",
        type : "CSS"
    } ,

    {
        nom : "linear-gradient" ,
        definition : ["=>On définit la direction (to right, to top right,45deg qui est, par défaut, de HT en bas)",
    "et éventuellment un ou des color stop"] ,
        example : ["linear-gradient : red, yellow 10% (=> color stop ) ;"],
        type : "CSS"
    } ,
    {
        nom : "radial-gradient" ,
        definition : ["=>On définit la direction (circle closest-side, ou farthest-side ou closest-corner ou farthest-corner)",
        " qui est, par défaut, du centre vers l'extér))",
    "et éventuellment un ou des color stop"] ,
        example : ["radial-gradient : circle yellow,#f06d06 ;"],
        type : "CSS"
    } ,
    {
        nom : "repeating-linear-gradient" ,
        definition : ["=>ça fctne avec radial gradient aussi",
                    "le dernier color-stop déterminé la taille"] ,
        example : ["repeating-linear-gradient:45deg,yellow,yellow 10px,red 10px,red 20px"],
        type : "CSS"
    } ,

    {
        nom : "Couleurs 1/3" ,
        definition : ["=> 4 teintes maximum ",
        "- Teinte dominante : couleur liée à la thématique", 
        "- Teinte secondaire : complémentaire ou contrastant avec la dominante",
        "- Teinte d’accent : couleur bien visible à parsemer dans liens boutons icônes" ,
        "- La 1 et la 2 peuvent avoir des variations de nuances de tons, d'ombres"] ,
        example : [":root{",
            "--mainColor : rgb(0, 0, 255);", 
            "--secondColor : rgb(255, 183, 0) ;" ,
            "--accentColor : rgb(24, 235, 13) ;" ,
            "--fourthColor : rgb(129, 129, 202) ; }" ],
        type : "CSS"
    } ,
    {
        nom : "Couleurs 2/3" ,
        definition : [  " Types de notation :",
                        "- RGB : RRGGBB" , 
                        "- RGBA : RRGGBBA avec A de 0 à 1" ,
                        "- HEX codes #rrggbbaa avec valeurs de 0 à 9 + de A à F " ,
                        "- HSL Hue Saturation Lightness avec : ", 
                        " Hue = teinte en degrés de 0 à 360" ,
                        " Saturation = force de la couleur de 0 à 100 où 0 c'est gris et 100 c'et flashy",
                        " Lightness de 0(noir) à 100 (blanc)",
                        " Alpha avec le / et la valeur entre 0 et 1"],

        example : ["rgba(0, 0, 255, 0.82) ;" , "##0000ffd1 ;" ,"hsla(240, 100%, 50%, 0.82);" ],
        type : "CSS"
    } ,
    {
        nom : "Couleurs 3/3" ,
        definition : [  " Utiliser HSL pour calculer couleurs",
                        "- Couleur complémentaire => H +180°" , 
                        "- Sch.de cleurs monochromatique :",
                        " => Couleurs additionnelles => L - 1/3L et L-2/3L" ,
                        "- Sch.de cleurs neutre :",
                        "=> H + x où x<90° et/ou H - x où x<90°" ,
                        "- Sch.de cleurs triadique :",
                        "H + 120°" ,
    ],

        example : [ "--mainColor : hsl(30, 90%, 29%)",
                    "--compColor : hsl(210, 90%, 29%)",
                    "--add1Color : hsl(30, 30%, 29%)",
                    "--add2Color : hsl(30, 60%, 29%)",
                    "-neut1Color : hsl(35, 90%, 29%)",
                    "-neut2Color : hsl(25, 90%, 29%)",
                    "--triadColor : hsl(150, 90%, 29%)",
     ],
        type : "CSS"
    } ,
    {
        nom : "Google Fonts" ,
        definition :["Polices sur le site"] ,
        example : [ "Coller le <link\=\"stylesheet\...\">  dans le head de l'HTML",
                    "Coller le <link\=\"preconnect\...\"> dans le head de l'HTML", 
                    "Déclarer la font avec les font-family"] ,
        type : "OTHERS"
    } ,
    {
        nom : "MDI WEBFONTS ICONS" ,
        definition : ["=>https://pictogrammers.com/docs/library/mdi/getting-started/webfont/"] ,
        example : ["Copier le lien dans un <link> dans le head", "Dans la balise de l'élément, rajouter la class class=\"mdi mdi-cart\" par exple"] ,
        type : "OTHERS"
    } ,
    {
        nom : "CSS Variables" ,
        definition : ["=>Peut contenir des couleurs, chiffres, objets, images et + " ],
        example : [":root{--bckColor : #1e90ff ;}",
                    "color : var(--bckColor) ;",
                    "let rs = getComputedStyle(r);",
                    "rs.getPropertyValue('--blue')",
                    "r.style.setProperty('--blue', 'lightblue')"
        ] ,
        type : "CSS"
    } ,
    {
        nom : "JS ASYNCHRONE" ,
        definition : ["Les tâches synchrones sont mises dans la STACK.", 
        "Les tâches asynchrones dans la QUEUE grâce à l'API web asynchrone :" ,
        " 1/ setTimeout etc sont dans la macrotask queue.", 
        " 2/ promises dans la microtasks queue.",
        "Une fois les tâches de la stack finies, l'event loop va exécuter les tâches de la queue, les microtasks avant les macrotasks.",
        "Callbacks = fonction utilisée comme argument d'une autre fonction",
        "Pvt être utilisées comme argument dans le setTimeout et donc être lancées après la réalisation du code aynchrone.",
        "Mais attention à la pyramide de callbacks !!",
        "On a donc créé les promises qui peuvent être intriquées grâce au Chaining de promises .then et .catch .",
        " Puis async await a été créé pour utiliser les promises" ],
        example : [":root{--bckColor : #1e90ff ;}",
                    "color : var(--bckColor) ;",
                    "let rs = getComputedStyle(r);",
                    "rs.getPropertyValue('--blue')",
                    "r.style.setProperty('--blue', 'lightblue')"
        ] ,
        type : "JS"
    } ,
    {
        nom : "$PATH" ,
        example : ["$PATH=/usr/bin/local"] ,
        definition : ["chemin vers les binaires =exécutables des programmes" , "à modifier, dans votre environnement, en utilisant votre .bash_profile", "— celui qui est enregistré dans /Users/votrenomdutilisateur/.bash_profile"] ,
        type : "OTHERS"
    } 
]

//pas encore utilisées
const bonnesPratiques = [
    "Ne pas créer des variables JS inutiles !" ,
    "Utiliser des sélecteurs CSS" ,
    "Utiliser la sémantique HTML" ,
    "Utiliser grid pour l organisation générale et flex pour chaque sous-partie "
]

//ScrollToTop
document.getElementById("scrollToTop").addEventListener("click",()=>{window.scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  });})

// Visibilite du menu de gauche
leftMenuSpan.addEventListener("mouseover",()=>{
leftMenu.style.visibility="visible";
wrapper.style.left="10vw"})
leftMenuWrapper.addEventListener("mouseleave",()=>{
leftMenu.style.visibility="hidden";
wrapper.style.left="0vw"})

//Fonction pour filtrer par langage
let htmlCards=[]
function filter(type){
    let filtered=datas.filter((data)=>(data.type==type))
    console.log (filtered)
    wrapper.removeChild(cards)
    cards=document.createElement("div")
    cards.setAttribute("id","cards")
    wrapper.appendChild(cards)
    displayCard(filtered)
}    
document.querySelector("#HTMLfilter").addEventListener("click",()=>filter("HTML"))
document.querySelector("#CSSfilter").addEventListener("click",()=>filter("CSS"))
document.querySelector("#JSfilter").addEventListener("click",()=>filter("JS"))
document.querySelector("#OTHERSfilter").addEventListener("click",()=>filter("OTHERS"))
document.querySelector("#ALLfilter").addEventListener("click",()=>{
    wrapper.removeChild(cards)
    cards=document.createElement("div")
    cards.setAttribute("id","cards")
    wrapper.appendChild(cards)
    displayCard(datas)})



//Création de la liste des keywords

    for (let data of datas) {
        keywordList.push(data.nom)
        let keywordLink=document.createElement("a")
        keywordLink.textContent=`${data.nom}`
        keywordLink.setAttribute("href" ,`#data${data.nom}`)
        keywords.appendChild(keywordLink)
    }
    keywordList.join()
    console.log(keywordList)


//Affichage des cartes
function displayCard(dataArray){
    for (let data of dataArray) {
        //creation des elements de la carte
        let index=dataArray.indexOf(data)
        let card=document.createElement("div")
        let nom=document.createElement("h3")
        let definition=document.createElement("div")
        let example=document.createElement("p")
        let type=document.createElement("span")
        let copyButtonImg=document.createElement("img")
        //attribution des class appropriées
        card.setAttribute("class" ,"card")
        card.setAttribute("id" ,`card${index}`)
        nom.setAttribute("class" ,"nom")
        nom.setAttribute("id" ,`data${data.nom}`)
        definition.setAttribute("class" ,"definition")
        example.setAttribute("class" ,"example")
        type.setAttribute("class" ,"type")
        copyButtonImg.setAttribute("class" ,"copyButton")
        copyButtonImg.setAttribute("src" ,"https://icongr.am/octicons/copy.svg?size=128&color=currentColor")
        copyButtonImg.setAttribute("id" ,`copyButton${index}`)
        
        //Création des références aux textes de l'objet
        let texteNom=document.createTextNode(data.nom)
        let texteType=document.createTextNode(data.type)
            //Itération pour afficher la définition ligne par ligne
            for(let line of data.definition) {
                let defParag=document.createElement("p")
                let defLineText=document.createTextNode(line)
                defParag.appendChild(defLineText)
                definition.appendChild(defParag)
            }
            //Itération pour afficher l'example ligne par ligne
            for(let line of data.example) {
                let exampleParag=document.createElement("p")
                let exampleLineText=document.createTextNode(line)
                exampleParag.appendChild(exampleLineText)
                example.appendChild(exampleParag)
            }

            //Ajout des textes aux éléments appropriés
            nom.appendChild(texteNom)
            type.appendChild(texteType)
            
            //Raccordement des éléments à la carte
            card.appendChild(nom)
            card.appendChild(definition)
            card.appendChild(example)
            card.appendChild(type)
            card.appendChild(copyButtonImg)
            //Raccordement de la carte au container #cards
            cards.appendChild(card) 
            // //Création d'un bouton pour copier le code ds le presse-papier
        
            // let copyButton=document.getElementById(`copyButton${index}`)
            // copyButton.addEventListener("click",()=>copyToClipboard(data))
            // function copyToClipboard(data){
            //     let textToCopy=data.example.join()
            //     console.log(textToCopy)
            //     navigator.clipboard.writeText(textToCopy);
            //     // console.log(textToCopy, `#copyButton${data.index}`)
            //     alert("Copied the text: " + textToCopy);
            // }
    }    
}
displayCard(datas)

