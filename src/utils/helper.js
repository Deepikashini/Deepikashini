export function filterData(searchText, restaurants) {
    const filData = restaurants.filter((res) => 
        res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filData; 
}