// import { useNavigate } from "react-router-dom";
// import { useState } from 'react';
// import style from './style.module.css';

// const SearchInput = () => {
//     const [searchInput, setSearchInput] = useState();
        
//     const navigate = useNavigate();
  
//     const onChange = (value) => {
//       setSearchInput(value.target.value);
//       navigate({
//         pathname: "/products",
//         search: `?search=${value.target.value}`,
//       });
//     };
  
    
  
//     return (
//       <div className={style.search}>
//         <input
//           name="search"
//           type="text"
//           onChange={onChange}
//           placeholder="Введите продукт"
//         />
//       </div>
//     );
//   };
  
//   export { SearchInput };