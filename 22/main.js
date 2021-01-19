function main(){

    /*
    var create_a = document.createElement('a');
    create_a.innerHTML = "Alexander Ismael"
    create_a.href = "second-main.html";
    document.body.appendChild(create_a);
    */
    /*
    var element = document.getElementById('main-a');
    element.href = "second-main.html";
    */

    var link = document.getElementById('main-a');
    console.log(link.href);
    console.log(link.protocol);
    console.log(link.host);
    console.log(link.hostname);
    console.log(link.port);
    console.log(link.pathname);
    console.log(link.search);
    console.log(link.hash);
    console.log(link.origin);
    
}

main()