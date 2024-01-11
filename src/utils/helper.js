export const filterData = (restaurants, searchText) => {
    return restaurants.filter((restaurant) =>
        restaurant.title.toLowerCase().includes(searchText.toLowerCase())
    );
}