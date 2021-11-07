
// <!----Declaration ---->
var bookmarkName = document.getElementById("bookmarkName");
var bookmarkUrl = document.getElementById("bookmarkUrl");
var bookMarks = [];

Displaymarks()
// <!---- one mark ---->
function addbookmark()
{
    var onemark = { name: bookmarkName.value , url: bookmarkUrl.value }
    bookMarks.push(onemark)
    storemark()    
    Displaymarks()
    clearData()
}

// <!----Display Marks ---->
function Displaymarks()
{
        if (localStorage.getItem("MarkStorage" ) != null)
        {
            bookMarks = JSON.parse(localStorage.getItem("MarkStorage" ))
        }

        var collector= ``;
        var clearAll=` <tr class=" text-center">
                                <td class=" fw-bold my-5 py-3">  Clear All BooKMarks </td>
                                <td> <button class="btn btn-warning my-2 py-2 m-auto" onclick="clearall()"> Clear All </button> </td>
                                </tr> `;
        
        for(var i =  0 ; i < bookMarks.length ; i ++)
        {
            collector = collector + `   <tr >
                                            <td class=" fw-bold my-5 py-3">`+ bookMarks[i].name + `</td>
                                            <td class="my-5 py-3"> <a class="me-4 text-decoration-none" target="_blank" href="http://`+ bookMarks[i].url +`"> <button class="btn btn-primary"> VisT </button> </a> 
                                            <button class="btn btn-danger" onclick="DeleteMark(`+i+`)"> Delete </button> </td>
                                        </tr>`
        }

        if(bookMarks.length == 0)
        {
            clearAll = ``;
            document.getElementById("Display").innerHTML= collector; 
        }
        else
        {
            document.getElementById("Display").innerHTML=collector + clearAll;
        }
}

// <!----Delete Marks ---->
function DeleteMark(i)
{
    bookMarks.splice(i,1)
    storemark()    
    Displaymarks()
}

// <!----clear Data ---->
function clearData()
{
    bookmarkName.value = "";
    bookmarkUrl.value = "";
}

// <!----Clear All Marks ---->
function clearall()
{
    bookMarks = [];
    storemark()
    Displaymarks()
}

// <!----Store The  Marks ---->
function storemark()
{
    localStorage.setItem("MarkStorage",JSON.stringify(bookMarks))
}

// <!----search Marks ---->
function search(search)
{
    var collector= ``;
    for(var i =  0 ; i < bookMarks.length ; i ++)
    {
    if(bookMarks[i].name.toLowerCase().includes(search.toLowerCase()))
        {       
            collector = collector + `   <tr >
                                        <td class=" fw-bold my-5 py-3">`+ bookMarks[i].name + `</td>
                                        <td class="my-5 py-3"> <a class="me-4 text-decoration-none" target="_blank" href="http://`+ bookMarks[i].url +`"> <button class="btn btn-primary"> VisT </button> </a> 
                                        <button class="btn btn-danger" onclick="DeleteMark(`+i+`)"> Delete </button> </td>
                                        </tr>`
        }
    }
    document.getElementById("Display").innerHTML=collector    
}

// <!=======================================!>
document.addEventListener("click",namereg)
function namereg()
{
    var nameRegEx = /^[A-Za-z]+$/;

    if (nameRegEx.test(bookmarkName.value))
    {
        console.log("welcome")
    }
    else
    {
        console.log("error")
    }
}




