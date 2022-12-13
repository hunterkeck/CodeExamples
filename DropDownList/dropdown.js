<script>
    function  fillmobile() {
    removeOptions()
    switch(company.selectedIndex)
    {
        case 1:
            var mb=["-Model-","Note 10 Lite","S21","M31","M51"]
            fillModel(mb)
            break
         case 2:
            var mb=["-Model-","Iphone 13 Pro","Iphone 13","Iphone 13 Mini"]
            fillModel(mb)
            break

         case 3:
            var mb=["-Model-","Redmi Note 6","Redmi Note 7","Redmi Note 7 Pro"]
            fillModel(mb)
            break
    }
}

function removeOptions(){
      for(var j=model.options.length-1;j>=0;j--)
      {
          model.remove(j)
      }

}

function fillModel(mb){
    for(var i=0;i<mb.length;i++)
    { var opt=document.createElement("option")
        opt.text=mb[i]
        model.add(opt)
    }
}
</script>