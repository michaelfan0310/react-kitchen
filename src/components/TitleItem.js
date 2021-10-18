function TitleItem(){

    const titleDate = new Date(2021,2,9);

    return(<div>
<h1> DoubleTree's Cookie Recipe Book </h1>
<h1> Michael's Favourite Choice <i className="fas fa-thumbs-up"></i></h1> 
<h6>{titleDate.toISOString()}</h6>
</div>
    );
}

export default TitleItem