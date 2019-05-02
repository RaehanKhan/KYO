function save(){
    var bname = document.getElementById("bname").value;
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var designation = document.getElementById("des").value;
    // Get a reference to the database service
    var database = firebase.database();

    var ref = database.ref('KYO');

    ref.push({
        bname: bname,
        name: name,
        city: city,
        state: state,
        country: country,
        designation: designation
    });

}