---
permalink: /chatter/
---
# 施工中
<script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />

<!-- <body>
  <div id="wrapper">
    <div id="menu">
      <p class="welcome">Welcome, <b></b></p>
      <p class="logout"><a id="exit" href="#">Exit Chat</a></p>
    </div>
    <div id="chatbox"></div>
      <form name="message" action="">
        <input name="usermsg" type="text" id="usermsg" />
        <input name="submitmsg" type="submit" id="submitmsg" value="Send" />
      </form>
    </div>
</body> -->

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
  import { GoogleAuthProvider, signInWithPopup, getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBIgEU7uktjcksFiLs5ejsN2gAkezAn2yk",
    authDomain: "a-blog-8e360.firebaseapp.com",
    projectId: "a-blog-8e360",
    storageBucket: "a-blog-8e360.appspot.com",
    messagingSenderId: "454012357571",
    appId: "1:454012357571:web:972433510c1de8f4430b76",
    measurementId: "G-P5YBH1RWL9",
    databaseURL: "https://a-blog-8e360-default-rtdb.firebaseio.com"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);

  function writeUserData(name) {
    const db = getDatabase();
    set(ref(db, '/messsage'), {
      username: name
    });
  }


</script>