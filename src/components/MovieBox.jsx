export default function MovieBox({
  category,
  selectedMovies,
  setSelectedMovies,
}) {
  const handleSelection = (category) => {
    if (selectedMovies.includes(category)) {
      setSelectedMovies(selectedMovies.filter((item) => item !== category));
    } else {
      setSelectedMovies([...selectedMovies, category]);
    }
  };
  console.log(selectedMovies);
  return (
    <>
      {/* <div> */}
         {/* for styling of page2 */} 
      {/* </div> */}

      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "lightblue",
          display: "flex",
          margin: "10px",
          justifyContent: "center",
          alignItems: "center",
          border: `2px solid ${
            selectedMovies.includes(category) ? "red" : "black"
          }`,
        }}
        onClick={() => handleSelection(category)}
      >
        <h2>{category.movie}</h2>
      </div>
    </>
  );
}
