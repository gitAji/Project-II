import"./nav.635f5b05.js";const c="https://nf-api.onrender.com/api/v1",d="/auction/auth/login",m=`${c}${d}`,u=document.getElementById("loginBtn");document.getElementById("userName");function g(){u.addEventListener("click",s=>{s.preventDefault();const r=document.getElementById("email").value.trim(),o=document.getElementById("password").value.trim();r===""?emailError.innerHTML="Email is required":(r.includes!="noroff.no",emailError.innerHTML="Please enter your student email address."),o===""?passwordError.innerHTML="Password is required":o.length<8?passwordError.innerHTML="Password is too short.":(userMessage.innerHTML="",emailError.innerHTML="",passwordError.innerHTML="");const t={email:r,password:o};async function i(a,l){try{const e=await fetch(a,{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}}),n=await e.json();if(e.status===200){const f=localStorage.setItem("username",n.name),E=localStorage.setItem("accessToken",n.accessToken),T=localStorage.setItem("credits",n.credits);window.location.href="profile.html",setTimeout(()=>{form.reset(),emailError.innerHTML=""},500)}else userMessage.innerHTML=n.status}catch(e){console.log(e)}}i(m,t)})}g();
