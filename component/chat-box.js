  
 
// const textarea = document.querySelector('.chatbox-message-input')
// const chatboxForm = document.querySelector('.chatbox-message-form')

// textarea.addEventListener('input', function () {
// 	let line = textarea.value.split('\n').length

// 	if(textarea.rows < 6 || line < 6) {
// 		textarea.rows = line
// 	}

// 	if(textarea.rows > 1) {
// 		chatboxForm.style.alignItems = 'flex-end'
// 	} else {
// 		chatboxForm.style.alignItems = 'center'
// 	}
// })

// const chatboxToggle = document.querySelector('.chatbox-toggle')
// const chatboxMessage = document.querySelector('.chatbox-message-wrapper')
// chatboxToggle.addEventListener('click', function () {
// 	chatboxMessage.classList.toggle('show')
// })
// const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle')
// const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

// dropdownToggle.addEventListener('click', function () {
// 	dropdownMenu.classList.toggle('show')
// })

// document.addEventListener('click', function (e) {
// 	if(!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
// 		dropdownMenu.classList.remove('show')
// 	}
// });
 


function messageBox(){

  return 
  ` <div class="chatbox-wrapper">
  <div class="chatbox-toggle">
    <i class="bx bx-message-dots"></i>
    <img
      id="message-img"
      src="https://cdn2.iconfinder.com/data/icons/business-and-startup-line-vol-1/130/conversation__chat__bubble__messages_-1024.png"
      alt=""
    />
  </div>
  <div class="chatbox-message-wrapper">
    <div class="chatbox-message-header">
      <div class="chatbox-message-profile">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          class="chatbox-message-image"
        />
        <div>
          <h4 class="chatbox-message-name">Jonathan Doe</h4>
          <p class="chatbox-message-status">online</p>
        </div>
      </div>
      <div class="chatbox-message-dropdown">
        <i
          class="bx bx-dots-vertical-rounded chatbox-message-dropdown-toggle"
        ></i>
        <ul class="chatbox-message-dropdown-menu">
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">Report</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="chatbox-message-content">
      <h4 class="chatbox-message-no-message">
        You don't have message yet!
      </h4>
    </div>
    <div class="chatbox-message-bottom">
      <form action="#" class="chatbox-message-form">
        <textarea
          rows="1"
          placeholder="Type message..."
          class="chatbox-message-input"
        ></textarea>
        <button type="submit" class="chatbox-message-submit">
          <i class="bx bx-send"></i>
        </button>
      </form>
    </div>
  </div>
  </div>`
}
export {messageBox};