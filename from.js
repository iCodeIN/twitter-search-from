setTimeout(() => {
  const input = document.querySelectorAll("input[placeholder='Search Twitter']")[0];
  input.style.position = 'relative'
  input.addEventListener('input', (event) => {
    const value =  event.currentTarget.value
    const token = document.createElement('span')
    if (value === 'from:') {
      input.value = ''
      token.style.cssText = 'border-radius: 5px; background-color: #1b91eb; color: white; display: block; position: absolute; padding: 2px 5px; top: 10px;'
      input.style.cssText = 'padding-left: 50px;'
      const inputContainer = input.parentNode.append(token)
      token.textContent = 'from:'
    }
  }, false);
}, 300) 
