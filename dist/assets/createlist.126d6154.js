import"./alert.29446747.js";import"./listings.e01cd3ce.js";const A="https://nf-api.onrender.com/api/v1",P="/auction/listings",h=`${A}${P}`,a=document.getElementById("title"),l=document.getElementById("description"),d=document.getElementById("tags"),m=document.getElementById("media"),u=document.getElementById("end-time"),S=document.getElementById("post-form"),g=document.getElementById("title-error"),p=document.getElementById("description-error"),T=document.getElementById("tags-error"),E=document.getElementById("media-error"),y=document.getElementById("end-time-error"),t=document.getElementById("userMessage"),b=document.getElementById("post"),q=localStorage.getItem("accessToken");function w(){b.addEventListener("click",async f=>{f.preventDefault(),console.log("form is submitted!"),console.log(q),a.value.trim()===""?g.innerHTML="Title is required":g.innerHTML="",l.value.trim()===""?p.innerHTML="Description is required":p.innerHTML="",d.value.trim()===""?T.innerHTML="Tags is required":T.innerHTML="",m.value.trim()===""?E.innerHTML="Media is required":E.innerHTML="",u.value.trim()===""?y.innerHTML="End time is required":y.innerHTML="";const v=a.value.trim(),I=l.value.trim(),M=d.value.trim().split(","),B=m.value.trim().split(","),L=u.value.trim(),n=new Date(L).toISOString();console.log(n);const o={title:v,description:I,tags:M,media:B,endsAt:n};console.log(o);async function H(s,i){try{const c={method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("accessToken")}`},body:JSON.stringify(i)};console.log(s,i,c);const e=await fetch(s,c);console.log(e);const k=await e.json();console.log(k),e.ok?e.ok&&(t.innerHTML=`
                        <div class="text-success">
                            <b>Post created successfully</b>
                        </div>
                        `,setTimeout(()=>{S.reset(),t.innerHTML=""},3e3)):t.innerHTML=`
                        <div class="text-danger">
                            <b>Please check image url </b>
                        </div>
                        `}catch(r){console.warn(r)}}H(h,o)})}w();
