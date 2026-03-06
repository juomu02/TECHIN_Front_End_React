import BookEditForm from "./BookEditForm";

function BookEditSidebar({ setIsEditOpen, productToEdit }) {
  const handleToggle = (e) => {
    const result = e.target.value;
    setIsEditOpen(result);
  };
  return (
    <div className="drawer drawer-end z-1">
      <input
        id="my-drawer-1"
        type="checkbox"
        defaultChecked
        className="drawer-toggle"
      />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={handleToggle}
        />
        <div className="menu bg-base-200 min-h-full w-80 p-4 my-20">
          <BookEditForm
            productToEdit={productToEdit}
            setIsEditOpen={setIsEditOpen}
          />
        </div>
      </div>
    </div>
  );
}
export default BookEditSidebar;
