import SearchBar from "./components/SearchBar/SearchBar"


const App = () => {
	
	// const [searchedPic, setSearchedPic] = useState("");
	const onSubmit = (inputValue) => {
	console.log('inputValue:', inputValue)
	}
	
	// const onOpenModal = () => {
	// 	setModal(true);
	// };
	// const onCloseModal = () => {
	// 	setModal(false);
	// };
	return (
		<div>
			<SearchBar onSubmit={onSubmit} />
		</div>
	);
}

export default App
