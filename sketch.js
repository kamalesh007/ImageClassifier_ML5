let pre_model;
let predict_image;
function modelReady()
{
  console.log("Ready!!!");

  pre_model.predict(predict_image,loadres);

}
function loadres(err,data)
{
  if(err)
  {
    console.log("erorr");
  }
  else {
    console.log(data);
    createP("predicted image is -->"+data[0].className);
    createP("Probability :"+data[0].probability);
  }
}
function imageload()
{

  console.log("imageloaded");

}
function setup()
{

    pre_model=ml5.imageClassifier("MobileNet",modelReady);
  predict_image=createImg("images/dane.jpg",imageload);



}
function loop()
{

}
