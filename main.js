var updatedImage = ["Cartoony Dad.webp", "Cartoony Grandma.jpg", "Cartoony mom.jpg", "Cartoony boy.jpg"];
var updatedName = ["Tushant Singh", "Kusum Singh", "Shivani Singh", "Shaurya Singh"] ;
var i = 0;
function update()
{
    
    
    
      document.getElementById("family_member_image").src=updatedImage[i];
      document.getElementById("family_member_name").innerHTML=updatedName[i];
      i++;
    
    
 
    
}
