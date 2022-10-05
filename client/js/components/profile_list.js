function renderProfileList() {
  document.querySelector('#page').innerHTML = `

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
          <span onClick="editProfile(event)">edit</span>
          <span onClick="deleteProfile(event)">delete</span>
        </header>
        <p>${profile.skills_summary}</p>
        <img src="${profile.profile_img}">
        <h3>${profile.location}</h3>
        <h3>${profile.rate}</h3>
        <h3>${profile.contact}</h3>

      </section>
    `).join('')
}

function deleteProfile(event) {
  const deleteBtn = event.target
  const profileDOM = deleteBtn.closest('.profile')
  const profileId = profileDOM.dataset.id

  fetch(`/api/profiles/${profileId}`, {
    method: 'DELETE'
  })
    .then(() => {
      state.profiles = state.profiles.filter(p => p.id != profileId)
      renderProfileList()
    })
}