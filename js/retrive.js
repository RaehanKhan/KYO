function disp(){
    var database = firebase.database();
    var ref = database.ref('KYO');
    ref.on("value", gotData);
    
    function gotData(data) {
        var disp = document.getElementById("disp");
        var kyos = data.val();
        // Grab the keys to iterate over the object
        var keys = Object.keys(kyos);
        var str = "";
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            // Look at each fruit object!
            var kyo = kyos[key];

            str+='<div class="col-12 col-lg-4">'+
                    '<div class="card features">'+
                        '<div class="card-body">'+
                            '<div class="media">'+
                                '<span class="ti-face-smile gradient-fill ti-3x mr-3"></span>'+
                                '<div class="media-body">'+
                                    '<h4 class="card-title">'+kyos[key].bname+'</h4>'+
                                    '<p class="card-text">'+kyos[key].status+'</p>'+
                                    '<p><a href="#">'+kyos[key].city+' ,'+kyos[key].state+'</a></p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';

            /*str+="<label>Brand Name: <b>"++"</b></label><br>";
            str+="<label>Name: "+kyos[key].name+"</label><br>";
            str+="<label>City: "+kyos[key].city+"</label><br>";
            str+="<label>State: "+kyos[key].state+"</label><br>";
            str+="<label>Country: "+kyos[key].country+"</label><br>";
            str+="<label>Designation: "++"</label><br><br><br>";*/

        }
        disp.innerHTML = str;
    }
}

function update() {

    var status = document.getElementById("status").value;

    var user = firebase.auth().currentUser;

        if (user != null) {
        user.providerData.forEach(function (profile) {
            console.log("  Email: " + profile.email);

            var database = firebase.database();
            var ref = database.ref('KYO');
            ref.on("value", gotData);

            function gotData(data) {
                var kyos = data.val();
                // Grab the keys to iterate over the object
                var keys = Object.keys(kyos);
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    // Look at each fruit object!
                    var kyo = kyos[key];
                    if(profile.email==kyos[key].email) {

                    if(status == "Yes") {
                        var database = firebase.database();

                        var ref = database.ref('KYO/'+key);
                        ref.update({
                            status: "available"
                        });
                    }
                    else {
                        var database = firebase.database();

                        var ref = database.ref('KYO/'+key);
                        ref.update({
                            status: "unavailable"
                        });
                    }
                }
                }
            }
        });
        }
        else {
            alert("Please Login or Sign In")
        }
}

function sign_out() {
    firebase.auth().signOut().then(function() {
        console.log("Successful SignOut!!!");
        window.location = "index.html"
    }).catch(function(error) {
    // An error happened.
    });
}