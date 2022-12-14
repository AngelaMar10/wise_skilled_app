function renderProfileList() {
  document.querySelector('#page').innerHTML = `
    <div class="banner">
      <p class="page-description">Wise skills empowers Seniors to demonstrate that experience and wisdom are limitless.</p>
      <h4>Let people to hire you. Sign-up today!</h4> 
    </div>
    <section class='profile-list'>
      ${renderProfiles()}
    </section>
  `
}  
    
  function renderProfiles() {  
    
  return state.profiles.map(profile =>`
      <section class='profile' data-id='${profile.id}'>
        <header>
          <h2>${profile.headline}</h2>
          <p>${profile.author}</p>
        <p>${profile.skills_summary}</p>
        <img src="${profile.profile_img}">
        <h3 class="location">Location: ${profile.location}</h3>
        <h3 class="rate">Rate: $ ${profile.rate} aud</h3>
        <h3 class="contact">Contact: ${profile.contact}</h3>
      </header>
      </section>
    `).join('')
}



