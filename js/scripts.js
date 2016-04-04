$().ready(function () {

  // The following code is to show the person who said the
  // quote.

  //There is a mistake here because it  is only showing the

  var alanKayImg = "<figure class='quote-image'> <img src='/images/alanKay.jpg' > <figcaption> Alan Kay </figcaption> </figure>"



  // $(".quote button").click(function(){
  //   $(this).after(alanKayImg)
  //   $(this).remove()
  // })

   var kahlilGibranImg = "<figure class='quote-image'> <img src='/images/kahlil-gibran.jpg' > <figcaption> Kahlil Gibran</figcaption> </figure>"

  // $(".quote button").click(function () {
  //   $(this).after(kahlilGibranImg)
  //   $(this).remove()
  // })

  var mlkImage = "<figure class='quote-image'> <img src='/images/mlk.jpg' > <figcaption>Martin Luther King Jr.</figcaption> </figure>"

  $(".quote button").click(function () {
    $(this).after(mlkImage)
    $(this).remove()
  })


  //TODO: Write code here to make images on favorites page fade in and out when hovered over





})
