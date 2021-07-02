var url="https://api.spacexdata.com/v3/launches?limit=100";
var arr=[];
var button=[];
var response;
var data;
//document.querySelector("#launch").launch.addEventListener("click",successfulLaunch);
async function hell(){
response=await fetch("https://api.spacexdata.com/v3/launches?limit=100")
data =await (response.json());
for(var i=0;i<data.length;i++)
{
arr.push(`${data[i].launch_year}`);
 }
 
 for(var i=0;i<arr.length;i++)
		{
			if(arr[i]!=-1)
			{
				button.push(arr[i]);
				for(var j=i+1;j<arr.length;j++)
				{
					if(arr[i]==arr[j]){
						arr[j]=-1;
					}
				}
			}
		}
for(var i=0;i<button.length;i++){
var x =document.querySelector(".img-div");
var button1=document.createElement("button");
button1.innerHTML=`${button[i]}`;
x.appendChild(button1); 
}
x.addEventListener("click",clicked);
}
hell();
var btlist=document.querySelector(".launch_success");
btlist.addEventListener("click",successfulLaunch);
document.querySelector(".landing_success").addEventListener("click",successfullanding);


//get imgs function

async function getimgs(url){
response=await fetch(url);
data =await (response.json());
console.log(data.length);
var x =document.querySelector(".img-div1");
if(data.length<=0){
	var nodata=document.createElement("h2");
	nodata.innerHTML="No Data Found";
	x.appendChild(nodata);
}

for(var i=0;i<data.length;i++)
{
var x1=document.createElement("div");
x.id="img-Divs";
var img=document.createElement("img");
img.src=`${data[i].links.mission_patch_small}`;
img.style.width="100px";
img.style.height="100px";
x1.appendChild(img);
var h3=document.createElement("h3");
h3.innerHTML=`${data[i].mission_name} # ${data[i].flight_number}`;
h3.style.color="lightblue"; 
x1.appendChild(h3);
x.appendChild(x1);
var h3_1=document.createElement("h3");
h3_1.innerHTML="Mission id's";
x1.appendChild(h3_1);
x.appendChild(x1);
ul=document.createElement("ul");
li=document.createElement("li");
li.innerHTML=`${data[i].mission_id}`;
li.style.color="lightblue";
ul.appendChild(li);
x1.appendChild(ul);
x.appendChild(x1);
h3_2=document.createElement("h3");
h3_2.innerHTML="Launch Year";
span=document.createElement("span");
span.innerHTML=`::${data[i].launch_year}`;
span.style.color="lightblue";
h3_2.appendChild(span);
x1.appendChild(h3_2);
x.appendChild(x1);
h3_3=document.createElement("h3");
h3_3.innerHTML="Success Launch";
span=document.createElement("span");
span.innerHTML=`::${data[i].launch_success}`;
span.style.color="lightblue";
h3_3.appendChild(span);
x1.appendChild(h3_3);
x.appendChild(x1);
h3_4=document.createElement("h3");
h3_4.innerHTML="Success Landing";
span=document.createElement("span");
span.innerHTML=`::${data[i].land_success}`;
span.style.color="lightblue";
h3_4.appendChild(span);
x1.appendChild(h3_4);
x.appendChild(x1);
}
}
getimgs(url);
async function clicked(e){
var x =document.querySelector(".img-div1");
	x.innerHTML="";
	var year=e.target.textContent;
	alert(year);
	url=`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${e.target.textContent}`;
	console.log(url);
	getimgs(url);
	console.log("Completed");
}
function successfulLaunch(e)
{
	var x =document.querySelector(".img-div1");
	x.innerHTML="";
	url=`${url}&launch_success=${e.target.textContent}`;
	console.log(url);
	getimgs(url);
}
function successfullanding(e)
{
	var x =document.querySelector(".img-div1");
	x.innerHTML="";
	url=`${url}&land_success=${e.target.textContent}`;
	console.log(url);
	getimgs(url);
}
