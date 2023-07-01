// export function Button() {
//     function handleClick() {
//         alert('Реакт пока не рулит!');
//     };
    
//     return(
//         <div>
//             <button onClick={handleClick}>Нажми меня</button>
//         </div>

//     );
// }

export function Button() {
    return(
        <button onClick={function handleClick() {
        alert('Реакт пока не рулит!');
        }}>Нажми меня</button>
    );
}