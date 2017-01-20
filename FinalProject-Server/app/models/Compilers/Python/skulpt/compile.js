

function run_code(code)
{
    var imported1 = document.createElement("script")
    imported1.type ="text/javascript"
    imported1.src = "Compilers/Python/skulpt/skulpt.min.js"
    imported1.onload = callback

    var imported2 = document.createElement("script")
    imported2.type ="text/javascript"
    imported2.src = "Compilers/Python/skulpt/skulpt-stdlib.js"
    imported2.onload = callback

    var imported3 = document.createElement("script")
    imported3.type ="text/javascript"
    imported3.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"
    imported3.onload = callback

    head.appendChild(imported1)
    head.appendChild(imported2)
    head.appendChild(imported3)


    //var prog = document.getElementById("code").value;
    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }

    Sk.configure({ read: builtinRead });

    Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>",false,code,true);
    });
}


