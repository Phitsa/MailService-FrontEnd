export function setupPageInteractions(setRegisterErrorMessage, setLoginErrorMessage) {
  const changePage = document.getElementById('changePage');
  const h1 = document.getElementById('h1');
  const p = document.getElementById('p');
  const pinkSection = document.getElementById('pinkSection');
  const registerSection = document.getElementById('registerSection');
  const loginSection = document.getElementById('loginSection');

  changePage.addEventListener('click', function() {
    pinkSection.classList.toggle('rounded-l-lg');
    pinkSection.classList.toggle('rounded-r-lg');
    loginSection.classList.toggle('opacity-0');
    registerSection.classList.toggle('opacity-0');
    
    if (!pinkSection.classList.contains('translate-x-full')) {
      pinkSection.classList.add('translate-x-full');
      h1.innerText = 'Great to See You Again!';
      p.innerText = 'Back for more? We’ve got it all set up.';
      changePage.innerText = 'Login';
      return;
    }
    
    pinkSection.classList.remove('translate-x-full');
    h1.innerText = 'Dont have an Account?';
    p.innerText = 'Sign Up now!';
    changePage.innerText = 'Sign up';
  });

  document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const userData = {
      username: "anthony.felipe.ff@gmail.com",
      password: "121205@Afff"
    };

    console.log('Sending user data:', userData);

    try {
      const response = await fetch('api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User registered successfully:', data);
        // Redirecionar para a página de login
        window.location.href = '/access';
      } else {
        const errorData = await response.json();
        console.error('Failed to register user:', errorData.message || response.statusText);
        setRegisterErrorMessage(errorData.message || 'Failed to register user');
        setLoginErrorMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setRegisterErrorMessage('An unexpected error occurred');
      setLoginErrorMessage('');
    }
  });

  document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('loginName').value;
    const password = document.getElementById('loginPassword').value;
    const userData = {
      username: email,
      password: password
    };

    console.log('Sending user data:', userData);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User loged successfully:', data);

        localStorage.setItem('authToken', data.data.token);

        window.location.href = '/';
      } else {
        const errorData = await response.json();
        console.error('Failed to register user:', errorData.message || response.statusText);
        setLoginErrorMessage(errorData.message || 'Failed to register user');
        setRegisterErrorMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginErrorMessage('An unexpected error occurred');
      setRegisterErrorMessage('');
    }
  });

}