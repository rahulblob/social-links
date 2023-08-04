const share = document.querySelector('.share');
share.addEventListener('click',async ()=>{
  const shareData = {
  title: document.title,
  text: document.title,
  url: window.location.href
  };
  await navigator.share(shareData);
});