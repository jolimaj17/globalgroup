window.onload = function(e){ 
    pages.show(0);
}
var pages= {
    

    work:function()
    {
        $('#content').load('html/20.html');
    },
	show: function(n)
	{
        $('#content .page').hide();

        switch(n)
        {
            case 0:
                $('#content').load('html/10.html');
            break;
            case 1:
                pages.work();
            break;
            case 2:
                $('#content').load('html/30.html');
            break;
            case 3:
                $('#content').load('html/40.html');
            break;
            case 4:
                $('#content').load('html/50.html');
            break;
          
        }
  
    
    }
};