import SearchInput from "@/components/BasicComponents/SearchInput/SearchInput"

export default function profile() {
    const data = ['steelhead', 'salmon', 'smallmouth', 'largemouth', 'pike', 'musky', 'browntrout']

    return (
        <SearchInput 
        placeholder={'Search fish...'}
        required
        id='searchfish'
        name='searchfish'
        error={false}
        data={data}
        dataListId='search'
        helperText='search your fish'
        />
    )
}