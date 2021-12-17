function TitleItem(){

    const titleDate = new Date().toLocaleDateString();

    return(<div>
<h1> DoubleTree's Cookie Recipe Book <i className="fas fa-thumbs-up"></i></h1>

<h6 className="date">{titleDate}</h6>
</div>
    );
}

export default TitleItem;