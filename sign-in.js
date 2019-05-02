googleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result);
        console.log("Success...");
        window.location = "home.html"
      }).catch(function(error) {
        console.log(error);
        console.log("Login Failed");
      });   
}