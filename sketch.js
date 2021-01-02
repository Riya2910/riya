var covid, covid1, earthquake, earthquake1, flood, flood1
  var c1,c2,c3,c4,e1,e2,e3,e4,f1,f2,f3,f4
  var start,start1,end ,end1,image,image1
  function preload(){
    covid1=loadImage("images/covid19/image.jpg")
    earthquake1=loadImage("images/earthquke/earthquake.jpg")
    flood1 = loadImage("images/flood/flood.jpg")
c2=loadImage("images/covid19/image1.jpg")
c4=loadImage("images/covid19/image2.jpg")
e2=loadImage("images/earthquke/option1.jpg")
e4=loadImage("images/earthquke/option2.jpg")
f2=loadImage("images/flood/option1.jpg")
f4=loadImage("images/flood/option2.jpg")
start1=loadImage("images/ep/start.jpg")
end1=loadImage("images/ep/end.jpg")
image1=loadImage("images/ep/1.png")

        
  }

  function setup() {
    createCanvas(500,500)
start=createSprite(250,250,20,20)
start.addImage("start1",start1)
start.visible="true"

end=createSprite(250,150,20,20)
end.addImage("end1",end1)
end.visible="false"

image=createSprite(250,200,20,20)
image.addImage("image1",image1)
image.visible="true"


    covid=createSprite(100, 250, 20, 20)
    covid.addImage("covid1",covid1)
    covid.visible="false"

    earthquake = createSprite(200, 250, 20, 20)
    earthquake.addImage("earthquake1",earthquake1)
    earthquake.visible="false"

    flood = createSprite(250, 400, 20, 20)
    flood.addImage("flood1",flood1)
    flood.visible="false"

    c1=createSprite(100,250,20,20)
    c1.addImage("c2",c2)
    c1.visible="false"

    c3=createSprite(200,250,20,20)
    c3.addImage("c4",c4)
    c3.visible="false"

    e1=createSprite(100,250,20,20)
    e1.addImage("e2",e2)
    e1.visible="false"

    e3=createSprite(200,250,20,20)
    e3.addImage("e4",e4)
    e3.visible="false"
    
    f1=createSprite(100,250,20,20)
    f1.addImage("f2",f2)
    f1.visible="false"

    f3=createSprite(200,250,20,20)
    f3.addImage("f4",f4)
    f3.visible="false"
  }




  
    

  function draw() {
    background("white")
    if(mousePressedOver(start)){
      covid.visible="true"
      earthquake.visible="true"
      flood.visible="true"
      start.visible="false"
      image.visible="false"
    }
    
    if(mousePressedOver(end)){
      end.visible="false"
      start.visible="true"
      image.visible="true"
    }
    

    if(mousePressedOver(covid)){
      covid.visible="false"
      earthquake.visible="false"
      flood.visible="false"
      c1.visible="true"
      c3.visible="true"
      text("click on option to get your correct answer",250,250)
      fill("red")
      
    }
    if(mousePressedOver(earthquake)){
      covid.visible="false"
      earthquake.visible="false"
      flood.visible="false"
      e1.visible="true"
      e3.visible="true"
      text("click on option to get your correct answer",250,250)
      fill("red")
            
    }
    if(mousePressedOver(flood)){
      covid.visible="false"
      earthquake.visible="false"
      flood.visible="false"
      f1.visible="true"
      f3.visible="true" 
      text("click on option to get your correct answer",250,250)
      fill("red")
      
    }
    if(mousePressedOver(c1)){
     c1.visible="false"
     c3.visible="false" 
     end="true"
     text("click on the restart button to reset",300,150)
     fill("red")
     text("WOW!! YOUR ANSWER IS CORRECT",250,250)
     fill("blue")
      
    }
    if(mousePressedOver(c3)){
      c1.visible="false"
      c3.visible="false"
      text("Sorry Your Answer is Wrong")
      fill("yellow") 
      end="true"
      text("click on the restart button to reset",300,150)
      fill("red")

       
     }
     if(mousePressedOver(f1)){
      f1.visible="false"
      f3.visible="false"
      text("WOW!! YOUR ANSWER IS CORRECT")
      fill("blue") 
      end="true"
      text("click on the restart button to reset",300,150)
      fill("red")

       
     }
     if(mousePressedOver(f3)){
      f1.visible="false"
      f3.visible="false"
      end="true"
      text("click on the restart button to reset",300,150)
      fill("red")
      text("Sorry Your Answer is Wrong")
      fill("yellow")

     }
    
    if(mousePressedOver(e1)){
     e1.visible="false"
     e3.visible="false"
     text("WOW!! YOUR ANSWER IS CORRECT")
     fill("blue") 
     end="true"
     text("click on the restart button to reset",300,150)
     fill("red")
    }
    if(mousePressedOver(e3)){
      e1.visible="false"
 e3.visible="false"
 text("Sorry Your Answer is Wrong")
    fill("yellow")
     end="true"
    text("click on the restart button to reset",300,150)
    fill("red")


}
  }
  

  
