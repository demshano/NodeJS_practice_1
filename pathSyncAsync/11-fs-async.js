const { readFile, writeFile } = require('fs');

console.log('before reading');

readFile('./content/subFolder/test.txt', 'utf8', (err, result)=>
{
    if(err)
    {
        console.log('error: '+err);
        return;
    }
    const first = result;

readFile('./content/subFolder/second.txt', 'utf8', (err, result)=>
{
    if(err)
    {
        console.log(err);
        return;
    }
    const second = result;

    writeFile('./content/result-sync.txt', ` here is the results: ${second} `,
    (err, result)=>
{
    if(err)
    {
        console.log(err);
        return;
    }
    const second = result;
    console.log('done with this task');
}
    );
})

})

console.log('starting with new one');