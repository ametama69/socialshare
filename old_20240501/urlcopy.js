const textElement = document.getElementById('sharelist');
console.log(textElement.innerText.trim());
const shareListText = document.getElementById('sharelist').innerText.trim();
const shareListArray = JSON.parse(shareListText);
console.log(shareListArray)

const sns = Vue.createApp({
    data(){
      return {
        number:1,
        pageinfo:getPageInfo(),
        pageinfotxt:PageInfotxt(),
        shareListArray:shareListArray
      }
    }
  })
  sns.mount('#sns')
 
 
 function copyToClipboard(text) {
   var textarea = document.createElement("textarea");
   textarea.value = text;
   document.body.appendChild(textarea);
   textarea.select();
   document.execCommand('copy');
   document.body.removeChild(textarea);
 }
 
 function getPageInfo() {
   var pageTitle = document.title;
   var pageURL = window.location.href;
   return { title: pageTitle, url: pageURL };
 }
 
 function PageInfotxt() {
   var pageTitle = document.title;
   var pageURL = window.location.href;
   return encodeURIComponent(pageTitle+"\r\n"+pageURL);
 }
 
 function copyMd() {
   pageInfo = getPageInfo();
   copyToClipboard(`[${pageInfo.title}](${pageInfo.url})`);
   const copied2 = document.getElementById('copied2')
   copied2.classList.add('is-active')
   setTimeout(() => {
     copied2.classList.remove('is-active')
   }, 1600)
 }
 
 function copyInfo() {
   pageInfo = getPageInfo();
   copyToClipboard(`${pageInfo.title} ${pageInfo.url}`);
   const copied = document.getElementById('copied')
   copied.classList.add('is-active')
   setTimeout(() => {
     copied.classList.remove('is-active')
   }, 1600)
 }
 
 
 
 function openUrl(url) {
   pageInfo = getPageInfo();
  window.open(url+`${pageInfo.title} ${pageInfo.url}`, '_blank');
 }