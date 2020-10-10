export default function(state) {
    return {
        isFetching: state.homePage.isFetching,
        lastUpdated: state.homePage.lastUpdated,
        items: state.homePage.items,
        favourites: state.favourites
    }
}
