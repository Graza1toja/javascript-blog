'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/
const titleClickHandler = function(event){
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

  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

//funkcja generuj tytuł linku  
function generateTitleLinks(){
  console.log('generateTitleLinks');
  /* remove contents of titleList - usuń zawartość listy tytułów*/
  const titleList = generateTitleLinks.querySelector(optTitleListSelector);
  /* for each article - dla każdego artykułu */
  const articles =
  for(let titleLink of titleLinks){

  }
    /* get the article id - pobierz id artykułu*/

    /* find the title element - znajdz tytuł elementu  */

    /* get the title from the title element - pobierz tytuł z elementu tytuł*/

    /* create HTML of the link - utwórz html linku*/

    /* insert link into titleList - wstaw link do listy tytułów*/

}

generateTitleLinks();
}
  