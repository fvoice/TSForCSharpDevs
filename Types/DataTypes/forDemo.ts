function forDemo()
{
    let myDict = {a :"1", b:"2", c:"3"}

    for(var key in myDict)
    {
        console.log(`Key - ${key}, value - ${myDict[key]}`);
    }
}

forDemo();