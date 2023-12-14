// 'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
  */

// zadeklarownae stałe / zmienne

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles",
  optArticleTagsSelector = '.post-tags .list';

// zadeklarowane funkcje

function generateTitleLinks () {
  // 1. usuń zawartość listy linków w lewej kolumnie
  // znalezienie elemnty html który zawiera listę tytułów
  const titleList = document.querySelector(optTitleListSelector);
  // wyczyszczenie zawartości tego elementu
  // inner html to zawartość naszego tagu 
  // (wszytsko co jest pomiędzy tagiem otwierającym a zamykającym)
  // innerHTML = coś -> oznacza że to co do tej pory w innerHTML ma zostać zastąpione tym co po równa się
  // w tym wypadku usuwane jest to co było i zastępowane pustym stringiem
  // czyli po prostu wyczyszczone - element jest pusty
  titleList.innerHTML = "";

  // 2. dla każdego artukułu
  // znalezienie wszystkich artykułów
  const articles = document.querySelectorAll(optArticleSelector);
  let html = '';
  for(let article of articles) {
    // odczytaj id artykułu
    const articleId = article.getAttribute("id");
    // znajdź element z tytułem i zapisz zawartość do stałej
    const articleElementWithTitle = article.querySelector(optTitleSelector);
    // wez tytuł z elementu i zapisz do stałej
    // w tym przypadku nie zastępujemy zawartościc innerHTML tylko ją odczytujemy 
    // (innerHTML jest po prawej stronie znaku równa się)
    // inner HTML przypisujemy do stałej articleTitle
    const articleTitle = articleElementWithTitle.innerHTML;
    // stwórz HTML linku i zapisz do stałej
    const linkHTML = '<li><a href="#'
                    + articleId
                    +'"><span>'
                    + articleTitle
                    +'</span></a></li>';
    // wstaw html do listy linkow w lewej kolumnie
    html = html + linkHTML;
  }
  titleList.innerHTML = html;
}

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;  
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
  }
  /* [IN PROGRESS] add class 'active' to the clicked link */
  console.log("clickedElement:", clickedElement);
  clickedElement.classList.add('active');
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll("article.post.active");
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute("href");
  console.log("articleSelector: ", articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log("targetArticle:", targetArticle);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    // pobranie dla artykułu miejsca (<ul>) w którym wyświetlają się jego tagi 
    // czyli pod tekstem artykułu
    const tagList = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute("data-tags");

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray) {
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-'
                    + tag
                    +'">'
                    + tag
                    +'</a> </li>';
      /* add generated code to html variable */
      html = html + linkHTML;
    /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */
    tagList.innerHTML = html;

  /* END LOOP: for every article: */
  }
}

function tagClickHandler(event){
  /* prevent default action for this event */

  /* make new constant named "clickedElement" and give it the value of "this" */

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  /* make a new constant "tag" and extract tag from the "href" constant */

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

// tu kończą się funkcje 
// i zaczyna kod wywoływany bezpośrednio po uruchomieniu strony

// wygenerowanie listy w lewej kolumnie
generateTitleLinks();

// dodanie nasłuchiwania klinknięcia dla każdego linku w lewej kolumnie
const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

// generowanie tagów do artykułów
generateTags();

addClickListenersToTags();
