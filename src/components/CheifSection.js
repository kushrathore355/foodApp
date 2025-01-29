import CheifsCard from "./CheifCard"

export default function CheifSection() {
    const Cheifs = [
        {
            name : "Juan Carlos",
            img : "img/top-cheifs/img_1.jpg",
            recipesCount : "10",
            cuisine : "Maxican",
        },
        {
            name : "John Doe",
            img : "img/top-cheifs/img_2.jpg",
            recipesCount : "05",
            cuisine : "Japanese",
        },
        {
            name : "Erich Maria",
            img : "img/top-cheifs/img_3.jpg",
            recipesCount : "13",
            cuisine : "Italian",
        },
        {
            name : "Chris Brown",
            img : "img/top-cheifs/img_4.jpg",
            recipesCount : "08",
            cuisine : "American",
        },
        {
            name : "Blake Lively",
            img : "img/top-cheifs/img_5.jpg",
            recipesCount : "09",
            cuisine : "French",
        },
        {
            name : "Ben Affleck",
            img : "img/top-cheifs/img_6.jpg",
            recipesCount : "04",
            cuisine : "Indian",
        },
    ]
    return(
        <div className="section cheifs">
            <h1 className="title">Our Top Cheifs</h1>
            <div className="top-cheifs-container">
                {/* <CheifsCard />
                <CheifsCard />
                <CheifsCard />
                <CheifsCard />
                <CheifsCard />
                <CheifsCard /> */}
                { Cheifs.map(cheifs => <CheifsCard key={cheifs.name} cheif={cheifs} /> ) }
            
            </div>
        </div>
    )
}