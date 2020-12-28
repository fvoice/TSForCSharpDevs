function enumDemo()
{
    enum temperature {
        cold,
        hot
    }

    let temp = temperature.cold;

    temp = temperature.hot;

    switch (+temp)
    {
       case temperature.cold:
        console.log('brrr');
        break;
       case temperature.hot:
        console.log('yikes');
        break;
    }
}

enumDemo();