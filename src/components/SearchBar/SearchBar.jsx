import css from "./SearchBar.module.css"
import { IoMdSearch } from "react-icons/io";
// import toast, {Toaster} from "react-hot-toast";



const SearchBar = ({ onSubmit }) => {
  const onHandleSubmit = (event) => {
		event.preventDefault();
		const inputValue = event.currentTarget.elements.searchedPic.value;
    inputValue === "" ? alert('please type something') : onSubmit(inputValue);
    event.currentTarget.reset();
	};
	return (
		<header className={css.header}>
			<form
				onSubmit={onHandleSubmit}
				className={css.form}
			>
				<input
					className={css.input}
					name='searchedPic'
					type='text'
					autoComplete='off'
					autoFocus
					placeholder='Search images and photos'
				/>
				<button
					type='submit'
					className={css.btn}
				>
					<IoMdSearch />
				</button>
			</form>
		</header>
	);
};

export default SearchBar
