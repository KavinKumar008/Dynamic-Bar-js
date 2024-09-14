const container=document.querySelector(".container");

const courses=[
    {course:"HTML",percent:88,color:"#f28482"},
    {course:"CSS",percent:80,color:"#a2d2ff"},
    {course:"JavaScript",percent:70,color:"#0077b6"},
]

courses.forEach((course)=>{
    container.innerHTML +=`
    <div class="progress-group">
    <div class="circular-progress">
        <span class="course-value" style="color:${course.color}">0%</span>
    </div>
    <label class="text" style="color:${course.color}">${course.course}</label>
 </div>
    `;
})

const progressGroups=document.querySelectorAll(".progress-group");

progressGroups.forEach((progress,index)=>{
    let progressStartValue=0;
    let progressStartEnd=courses[index].percent;
    let speed=500;
    let progressTimer=setInterval(()=>{
    progressStartValue++;
    if(progressStartValue==progressStartEnd){
        clearInterval(progressTimer);
    }
    progress.querySelector('.circular-progress').
    style.background=`conic-gradient(${courses[index].color} ${3.6*progressStartValue}deg,#fff 0deg)`;

    progress.querySelector('.course-value').innerHTML=progressStartValue+"%"
    },speed);
})