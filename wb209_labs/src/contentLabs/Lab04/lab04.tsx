const Lab04 = () => {
  const search = (e:any) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    alert(`You searched for '${query}'`);
  }
  return (
    <>
      <form onSubmit={search}>
        <input className="border-2" name="query" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
export default Lab04;
