function TitleItem2(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date().getDay();
    const titleDate=weekday[d];

    return(<div>
<h1> Michael's Cookie Recipe Book <i className="fas fa-thumbs-up"></i></h1>

<h6 className="date">{titleDate}</h6>
</div>
    );
}

export default TitleItem2;