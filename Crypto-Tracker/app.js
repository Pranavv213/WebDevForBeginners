const form = document.querySelector('#searchForm');
const res = document.querySelector('#resTable');
const cont = document.getElementById("allContaint");
var rec;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(rec){
        clearTimeout(rec);
    }
    const ctype = form.elements.coinType.value;
    cont.classList.add('mainClick');
    cont.classList.remove('main');    
    fetchPrice(ctype);
    

});

const fetchPrice = async(ctype) =>{
    const r = await axios.get(`https://api.cryptonator.com/api/ticker/${ctype}`);
    console.log(r.data.ticker.price);
    showPrice(r.data.ticker,r.data.timestamp);
     rec = setTimeout(() => fetchPrice(`https://api.cryptonator.com/api/ticker/${ctype}`), 10000);
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

const showPrice = (ticker,timestamp)=>{
    const time = timeConverter(timestamp);
    const price = ticker.price;
    const vol = ticker.volume;
    const change = ticker.change;
    const coin = ticker.base;
    const curr = ticker.target;
    var col= "green";
    if(change<0){
        col = "red";
    }
    res.innerHTML = `<tr class="bg-primary" style="color: white;">
    <td>
        Property
    </td>
    <td>
        Value
    </td>
</tr>
<tr>
    <td>${coin}</td>
    <td style="color:${col};"><span style="font-size: 1.3em;">${price}</span> ${curr}</td>
</tr>
<tr>
    <td>Volume (24hrs)</td>
    <td>${vol}</td>
</tr>
<tr>
    <td>Change (24hrs)</td>
    <td style="color:${col};">${change} ${curr}</td>
</tr>
<tr>
    <td>Last Update</td>
    <td>${time}</td>
</tr>`;
};