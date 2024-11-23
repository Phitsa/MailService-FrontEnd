<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EmailService</title>
  <link rel="stylesheet" href="/dist/output.css">
</head>
<body class="h-screen w-screen flex items-center justify-center bg-gray-200">

  <main id="main" class="relative lg:w-4/5 lg:h-4/5 w-full h-3/5 md:m-0 m-2 bg-white shadow-lg rounded-lg flex justify-center md:justify-start transition-all duration-300">
    <section id="pinkSection" class="hidden transition-all z-10 duration-500 ease-in-out w-1/2 h-full bg-cerise md:flex flex-col items-center justify-center rounded-l-lg">

      <h1 id="h1" class="text-3xl lg:text-4xl text-center text-white font-semibold mb-2">Dont have an Account?</h1>
      <p id="p" class="text-lg lg:text-xl text-center text-pink-200 font-semibold mb-4">Sign Up now!</p>

      <button id="changePage" class="bg-white text-cerise font-semibold text-lg rounded-3xl w-36 h-12 hover:bg-cerise hover:w-40 hover:h-14 transition-all duration-500 hover:ring-2 ring-white hover:text-white" type="button">Sign up</button>
    </section>

    <section id="registerSection" class="absolute transition-all opacity-0 duration-300 ease-in-out sm:w-full w-full md:w-1/2 h-full flex flex-col items-center justify-center rounded-r-lg ">

      <div class="text-center mb-10">
        <h1 class="text-4xl lg:text-5xl font-semibold text-cerise mb-1">Create Account</h1>
        <p class="text-gray-400">Fill in with you personal data</p>
      </div>

      <form class="w-3/4 lg:w-2/3" action="register">
        <div class="flex flex-col mb-2">
          <label class="text-gray-600" for="">Name</label>
          <input class="bg-gray-200 rounded h-12 p-4 focus:outline-none hover:border hover:border-gray-400 focus:border-gray-700" type="text" placeholder="Type your name">
        </div>

        <div class="flex flex-col mb-2">
          <label class="text-gray-600" for="">E-mail</label>
          <input class="bg-gray-200 rounded h-12 p-4 focus:outline-none hover:border hover:border-gray-400 focus:border-gray-700" type="text" placeholder="Type your e-mail">
        </div>

        <div class="flex flex-col mb-6">
          <label class="text-gray-600" for="">Password</label>
          <input class="bg-gray-200 rounded h-12 p-4 focus:outline-none hover:border hover:border-gray-400 focus:border-gray-700" type="password" placeholder="Type your password">
        </div>
        <div class="flex justify-center mb-2">
          <button class="bg-cerise text-white font-semibold text-lg rounded-3xl w-36 h-12 hover:bg-white hover:w-40 transition-all duration-500 hover:ring-2 ring-pink-400 hover:text-pink-400" type="submit">Sign up</button>
        </div>
        <div class="text-center">
          <button type="button" id="changeLogin" class="md:hidden text-gray-500">
            Alrealy have an account? Login
          </button>
        </div>
      </form>
    </section>

    <section id="loginSection" class="absolute md:translate-x-[100%] z-0 w-5/6 md:w-1/2 h-full transition-all duration-300 flex flex-col items-center justify-center rounded-l-lg ">

      <div class="text-center mb-10">
        <h1 class="text-5xl font-semibold text-cerise mb-1">Login</h1>
        <p class="text-gray-400">Type your credentials</p>
      </div>

      <form class="w-3/4 lg:w-2/3" action="login">
        <div class="flex flex-col mb-2">
          <label class="text-gray-600" for="">E-mail</label>
          <input class="bg-gray-200 rounded h-12 p-4 focus:outline-none hover:border hover:border-gray-400 focus:border-gray-700" type="text" placeholder="Type your e-mail">
        </div>

        <div class="flex flex-col mb-6">
          <label class="text-gray-600" for="">Password</label>
          <input class="bg-gray-200 rounded h-12 p-4 focus:outline-none hover:border hover:border-gray-400 focus:border-gray-700" type="password" placeholder="Type your password">
        </div>
        <div class="flex justify-center mb-2">
          <button class="bg-cerise text-white font-semibold text-lg rounded-3xl w-36 h-12 hover:bg-white hover:w-40 transition-all duration-500 hover:ring-2 ring-pink-400 hover:text-pink-400" type="submit">Login</button>
        </div>
        <div class="md:hidden text-center">
          <button type="button" id="changeSignUp" class="text-gray-500">
            Dont have an Accont? Sign up
          </button>
        </div>
      </form>
    </section>
  </main>
  <script type="module" src="/src/main.js"></script>

</body>
</html>
