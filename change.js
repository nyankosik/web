change=document.getElementById('change')



function change_all() {
    if (document.getElementsByTagName('div')[0].innerHTML==="Ягубкова")
    {
       document.getElementsByTagName('div')[0].innerHTML="Iagubkova"
       document.getElementsByTagName('div')[1].innerHTML="Anastasiia"
       document.getElementsByTagName('div')[2].innerHTML="Alekseevna"
       document.getElementsByTagName('div')[3]. innerHTML="&nbsp &nbsp female &nbsp &nbsp &nbsp &nbsp 2006 november 15th"
       document.getElementsByTagName('div')[7]. innerHTML="Novosibirsk"
       document.body.style.backgroundImage="url('images/eng_pas.jpg')"
    }
    else
        if (document.getElementsByTagName('div')[0].innerHTML==="Iagubkova")
        {
       document.getElementsByTagName('div')[0].innerHTML="Ягубкова"
       document.getElementsByTagName('div')[1].innerHTML="Анастасия"
       document.getElementsByTagName('div')[2].innerHTML="Алексеевна"
       document.getElementsByTagName('div')[3]. innerHTML="&nbsp &nbsp жен. &nbsp &nbsp &nbsp &nbsp 15/11/2006"
       document.getElementsByTagName('div')[7]. innerHTML="г.Новосибирск"
       document.body.style.backgroundImage="url('images/passport.png')"
        }
}
change.addEventListener('click',change_all)
