const tabsChange = () =>{
   const tabs = document.querySelectorAll('.tab-btn');

   const menuClicked = (tab) => {
      tabs.forEach(tab => tab.classList.remove('active'));
      tab.classList.add('active');

      const contents = document.querySelectorAll('.content');
      contents.forEach(content => content.classList.remove('show'))

      const contentId = tab.getAttribute('content-id');
      const content = document.getElementById(contentId)
      content.classList.add('show');
   }

   tabs.forEach(tab => tab.addEventListener('click', () => menuClicked(tab)));

   

   const currentActiveTab = document.querySelector('.tab-btn.active')
   if(currentActiveTab) {
   menuClicked(currentActiveTab);
}
}
tabsChange();

const fechaAbreSidebar = () =>{
const btnMenu = document.querySelector('.btn-menu');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const nameEmail = document.querySelector('.name-email')
const tabContents = document.querySelector('.tab-contents')
const btnMenuMobile = document.querySelector('.btn-menu-mobile')


document.addEventListener('click', (e) =>{
   const el = e.target;
   if(el.classList.contains('btn-menu')){
      sidebar.classList.add('expanded')
      btnMenu.classList.add('hide')
      nameEmail.classList.add('show')
      closeBtn.classList.add('show')
      tabContents.classList.add('margExpanded')
   }else if(el.classList.contains('close-btn')){
      sidebar.classList.remove('expanded')
      closeBtn.classList.remove('show')
      btnMenu.classList.remove('hide')
      nameEmail.classList.remove('show')
      tabContents.classList.remove('margExpanded')

   }else if(el.target !== btnMenu){
      sidebar.classList.remove('expanded')
      tabContents.classList.remove('margExpanded')
      document.body.classList.remove('active')
      btnMenu.classList.remove('hide')
      closeBtn.classList.remove('show')
      nameEmail.classList.remove('show')
   }

})
}
fechaAbreSidebar();


document.addEventListener('click', (e) =>{
   const sidebar = document.querySelector('.sidebar');
   const nameEmail = document.querySelector('.name-email')
   const closeBtn = document.querySelector('.close-btn');
   const logo = document.querySelector('.logo')
   const btnMenuMobile = document.querySelector('.btn-menu-mobile')

   const el = e.target;
   if(el.classList.contains('btn-menu-mobile')){
      sidebar.classList.add('expanded')
      nameEmail.classList.add('show')
      document.body.classList.add('active')
   }else if(el.classList.contains('close-btn')){
      document.body.classList.remove('active')
      nameEmail.classList.remove('show')
   }
})