function print(){}

function runScripts(lst, tail)
{
    function r(i, txt)
    {
        if(i == lst.length)
        {
            eval.call(window, txt);
            tail();
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.open('GET', lst[i], true);
        xhr.send('');
        xhr.onload = function()
        {
            r(i+1, txt+xhr.responseText+'\n');
        }
    }
    r(0, '');
}

function done()
{
    if(main_ret == 0 || main_ret == 179)
    {
        alert("You're all set!");
        read_ptr_at(0);
    }
    else
        alert("Jailbreak failed! Reboot your PS4 and try again.");
}

window.postExploit = function()
{
    runScripts(['702.js', 'jb702/c-code.js', 'mira702/c-code.js'], done);
};
