import RecipeCard from "../components/RecipeCard"
import PreviousSearches from "../components/PreviousSearches"
export default function Recipes() {
        
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImage: "/img/top-cheifs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImage: "/img/top-cheifs/img_2.jpg"
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImage: "/img/top-cheifs/img_3.jpg"
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImage: "/img/top-cheifs/img_4.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImage: "/img/top-cheifs/img_5.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImage: "/img/top-cheifs/img_6.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImage: "/img/top-cheifs/img_1.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImage: "/img/top-cheifs/img_2.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImage: "/img/top-cheifs/img_3.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImage: "/img/top-cheifs/img_4.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImage: "/img/top-cheifs/img_5.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
            authorImage: "/img/top-cheifs/img_6.jpg",
        }
    ].sort(() => Math.random() - 0.5)
    
    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe,index)=>(
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
        
    )
}