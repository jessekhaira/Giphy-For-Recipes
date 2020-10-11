export default function(state, action) {
    document.getElementById('mainSearch').style.display = 'flex';
    document.getElementById('backOffSearch').style.display = 'none'; 
    document.getElementById('gridHolder').style.display = 'block'; 
    document.getElementById('searchResultHolder').style.display = 'none'; 
    return Object.assign({}, state, {showingSearch:false});
}